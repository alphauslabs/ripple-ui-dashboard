import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const COOKIE_NAME = 'mo_langue';
const COOKIE_POLL_INTERVAL = 1000; // ms

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function writeCookie(name: string, value: string, days = 365) {
  if (typeof document === 'undefined') return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

// Determine initial language from cookie, fallback to 'en'
const initialLang = readCookie(COOKIE_NAME) || 'en';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: initialLang,
  interpolation: {
    escapeValue: false,
  },
  resources: {}, // Initially empty; loaded dynamically
});

let cookieWatcherId: number | null = null;
let lastSeenCookie: string | null = readCookie(COOKIE_NAME);

export const loadLanguage = async (lng: string) => {
  const translations = await import('@project-ed/lib/constants');

  const add = (ns: string, value: any) => {
    if (value) i18n.addResourceBundle(lng, ns, value);
  };

  add('translation', lng === 'en' ? translations.en : translations.ja);
  add('host', lng === 'en' ? translations.en_host : translations.ja_host);
  add('dashboard', lng === 'en' ? translations.en_dashboard : translations.ja_dashboard);
  add('costfinalization', lng === 'en' ? translations.en_costfinalization : translations.ja_costfinalization);
  add('invoices', lng === 'en' ? translations.en_invoices : translations.ja_invoices);
  add('adjustmententry', lng === 'en' ? translations.en_adjustmententry : translations.ja_adjustmententry);

  writeCookie(COOKIE_NAME, lng);

  i18n.changeLanguage(lng);
  lastSeenCookie = lng;
};

function pollCookieAndUpdate() {
  const current = readCookie(COOKIE_NAME);
  if (current && current !== lastSeenCookie) {
    lastSeenCookie = current;
    loadLanguage(current).catch(() => {});
  }
}

export function startCookieWatcher(intervalMs = COOKIE_POLL_INTERVAL) {
  if (typeof window === 'undefined' || cookieWatcherId !== null) return;
  cookieWatcherId = window.setInterval(pollCookieAndUpdate, intervalMs);
}

export function stopCookieWatcher() {
  if (typeof window === 'undefined' || cookieWatcherId === null) return;
  clearInterval(cookieWatcherId);
  cookieWatcherId = null;
}

// Auto-start watcher in browser
if (typeof window !== 'undefined') startCookieWatcher();

export default i18n;
