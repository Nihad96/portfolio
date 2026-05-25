<?php
if(!isset($_COOKIE['display_mode'])) {
    $_COOKIE['display_mode'] = 'dark';
    $expiryDate = time() + 365 * 24 * 60 * 60; // One year in seconds
    setcookie("display_mode", "light", $expiryDate, "/");
}
?>


<!DOCTYPE html>
<html lang="fr">
<meta charset="UTF-8">
<title>Nihad Zatric</title>
<meta property="og:image" content="https://nihad.fr/images/icons/android-chrome-512x512.png">
<meta property="og:image:type" content="image/jpg" />
<meta property="og:image:width" content="240" />
<meta property="og:image:height" content="240" />
<meta property="og:image:alt" content="Display Picture" />
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="Bienvenue sur le portfolio de Nihad Zatric, développeur web spécialisé dans le back end et basé à Strasbourg. Découvrez ici mes expériences et mes réalisations.">
<link rel="stylesheet" href="style.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;600&family=Roboto+Slab:wght@100;400&family=Vollkorn:wght@400&display=swap" rel="stylesheet" rel="preload" as="style">
<link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="images/icons/favicon-16x16.png">

    <body id="<?php echo($_COOKIE['display_mode']) ?>">
        <div id="wrapper">
            <div id="header">
                <div id="heading">
                    <h1 id="name"><a href="/">Nihad Zatric</a></h1>
                    <h2 id="title">Développeur full stack</h2>
                    <p id="subtitle">Spécialisé dans la conception d'applications web orientées métier.</p>
                </div>

                <div id="menu">
                    <a id="about" class="menu_active" onclick="menu(this.id)">Qui suis-je ?</a>
                    <a id="experiences" onclick="menu(this.id)">Expériences professionnelles</a>
                    <a id="projects" onclick="menu(this.id)">Projets personnels</a>
                    <a id="formations" onclick="menu(this.id)">Formations</a>
                </div>

                <div id="footer">
                    <div id="social">
                        <i class="fa-brands fa-linkedin" onclick="window.open('https://www.linkedin.com/in/nihadzatric/')"></i>
                        <i class="fa-brands fa-github" onclick="window.open('https://github.com/Nihad96')"></i>
                        <i id="display_mode_button" class="fa-solid fa-lightbulb" onclick="setDisplayMode('<?php echo($_COOKIE['display_mode']) ?>')"></i>
                    </div>
                </div>
            </div>
            <div id="content">
                <div id="about_section" class="section">
                    <h3>Qui suis-je ?</h3>
                    <p>Fort de 4 ans d’expérience dans l’<b>intégration et la maintenance applicative d’ERP</b>, j’interviens principalement avec <b>PHP (Laravel)</b> et <b>Vue.js</b>, en concevant des <b>applications modernes</b> et <b>adaptées aux besoins métiers</b>. Polyvalent, je suis également en mesure de d'invervenir sur des projets web plus classiques, comme des <b>sites internet vitrine</b> ou des <b>applications sur mesure</b>.</br></br>
                        Curieux, autonome et doté d’un bon esprit d’équipe, je suis naturellement attiré par les <b>nouveaux défis</b> professionnels et l’<b>apprentissage continu</b>. J’aime explorer de nouvelles technologies à travers des <b>projets concrets</b>, en gardant toujours en tête l’objectif de répondre au mieux aux <b>problématiques métiers</b>.
                    </p>
                    </br>
                    <p style="text-align:right">
                    Pour consulter mon CV, <b onclick="window.open('CV_Nihad_Zatric.pdf')" id="download_resume">cliquez ici</b>.
                    </p>
                </div>

                <div id="experiences_section" class="section">

                    <h3>Expériences professionnelles</h3>
					
					<div class="job">
                        <div class="left_panel">
                            <img src="images/france_solar.png" alt="img_france_solar" onclick="window.open('https://france-solar.fr/')" id="img_france_solar" width="50" height="63.72" />
                            <div class="stacks">
                                <p class="stack">Laravel 10</p>
                                <p class="stack">PHP 8.2</p>
                                <p class="stack">Vue 2 & 3</p>
                                <p class="stack">Nuxt 3</p>
                                <p class="stack">Vuetify</p>
                                <p class="stack">API REST</p>
                            </div>
                        </div>
                        <div class="right_panel">
                            <div class="right_panel_header">
                                <h4 class="job_subtitle">Développeur full stack - France Solar</h3>
                                <h5 class="job_location">Brumath</h4>
                                <p class="job_date">2023-2025</p>
                            </div>    
                                <div class="job_description">
                                    <p>
										Participation active à la <b>conception</b>, au <b>développement</b> et à l’<b>intégration</b> de <b>l’ERP maison "Ekoboy"</b>, utilisé quotidiennement par les <b>300 salariés</b> de l'entreprise, spécialisée dans la commercialisation et l’installation de solutions photovoltaïques.<br><br>
- Développement de fonctionnalités pour divers services : <b>facturation, planification, gestion des litiges, suivi de chantiers</b>, etc.<br>
- Intégration de services terrain, comme la <b>géolocalisation des véhicules via API</b> et le <b>suivi en temps réel des interventions</b>.<br>
- Réalisation des interfaces utilisateur avec <b>Vue 2</b> et <b>Vuetify</b>.<br><br>

Développement parallèle de <b>deux applications Nuxt 3</b> :<br>
- Application de <b>gestion des demandes d’achat</b><br>
- Application de <b>pointage des heures</b> par les ouvriers sur chantier<br><br>

Rôle élargi au-delà du développement :<br>
- Participation à la <b>découverte du besoin</b> et à la <b>conception fonctionnelle</b><br>
- Contribution au <b>découpage des tâches</b>, aux <b>choix techniques</b> et à l’<b>accompagnement d’un alternant</b><br><br>

<b>Equipe</b> : Développements internes, 5 personnes - méthodologie agile<br>
<b>Compétences</b> : Autonomie, Découverte du besoin, Gestion de projet<br>
                                    </p>
                                </div>
                        </div>
                    </div>

                    <div class="job">
                        <div class="left_panel">
                            <img src="images/sermes.png" alt="img_sermes" onclick="window.open('https://www.sermes.fr/')" id="img_sermes" width="50" height="63.72" />
                            <div class="stacks">
                                <p class="stack">PHP 8.2</p>
                                <p class="stack">Symfony 6</p>
                                <p class="stack">API REST</p>
                                <p class="stack">SQL DB2</p>
                                <p class="stack">Open API</p>
                            </div>
                        </div>
                        <div class="right_panel">
                            <div class="right_panel_header">
                                <h4 class="job_subtitle">Développeur web - SERMES</h3>
                                <h5 class="job_location">Strasbourg</h4>
                                <p class="job_date">2022-2023</p>
                            </div>    
                                <div class="job_description">
                                    <p>
                                        Participation active à la <b>conception, au développement et à la documentation</b> d’une <b>API REST</b> avec <b>Symfony 6</b> et <b>OpenAPI (Swagger)</b>, communiquant avec le serveur <b>IBMi (AS400)</b> pour alimenter les nouveaux sites e-commerce de <b>Willy Leissner</b> et <b>Sermes</b>, dans le cadre de la migration vers un <b>nouveau centre logistique à Dachstein</b>.<br><br>

- Développement d’<b>APIs documentées</b> pour l’accès aux données métiers (produits, stocks, commandes…)<br>
- <b>Refonte et migration</b> des webservices AS400 vers Symfony ou interfaçage direct avec des services existants en <b>RPG</b><br>
- Création de <b>scripts d'import/export</b> de données <b>XML</b><br>
- Connexion à la base de données <b>DB2 via PDO ODBC</b><br><br>

<b>Equipe</b> : Développement (6 développeurs AS400, 2 développeurs Web)<br>
<b>Compétences</b> : Conception et documentation d’API, refonte de scripts<br>
                                    </p>
                                </div>
                        </div>
                    </div>

                    <div class="job">
                        <div class="left_panel" class="section">
                            <img src="images/cedam.png" alt="img_cedam" onclick="window.open('https://www.sermes.fr/')" width="60" height="60" />
                            <div class="stacks">
                                <p class="stack">PHP 5.6</p>
                                <p class="stack">Javascript</p>
                                <p class="stack">MySQL</p>
                                <p class="stack">Wamp</p>
                            </div>
                        </div>
                        <div class="right_panel">
                            <div class="right_panel_header">
                                <h4 class="job_subtitle">Développeur web - Cedam</h4>
                                <h5 class="job_location">Obernai</h5>
                                <p class="job_date">2020-2022</p>
                            </div>    
                                <div class="job_description">
                                    <p>
<b>Intégration de l’ERP Divalto</b> en développant des <b>applications web sur-mesure</b> pour accompagner l'activité des quarante salariés de l’entreprise, spécialisée dans la fabrication et vente de meubles de salle de bain.<br><br>

Réalisation d'applications des <b>services administratifs</b> et <b>commerciaux</b> :<br>
- Développement d’outils de <b>gestion des stocks, du SAV et des projets</b> (incluant un <b>diagramme de Gantt</b>)<br>
- Création d’un <b>éditeur WYSIWYG</b> pour la conception d’offres promotionnelles (brochures commerciales)<br><br>

Réalisation d’applications <b>connectées à la chaîne de production</b> :<br>
- Scan de code-barres pour obtenir un <b>listing des quincailleries</b> nécessaires au montage d’un meuble<br>
- Outil de <b>préparation de commandes</b> et de <b>lancement de production</b><br>
<br>

<b>Compétences</b> : Développement web orienté métier, automatisation de production, accompagnement de l’intégration ERP<br>
<b>Equipe</b> : Autonomie, rattaché à l'ingénieur méthodes de l'entreprise<br></p>
                                </div>
                        </div>
                    </div> 

                </div>

                <div id="projects_section" class="section">
                    <h3>Projets personnels</h3>
                    <div class="job">
                        <div class="left_panel">
                            <img src="images/respire.png" alt="img_respire" onclick="window.open('https://www.respire-info.fr/')" width="60" height="60" />
                            <div class="stacks">
                                <p class="stack">Wordpress</p>
                                <p class="stack">CSS</p>
                                <p class="stack">SEO</p>
                            </div>
                        </div>
                        <div class="right_panel">
                            <div class="right_panel_header">
                                <h4 class="job_subtitle job_link" onclick="window.open('https://www.respire-info.fr/')">Respire Info</h4>
                                <h5 class="job_location">Site informatif</h5>
                                <p class="job_date">2022</p>
                            </div>    
                                <div class="job_description">
                                    <p>
										Développement de Respire info, site informatif réalisé dans le cadre d'un mémoire d'orthophonie. Le site présente au public visé les différents risques causés par la respiration buccale,
                                        mais également le parcours de soin envisageable.
                                    </p>
                                </div>  
                        </div>
                    </div>
                </div>

                <div id="formations_section" class="section">
                    <h3>Formations</h3>

                    <div class="job" onclick="link('https://www.alsace-eurometropole.cci.fr/se-former-avec-cci-campus-alsace')">
                        <div class="left_panel">
                            <img src="images/cci.png" alt="img_cci" onclick="window.open('https://www.alsace-eurometropole.cci.fr/se-former-avec-cci-campus-alsace')" width="60" height="49.22" />
                            <div class="stacks">
                                <p class="stack">.NET Core</p>
                                <p class="stack">Typescript</p>
                                <p class="stack">React Native</p>
                                <p class="stack">React</p>
                            </div>
                        </div>
                        <div class="right_panel">
                            <div class="right_panel_header">
                                <h4 class="job_subtitle">Concepteur développeur d'applications</h4>
                                <h5 class="job_location">Cci Campus Alsace</h5>
                                <p class="job_date">2022-2023</p>
                            </div>    
                                <div class="job_description">
                                    <p> 
Développement en autonomie d’une application web permettant de <b>simuler des tirages de loterie</b> à intervalles réguliers.<br>
- Sélection des numéros via une <b>interface interactive à boutons</b><br>
- <b>Historique des tirages consultable</b> sur une page dédiée<br>
- Mise en œuvre d’un <b>modèle MVC</b> avec .NET Core<br>
<br>

Développement à 3 d’un <b>jeu mobile multijoueur</b> en <b>environnement Agile</b><br>
- Connexion à une <b>API externe</b> développée par un intervenant, pour gérer les actions des joueurs en temps réel<br>
- Fonctionnalités : <b>création et accès à des salons de jeu via code, actions contextuelles</b> (choix uniques ou multiples, validation d’étapes)<br>
- Focus sur l'<b>intégration front-end mobile</b> et la <b>communication API</b><br>
<br>

<b>Compétences</b> : Conceptualisation et développement d'applications



                                    </p>
                                </div>
                        </div>
                    </div>

                    <div class="job" onclick="link('https://ecoleiris.fr/strasbourg')">
                        <div class="left_panel">
                            <img src="images/iris.png" alt="img_iris" onclick="window.open('https://ecoleiris.fr/strasbourg')" width="60" height="33.28" />
                            <div class="stacks">
                                <p class="stack">PHP 5.6</p>
                                <p class="stack">Javascript</p>
                                <p class="stack">MySQL</p>
                                <p class="stack">Wamp</p>
                            </div>
                        </div>
                        <div class="right_panel">
                            <div class="right_panel_header">
                                <h4 class="job_subtitle">BTS Services Informatiques aux Organisations</h4>
                                <h5 class="job_location">IRIS Strasbourg</h5>
                                <p class="job_date">2020-2022</p>
                            </div>    
                                <div class="job_description">
                                    <p>
                                        <b>Brevet de technicien supérieur</b> permettant d'acquérir des compétences de <b>support</b> et de mise à disposition de <b>services informatiques</b>,
                                        de <b>cybersécurité</b> et de <b>conception et développement d'applications</b>.<br>
                                        
Réalisation d'un <b>site e-commerce</b> en de vente de vélos en PHP orienté objet, Javascript et MySQL.
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>

    <script src="script.js" async></script>
    <script src="https://kit.fontawesome.com/645c1d137c.js" crossorigin="anonymous" async></script>
</html>

