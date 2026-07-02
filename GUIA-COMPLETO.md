# 🏆 OndePassa Copa 2026 — Guia Completo

## 📋 Sobre o Projeto

Site guia oficial para a **Copa do Mundo FIFA 2026** que redireciona torcedores para canais oficiais e streamings autorizados por país. Projetado para alto engajamento, SEO e monetização multiplataforma.

**Modelo de negócio:** Guia + redirecionamento (zero conteúdo pirata).

---

## 🚀 Deploy no Cloudflare Pages (Gratuito)

### Passo 1: Criar conta no Cloudflare
1. Acesse [dash.cloudflare.com/sign-up](https://dash.git commit -m "Primeiro commit".com/sign-up)
2. Crie sua conta gratuita (não precisa de cartão de crédito)

### Passo 2: Fazer deploy
1. No dashboard, vá em **Workers & Pages** → **Pages** → **Connect to Git**
2. Conecte seu repositório GitHub/GitLab
3. Selecione o repositório com os arquivos do OndePassa
4. Configuração de build:
   - **Framework:** None
   - **Build command:** deixe vazio
   - **Build output:** `/` (raiz)
5. Clique em **Save and Deploy**

### Passo 3: Configurar domínio
1. Vá em **Pages** → seu projeto → **Custom domains**
2. Adicione seu domínio (ex: `ondepassa.com`)
3. Siga as instruções para configurar DNS

### Alternativa: Deploy via upload manual
1. Vá em **Pages** → **Create application** → **Direct Upload**
2. Arraste todos os arquivos do projeto
3. Clique em **Deploy**

---

## 🔐 Painel Administrativo

O projeto inclui um **painel admin completo** em `/admin.html`:

### Acesso
1. Abra `https://seudominio.com/admin.html`
2. Senha padrão: `admin2026` (troque após o primeiro acesso no painel)

### Funcionalidades
- **⚙️ Configuração:** Defina domínio, AdSense ID, GA4 ID e email comercial — salvos no navegador (localStorage)
- **💰 Receitas:** Dashboard com receita simulada em **USD** e **BRL** (com taxa de câmbio configurável)
- **📖 Guias:** Passo a passo completo para AdSense, GA4, patrocínio direto, links de afiliado e domínios gratuitos
- **📦 Exportar config:** Gera JSON com variáveis de ambiente para deploy no Cloudflare Pages

### Como os placeholders são substituídos
1. No painel admin, preencha os valores reais e clique em "Salvar configuração"
2. Os valores ficam salvos no navegador (localStorage)
3. Ao carregar o site, o `app.js` substitui automaticamente `seudominio.com`, `ca-pub-SEU_ID_ADSENSE` e `G-MEASUREMENT_ID` pelos valores configurados
4. **Importante:** os scripts do AdSense e GA4 no `<head>` dos HTMLs ainda usam os placeholders — você precisa substituí-los manualmente nos arquivos ou usar um script de build com variáveis de ambiente

---

## 📈 Google AdSense — Configuração

### Passo 1: Criar conta
1. Acesse [adsense.google.com](https://adsense.google.com)
2. Siga o cadastro com seu domínio já no ar

### Passo 2: Substituir IDs
Em **todos os arquivos HTML**, substitua:

| Original | Substituir por |
|----------|---------------|
| `ca-pub-SEU_ID_ADSENSE` | `ca-pub-SEU_NUMERO_REAL` |
| `pub-SEU_ID_ADSENSE` (ads.txt) | `pub-SEU_NUMERO_REAL` |

### Passo 3: Criar blocos de anúncio
No AdSense, crie blocos e substitua os slots:

| Local | Slot ID sugerido |
|-------|-----------------|
| Topo da lista (index.html) | `slot-horizontal` |
| Final da lista (index.html) | `slot-rodape` |
| Sidebar | `slot-sidebar` |
| Página de jogo | `slot-jogo` |
| Após FAQ | `slot-faq` |
| Página Brasil | `slot-brasil` |
| Página privacidade | `slot-privacidade` |

### Passo 4: Auto-ads (recomendado)
No AdSense, ative **Anúncios automáticos** para maximizar receita sem esforço manual.

---

## 📊 Google Analytics — Configuração

### Passo 1: Criar propriedade
1. Acesse [analytics.google.com](https://analytics.google.com)
2. Crie uma propriedade **Google Analytics 4 (GA4)**
3. Copie o **Measurement ID** (formato: `G-XXXXXXXXXX`)

### Passo 2: Substituir ID
No `<head>` de todos os HTMLs, substitua:
```
G-MEASUREMENT_ID → G-SEU_ID_REAL
```

### Eventos já configurados
O app.js já envia automaticamente:
- `page_view` — cada visita
- `outbound_click` — clique em link de canal
- `ad_click` — clique em anúncio/patrocínio
- `lead_capture` — cadastro na newsletter
- `revenue_simulation` — simulação de receita
- `preferences_saved` — preferências salvas

---

## 🔧 Personalização

### Adicionar novos países
No arquivo `app.js`, localize `const broadcasters` e adicione:
```javascript
seu_pais: {
  labels: { pt: 'Seu País', en: 'Your Country', es: 'Su País' },
  flag: '🏳️',
  sponsor: { pt: 'Texto patrocinado', en: 'Sponsored text', es: 'Texto patrocinado' },
  officials: [
    { name: 'Canal 1', note: { pt: 'Descrição', en: 'Description', es: 'Descripción' }, url: 'https://...' }
  ]
}
```

### Adicionar novos jogos
No `app.js`, localize `const matches` e adicione:
```javascript
{
  id: 'seu-id',
  teams: { pt: 'Time A x Time B', en: 'Team A vs Team B', es: 'Equipo A vs Equipo B' },
  stage: { pt: 'Fase', en: 'Stage', es: 'Fase' },
  time: { pt: 'Data e hora', en: 'Date and time', es: 'Fecha y hora' },
  status: 'upcoming', // 'live', 'today', 'upcoming'
  demand: { pt: 'Descrição demanda', en: 'Demand description', es: 'Descripción demanda' },
  countries: { br: ['Canal 1'], us: ['Canal 2'] },
  timestamp: Date.now() + 3600000 * 24,
  slug: 'time-a-vs-time-b-2026'
}
```

### Criar nova página de jogo
1. Copie `pages/usa-vs-bosnia-2026.html`
2. Renomeie para `pages/seu-slug.html`
3. Atualize: title, description, times, canais, datas, JSON-LD
4. Adicione no `sitemap.xml`
5. Adicione no `service-worker.js` (STATIC_ASSETS)

---

## 💰 Estratégias de Monetização

### 1. Google AdSense (Receita passiva)
- Anúncios automáticos + blocos manuais
- Estimativa: US$ 1-5 CPM (cost per mille)

### 2. Links de Afiliado
- **Streamings:** Globoplay, Peacock, ESPN/Star+
- **Produtos:** camisas oficiais, TVs, projetores
- Use links de afiliado da Amazon, Lomadee, etc.

### 3. Patrocínio Direto (Tabela de preços)
| Plano | Preço | Benefícios |
|-------|-------|------------|
| Básico | US$ 50/mês | Destaque em 1 país, link patrocinado |
| Profissional | US$ 200/mês | 3 países, link + banner, 5 partidas |
| Premium | US$ 500/mês | Global, banner + vídeo, todas partidas |

**Público-alvo:** bares, restaurantes, delivery de comida, lojas de camisa, operadoras de TV, apps de viagem.

### 4. Newsletter (Lead capture)
- Capture emails para lista de alertas
- Monetize com patrocinadores pagando por lead
- Estimativa: US$ 1-5 por lead qualificado

### 5. Conteúdo Patrocinado
- Posts sobre melhores bares para ver jogos
- Reviews de serviços de streaming
- Guias de viagem para cidades-sede

---

## 🔍 SEO — Melhores Práticas

### URLs amigáveis
- `/onde-assistir/brasil-x-croacia-2026`
- `/pages/brasil-vs-croacia-2026.html`

### Dados estruturados (já implementados)
- ✅ Schema.org WebSite
- ✅ Schema.org SportsEvent (por jogo)
- ✅ Schema.org BreadcrumbList
- ✅ Schema.org FAQPage
- ✅ Open Graph / Twitter Cards

### Palavras-chave alvo
- "onde assistir [time A] x [time B] ao vivo"
- "canais oficiais copa 2026 [país]"
- "streaming copa do mundo 2026"
- "jogos da copa hoje ao vivo"
- "[time] na copa 2026 onde passar"

### Técnico
- ✅ Sitemap XML completo
- ✅ robots.txt otimizado
- ✅ Canonical tags
- ✅ hreflang para multi-idioma
- ✅ Meta descriptions únicas por página
- ✅ Títulos otimizados (H1, H2, H3)
- ✅ Links internos entre páginas
- ✅ Tempo de carregamento otimizado

---

## ⚡ Performance

### Já implementado
- ✅ CSS crítico inline-friendly
- ✅ Preconnect para Google AdSense/Analytics
- ✅ DNS-prefetch para domínios terceiros
- ✅ Defer para scripts não-críticos
- ✅ System font stack (sem Google Fonts)
- ✅ Service worker para cache offline
- ✅ Cloudflare CDN
- ✅ Animações otimizadas (GPU-accelerated)

### Recomendações extras
1. Comprimir imagens com [squoosh.app](https://squoosh.app)
2. Habilitar Brotli compression no Cloudflare
3. Usar Cloudflare Web Analytics (gratuito, sem impacto)

---

## 📱 PWA — Progressive Web App

O site pode ser instalado como aplicativo no celular!

**Funcionalidades:**
- ✅ Manifest.json com ícones
- ✅ Service worker com cache offline
- ✅ Tela de splash nativa
- ✅ Compartilhamento nativo
- ✅ Atualizações em background

---

## 📄 Estrutura do Projeto

```
C:/Radar/
├── index.html              # Página principal
├── styles.css               # Design system completo
├── app.js                   # Engine JavaScript
├── usuario.html             # Preferências do usuário
├── usuario.js               # Lógica de preferências
├── manifest.json            # PWA manifest
├── service-worker.js        # Service worker
├── robots.txt               # SEO
├── sitemap.xml              # SEO (expandido)
├── ads.txt                  # Google AdSense
├── _redirects               # Cloudflare Pages
├── _headers                 # Cloudflare Pages (cache/segurança)
├── GUIA-COMPLETO.md         # Este guia
│
├── pages/                   # Páginas individuais (SEO)
│   ├── usa-vs-bosnia-2026.html
│   ├── mexico-vs-ecuador-2026.html
│   ├── england-vs-dr-congo-2026.html
│   ├── belgium-vs-senegal-2026.html
│   ├── brazil-vs-croatia-2026.html
│   └── argentina-vs-uruguay-2026.html
│
└── assets/                  # Assets (ícones, etc.)
    └── icons/
```

---

## 🎯 Checklist de Lançamento

- [ ] 1. Fazer deploy no Cloudflare Pages
- [ ] 2. Configurar domínio próprio
- [ ] 3. Substituir `ca-pub-SEU_ID_ADSENSE` pelo ID real do AdSense
- [ ] 4. Substituir `G-MEASUREMENT_ID` pelo ID real do GA4
- [ ] 5. Substituir `seudominio.com` pelo domínio real
- [ ] 6. Verificar ads.txt no Google AdSense
- [ ] 7. Enviar sitemap.xml no Google Search Console
- [ ] 8. Testar todos os links de canais oficiais
- [ ] 9. Testar PWA (instalar no celular)
- [ ] 10. Começar divulgação em redes sociais e fóruns

---

## 📞 Contato Comercial

Para patrocínios e parcerias:
**Email:** comercial@seudominio.com
**Assunto:** "Quero patrocinar o OndePassa"

---

> ⚡ Projeto 100% gratuito, open-source e de alta performance.
> Desenvolvido com HTML, CSS e JavaScript puro.
> Hospedagem: Cloudflare Pages (free tier).
> Analytics: Google Analytics 4.
> Anúncios: Google AdSense.
