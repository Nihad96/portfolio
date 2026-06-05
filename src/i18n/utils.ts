import { translations, type Locale, type TranslationKey } from "./ui";

/**
 * Returns a typed translation helper for the given locale.
 *
 * Usage (in .astro frontmatter):
 *   import { useTranslations } from '../i18n/utils';
 *   const t = useTranslations('en');
 *   t('nav_about') // → "About"
 */
export function useTranslations(lang: Locale) {
  return function t(key: TranslationKey): string {
    return translations[lang][key];
  };
}
