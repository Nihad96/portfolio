# Configuration du serveur de production

Serveur : Hetzner Cloud (Ubuntu)
IP : 188.245.222.147
Outil de déploiement : Coolify 4.x
Reverse proxy : Traefik v3 (géré par Coolify)

---

## 1. Accès initial au serveur

Se connecter en SSH :

```bash
ssh root@188.245.222.147
```

---

## 2. Mise à jour du système

```bash
apt update && apt upgrade -y
```

---

## 3. Installation des dépendances de base

```bash
apt install -y git curl
```

---

## 4. Sécurisation avec UFW (pare-feu)

```bash
apt install -y ufw

# Bloquer tout le trafic entrant par défaut
ufw default deny incoming
ufw default allow outgoing

# Autoriser SSH (indispensable, à faire AVANT d'activer UFW)
ufw allow OpenSSH

# Autoriser HTTP et HTTPS
ufw allow 80/tcp
ufw allow 443/tcp

# Activer le pare-feu
ufw enable

# Vérifier l'état
ufw status
```

---

## 5. Installation de Docker

```bash
curl -fsSL https://get.docker.com | sh
```

Vérifier l'installation :

```bash
docker --version
```

---

## 6. Installation de Coolify

```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

Après installation, Coolify est accessible sur :
```
http://188.245.222.147:8000
```

> **Note :** le port 8000 n'est pas ouvert via UFW intentionnellement — Coolify est accessible uniquement en local ou via SSH tunnel. Une fois le domaine `coolify.nihad.fr` configuré avec Traefik, on passe exclusivement par HTTPS.

Créer un compte administrateur lors du premier accès.

---

## 7. Démarrer le proxy Traefik dans Coolify

Après installation, le proxy Traefik est **arrêté par défaut**.

```
Coolify > Servers > localhost > Proxy > cliquer "Start Proxy"
```

Vérifier que le statut passe en **Running**. Sans ça, aucune requête HTTP/HTTPS n'est routée et aucun certificat SSL ne peut être généré.

---

## 8. Configurer un domaine HTTPS pour Coolify lui-même

Pour activer le CI/CD via webhooks GitHub, Coolify doit être accessible en HTTPS (GitHub refuse les webhooks HTTP).

### 8.1 Ajouter l'enregistrement DNS chez le registrar

Chez le registrar (OVH, Gandi, etc.), ajouter :

```
Type  : A
Nom   : coolify
Valeur: 188.245.222.147
TTL   : 300
```

Vérifier la propagation :

```bash
nslookup coolify.nihad.fr
# Doit retourner 188.245.222.147
```

### 8.2 Renseigner l'URL dans Coolify

```
Coolify > Settings > "App URL" ou "Instance URL"
Valeur : https://coolify.nihad.fr
Sauvegarder
```

Traefik génère automatiquement le certificat Let's Encrypt. Le tableau de bord Coolify est ensuite accessible sur `https://coolify.nihad.fr`.

---

## 9. Déployer un site statique (exemple : portfolio)

### 9.1 Créer une nouvelle application dans Coolify

```
Coolify > Projects > New Project > Add Resource > Public Repository
```

Renseigner :
- Repository : `https://github.com/Nihad96/portfolio`
- Branch : `main`
- Build pack : `Nixpacks`

### 9.2 Configurer les domaines

Dans l'application > **Domains**, entrer les domaines **avec le préfixe https://** :

```
https://nihad.fr
https://www.nihad.fr
```

> **Piège :** si tu entres `nihad.fr` sans `https://`, Coolify génère des labels Traefik invalides (`Host(``) && PathPrefix(...)`) et le routing ne fonctionne pas.

### 9.3 Pointer le DNS vers le serveur

Chez le registrar, ajouter :

```
Type  : A
Nom   : @        (pour nihad.fr)
Valeur: 188.245.222.147

Type  : A  (ou CNAME)
Nom   : www
Valeur: 188.245.222.147
```

### 9.4 Configurer la version de Node.js

Astro 6+ nécessite Node.js >= 22.12.0. Nixpacks peut résoudre une version inférieure si on ne la fixe pas explicitement.

Ajouter un fichier `.node-version` à la racine du repo :

```
22.12.0
```

### 9.5 Déployer

```
Coolify > Application > Deploy
```

---

## 10. Configurer le CI/CD avec GitHub Actions

Le déploiement automatique est géré via GitHub Actions. À chaque `push` sur `main`, un workflow appelle le webhook Coolify avec un token d'authentification.

### 10.1 Récupérer l'URL du webhook dans Coolify

```
Coolify > Application > Settings > "Deploy Webhook"
```

L'URL ressemble à :
```
https://coolify.nihad.fr/api/v1/deploy?uuid=XXXX&force=false
```

### 10.2 Générer un token API Coolify

```
Coolify > Profile > API Tokens > New Token
```

- **Permissions** : `deploy` uniquement (principe du moindre privilège)
- **Expiration** : "Never" ou la durée la plus longue — un token qui expire casse le CI/CD silencieusement

Copier le token immédiatement, il ne sera plus affiché ensuite.

### 10.3 Ajouter les secrets dans GitHub

```
GitHub > repo > Settings > Secrets and variables > Actions > New repository secret
```

Ajouter deux secrets :
- `COOLIFY_WEBHOOK_URL` : l'URL complète du webhook Coolify
- `COOLIFY_TOKEN` : le token API généré à l'étape précédente

### 10.4 Le workflow GitHub Actions

Le fichier `.github/workflows/deploy.yml` est déjà présent dans le repo :

```yaml
name: Deploy to production

on:
  push:
    branches:
      - main

jobs:
  deploy:
    name: Trigger Coolify deployment
    runs-on: ubuntu-latest
    steps:
      - name: Call Coolify webhook
        run: |
          curl -s -o /dev/null -w "%{http_code}" \
            -X GET "${{ secrets.COOLIFY_WEBHOOK_URL }}" \
            -H "Authorization: Bearer ${{ secrets.COOLIFY_TOKEN }}"
```

Désormais, chaque `git push` sur `main` déclenche automatiquement un redéploiement via GitHub Actions.

---

## Résumé des pièges rencontrés

| Problème | Cause | Solution |
|---|---|---|
| Build échoue avec Node 22.11.0 | Nixpacks résout une version trop ancienne | Ajouter `.node-version` avec `22.12.0` |
| Site inaccessible après déploiement | Proxy Traefik non démarré | Servers > Proxy > Start Proxy |
| 404 / no available server | Domaines sans préfixe `https://` dans Coolify | Utiliser `https://nihad.fr` et non `nihad.fr` |
| Webhook GitHub retourne 401 | Coolify exposé en HTTP sur port 8000 | Configurer `coolify.nihad.fr` en HTTPS |
| Certificat SSL non généré | DNS pas encore propagé ou proxy arrêté | Vérifier `nslookup`, redémarrer le proxy |
| "Router defined multiple times" dans Traefik | Deux conteneurs coexistent pendant un redéploiement | Normal, disparaît automatiquement |
