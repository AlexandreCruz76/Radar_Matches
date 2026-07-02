/* ═══════════════════════════════════════════
   ONDEPASSA COPA 2026 — Admin Dashboard
   Configuration manager + Revenue in USD/BRL
   ═══════════════════════════════════════════ */

/* ── DOM refs ── */
const $ = (sel, ctx) => (ctx || document).querySelector(sel);
const $$ = (sel, ctx) => [...(ctx || document).querySelectorAll(sel)];

const loginScreen = $('#loginScreen');
const adminDashboard = $('#adminDashboard');
const adminPassword = $('#adminPassword');
const loginBtn = $('#loginBtn');
const loginError = $('#loginError');
const themeToggle = $('#themeToggle');
const toast = $('#toast');

/* ── Config fields ── */
const cfgDomain = $('#cfgDomain');
const cfgAdsense = $('#cfgAdsense');
const cfgGaId = $('#cfgGaId');
const cfgEmail = $('#cfgEmail');
const cfgUsdToBrl = $('#cfgUsdToBrl');
const cfgAdminPassword = $('#cfgAdminPassword');
const saveConfigBtn = $('#saveConfigBtn');
const exportConfigBtn = $('#exportConfigBtn');
const clearConfigBtn = $('#clearConfigBtn');
const savePasswordBtn = $('#savePasswordBtn');
const configMsg = $('#configMsg');
const passwordMsg = $('#passwordMsg');

/* ── Revenue fields ── */
const revTotalUsd = $('#revTotalUsd');
const revTotalBrl = $('#revTotalBrl');
const revSentClicks = $('#revSentClicks');
const revSentRevenue = $('#revSentRevenue');
const revAdClicks = $('#revAdClicks');
const revAdRevenue = $('#revAdRevenue');
const revImpressions = $('#revImpressions');
const revImpRevenue = $('#revImpRevenue');
const revLeads = $('#revLeads');
const revLeadRevenue = $('#revLeadRevenue');
const revSponsors = $('#revSponsors');
const revSponsorRevenue = $('#revSponsorRevenue');
const currUsd = $('#currUsd');
const currBrl = $('#currBrl');
const guideEmail = $('#guideEmail');

/* ── Defaults ── */
const DEFAULTS = {
  domain: 'seudominio.com',
  adsense: 'ca-pub-SEU_ID_ADSENSE',
  gaId: 'G-MEASUREMENT_ID',
  email: 'comercial@seudominio.com',
  usdToBrl: 5.00
};

const DEFAULT_PASSWORD = 'admin2026';

/* ── Config functions ── */
function getAdminConfig() {
  try { return JSON.parse(localStorage.getItem('ondepassaAdminConfig') || '{}'); }
  catch { return {}; }
}

function saveAdminConfig(data) {
  const existing = getAdminConfig();
  const merged = { ...existing, ...data };
  localStorage.setItem('ondepassaAdminConfig', JSON.stringify(merged));
}

function clearAdminConfig() {
  localStorage.removeItem('ondepassaAdminConfig');
}

function getAdminPassword() {
  return localStorage.getItem('ondepassaAdminPassword') || DEFAULT_PASSWORD;
}

function showToast(message, type) {
  if (!toast) return;
  toast.textContent = message;
  toast.className = `toast ${type || ''}`;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

function formatCurrency(amount, currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2
  }).format(amount);
}

function formatBrl(amount) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(amount);
}

/* ── Load config into form ── */
function loadConfigIntoForm() {
  const cfg = getAdminConfig();
  cfgDomain.value = cfg.domain || DEFAULTS.domain;
  cfgAdsense.value = cfg.adsense || DEFAULTS.adsense;
  cfgGaId.value = cfg.gaId || DEFAULTS.gaId;
  cfgEmail.value = cfg.email || DEFAULTS.email;
  cfgUsdToBrl.value = cfg.usdToBrl || DEFAULTS.usdToBrl;
  // Update guide email
  if (guideEmail) guideEmail.textContent = cfg.email || DEFAULTS.email;
}

/* ── Theme ── */
function detectTheme() {
  const saved = localStorage.getItem('ondepassaPrefs');
  try {
    const prefs = JSON.parse(saved || '{}');
    if (prefs.theme) return prefs.theme;
  } catch {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

/* ── Revenue update ── */
function updateRevenue(currency = 'USD') {
  // Try to read from the main app's state via localStorage
  let sentClicks = 0, adClicks = 0, impressions = 0, leads = 0, sponsorsSold = 0;

  // Check if we can access the revenue state from index page
  // We'll use a shared localStorage key
  try {
    const rev = JSON.parse(localStorage.getItem('ondepassaRevenue') || '{}');
    sentClicks = rev.sentClicks || 0;
    adClicks = rev.adClicks || 0;
    impressions = rev.impressions || 0;
    leads = rev.leads || 0;
    sponsorsSold = rev.sponsorsSold || 0;
  } catch {}

  const cfg = getAdminConfig();
  const rate = parseFloat(cfg.usdToBrl) || DEFAULTS.usdToBrl;

  const sentRev = sentClicks * 0.42;
  const adRev = adClicks * 1.20;
  const impRev = impressions * 0.018;
  const leadRev = leads * 2.00;
  const sponsRev = sponsorsSold * 50;
  const total = sentRev + adRev + impRev + leadRev + sponsRev;

  const isBrl = currency === 'BRL';
  const fmt = isBrl ? (v) => formatBrl(v * rate) : (v) => formatCurrency(v, 'USD');
  const currSymbol = isBrl ? 'R$' : 'US$';

  if (revTotalUsd) revTotalUsd.textContent = fmt(total);
  if (revTotalBrl) revTotalBrl.textContent = fmt(total);
  if (revSentClicks) revSentClicks.textContent = sentClicks;
  if (revSentRevenue) revSentRevenue.textContent = `${currSymbol} ${fmt(sentRev).replace(/[^0-9.,]/g, '')}`;
  if (revAdClicks) revAdClicks.textContent = adClicks;
  if (revAdRevenue) revAdRevenue.textContent = `${currSymbol} ${fmt(adRev).replace(/[^0-9.,]/g, '')}`;
  if (revImpressions) revImpressions.textContent = impressions;
  if (revImpRevenue) revImpRevenue.textContent = `${currSymbol} ${fmt(impRev).replace(/[^0-9.,]/g, '')}`;
  if (revLeads) revLeads.textContent = leads;
  if (revLeadRevenue) revLeadRevenue.textContent = `${currSymbol} ${fmt(leadRev).replace(/[^0-9.,]/g, '')}`;
  if (revSponsors) revSponsors.textContent = sponsorsSold;
  if (revSponsorRevenue) revSponsorRevenue.textContent = `${currSymbol} ${fmt(sponsRev).replace(/[^0-9.,]/g, '')}`;
}

/* ── Export config for deploy ── */
function exportConfig() {
  const cfg = getAdminConfig();
  const exportData = {
    version: '1.0',
    project: 'OndePassa Copa 2026',
    exportedAt: new Date().toISOString(),
    env_vars: {
      DOMAIN: cfg.domain || DEFAULTS.domain,
      ADSENSE_ID: cfg.adsense || DEFAULTS.adsense,
      GA_MEASUREMENT_ID: cfg.gaId || DEFAULTS.gaId,
      COMMERCIAL_EMAIL: cfg.email || DEFAULTS.email
    },
    instructions: 'Adicione estas variáveis de ambiente no Cloudflare Pages (Settings > Environment variables). Use um script de build ou substitua manualmente os placeholders nos arquivos HTML.'
  };
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ondepassa-env-config.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast('✅ Config exportada como JSON!', 'success');
}

/* ── Event listeners ── */
loginBtn?.addEventListener('click', () => {
  const pwd = adminPassword?.value || '';
  if (pwd === getAdminPassword()) {
    loginScreen.style.display = 'none';
    adminDashboard.style.display = 'block';
    loadConfigIntoForm();
    updateRevenue('USD');
  } else {
    if (loginError) loginError.style.display = 'block';
  }
});

// Allow Enter key to login
adminPassword?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') loginBtn?.click();
});

saveConfigBtn?.addEventListener('click', () => {
  saveAdminConfig({
    domain: cfgDomain.value.trim(),
    adsense: cfgAdsense.value.trim(),
    gaId: cfgGaId.value.trim(),
    email: cfgEmail.value.trim(),
    usdToBrl: parseFloat(cfgUsdToBrl.value) || DEFAULTS.usdToBrl
  });
  if (guideEmail) guideEmail.textContent = cfgEmail.value.trim() || DEFAULTS.email;
  configMsg.textContent = '✅ Configuração salva! Os placeholders serão substituídos no site.';
  configMsg.className = 'msg success';
  configMsg.style.display = 'block';
  showToast('✅ Configuração salva!', 'success');
  setTimeout(() => { configMsg.style.display = 'none'; }, 4000);
});

exportConfigBtn?.addEventListener('click', exportConfig);

clearConfigBtn?.addEventListener('click', () => {
  if (confirm('Tem certeza? Isso vai limpar toda a configuração salva.')) {
    clearAdminConfig();
    loadConfigIntoForm();
    configMsg.textContent = '🗑️ Configuração limpa. Placeholders voltaram aos valores padrão.';
    configMsg.className = 'msg info';
    configMsg.style.display = 'block';
    showToast('🗑️ Configuração removida', '');
  }
});

savePasswordBtn?.addEventListener('click', () => {
  const newPwd = cfgAdminPassword?.value || '';
  if (newPwd.length < 6) {
    passwordMsg.textContent = '❌ A senha deve ter no mínimo 6 caracteres.';
    passwordMsg.className = 'msg';
    passwordMsg.style.display = 'block';
    passwordMsg.style.color = 'var(--red)';
    return;
  }
  localStorage.setItem('ondepassaAdminPassword', newPwd);
  cfgAdminPassword.value = '';
  passwordMsg.textContent = '✅ Senha alterada com sucesso!';
  passwordMsg.className = 'msg success';
  passwordMsg.style.display = 'block';
  showToast('✅ Senha alterada!', 'success');
  setTimeout(() => { passwordMsg.style.display = 'none'; }, 3000);
});

/* ── Currency toggle ── */
let currentCurrency = 'USD';

currUsd?.addEventListener('click', () => {
  currentCurrency = 'USD';
  currUsd.classList.add('active');
  currBrl?.classList.remove('active');
  if (revTotalUsd) revTotalUsd.style.display = 'block';
  if (revTotalBrl) revTotalBrl.style.display = 'none';
  updateRevenue('USD');
});

currBrl?.addEventListener('click', () => {
  currentCurrency = 'BRL';
  currBrl.classList.add('active');
  currUsd?.classList.remove('active');
  if (revTotalUsd) revTotalUsd.style.display = 'none';
  if (revTotalBrl) revTotalBrl.style.display = 'block';
  updateRevenue('BRL');
});

/* ── Tabs ── */
$$('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.tab-btn').forEach(b => b.classList.remove('active'));
    $$('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const tabId = btn.dataset.tab;
    const tab = $(`#tab${tabId.charAt(0).toUpperCase() + tabId.slice(1)}`);
    if (tab) tab.classList.add('active');
    if (tabId === 'revenue') updateRevenue(currentCurrency);
  });
});

/* ── Theme toggle ── */
themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
  // Save to prefs
  try {
    const prefs = JSON.parse(localStorage.getItem('ondepassaPrefs') || '{}');
    prefs.theme = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('ondepassaPrefs', JSON.stringify(prefs));
  } catch {}
});

/* ── Init ── */
const theme = detectTheme();
applyTheme(theme);

// Auto-refresh revenue every 5 seconds
setInterval(() => {
  if (adminDashboard.style.display !== 'none') {
    updateRevenue(currentCurrency);
  }
}, 5000);
