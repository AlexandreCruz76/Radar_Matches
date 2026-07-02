/* OndePassa Copa — User Preferences Page */

const prefLanguage = document.querySelector('#prefLanguage');
const prefCountry = document.querySelector('#prefCountry');
const prefsForm = document.querySelector('#prefsForm');
const clearPrefs = document.querySelector('#clearPrefs');
const prefsMessage = document.querySelector('#prefsMessage');
const themeToggle = document.querySelector('#themeToggle');
const toast = document.querySelector('#toast');

function readPrefs() {
  try { return JSON.parse(localStorage.getItem('ondepassaPrefs') || '{}'); }
  catch { return {}; }
}

function detectLanguage() {
  const saved = readPrefs().language;
  if (saved) return saved;
  const lang = (navigator.language || 'pt').toLowerCase();
  if (lang.startsWith('es')) return 'es';
  if (lang.startsWith('en')) return 'en';
  return 'pt';
}

function detectCountry() {
  const saved = readPrefs().country;
  if (saved) return saved;
  const lang = (navigator.language || '').toLowerCase();
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  if (lang.includes('mx') || zone.includes('Mexico')) return 'mx';
  if (lang.includes('us') || zone.includes('New_York') || zone.includes('Chicago') || zone.includes('Los_Angeles') || zone.includes('Denver')) return 'us';
  if (lang.includes('pt') || zone.includes('Lisbon') || zone.includes('Azores')) return 'pt';
  if (lang.includes('ar') || zone.includes('Buenos_Aires')) return 'ar';
  if (lang.includes('br') || zone.includes('Sao_Paulo')) return 'br';
  return detectLanguage() === 'en' ? 'us' : 'br';
}

function detectTheme() {
  const saved = readPrefs().theme;
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.className = 'toast success show';
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
  const prefs = readPrefs();
  prefs.theme = theme;
  localStorage.setItem('ondepassaPrefs', JSON.stringify(prefs));
}

// Init
const theme = detectTheme();
applyTheme(theme);
prefLanguage.value = detectLanguage();
prefCountry.value = detectCountry();

// Listeners
prefsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const prefs = readPrefs();
  prefs.language = prefLanguage.value;
  prefs.country = prefCountry.value;
  prefs.theme = detectTheme();
  localStorage.setItem('ondepassaPrefs', JSON.stringify(prefs));
  prefsMessage.textContent = '✅ Preferências salvas somente neste navegador.';
  prefsMessage.style.color = 'var(--green)';
  showToast('Preferências salvas!');
  // GA event
  if (typeof gtag === 'function') {
    gtag('event', 'preferences_saved', {
      language: prefLanguage.value,
      country: prefCountry.value
    });
  }
});

clearPrefs.addEventListener('click', () => {
  localStorage.removeItem('ondepassaPrefs');
  prefLanguage.value = detectLanguage();
  prefCountry.value = detectCountry();
  prefsMessage.textContent = '🗑️ Preferências locais apagadas.';
  prefsMessage.style.color = 'var(--muted)';
  showToast('Preferências removidas!');
});

themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});
