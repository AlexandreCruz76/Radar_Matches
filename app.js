/* ═══════════════════════════════════════════
   ONDEPASSA COPA 2026 - Application Engine
   i18n, search, filters, revenue simulation,
   Google Analytics, dark mode, countdown
   ═══════════════════════════════════════════ */

/* ── Translations ── */
const translations = {
  pt: {
    languageLabel: 'Idioma',
    userPageLink: 'Minha região',
    heroEyebrow: 'Copa 2026 — guia oficial de transmissão',
    heroTitle: 'Ache o jogo e vá direto para o canal oficial.',
    heroText: 'O OndePassa não transmite jogos. Ele encaminha o torcedor para canais e streamings autorizados, com espaços prontos para anúncios pagos e patrocinadores.',
    seeMatches: 'Ver jogos',
    officialChannels: 'Canais oficiais',
    revenueLabel: 'Receita estimada (simulação)',
    revenueHelp: 'Baseado em cliques enviados, anúncios vistos e destaques vendidos.',
    legalStrong: 'Transmissão legal:',
    legalText: 'este site funciona como guia e redirecionador. Não hospeda, copia ou retransmite sinal de jogo.',
    privacyNote: '🔒 Idioma e país são sugeridos pelo navegador/fuso horário. Preferências ficam apenas neste aparelho; não criamos perfil por clique.',
    searchLabel: 'Buscar jogo',
    searchPlaceholder: 'Brasil, final, hoje...',
    countryLabel: 'País',
    statusLabel: 'Status',
    statusAll: 'Todos',
    statusToday: 'Hoje',
    statusUpcoming: 'Próximos',
    statusLive: 'Ao vivo',
    sponsorLabel: 'Espaço patrocinado',
    sponsorText: 'Bar, delivery, camisa oficial ou app de viagem pode aparecer aqui.',
    buyHighlight: 'Comprar destaque',
    matchesEyebrow: 'Jogos encontrados',
    clearFilters: 'Limpar filtros',
    adsTop: 'AdSense — topo da lista',
    modelLabel: 'Modelo 24/7',
    moneyTitle: 'Como ganha dinheiro',
    moneyOne: 'Clique para canal oficial (US$ 0,42)',
    moneyTwo: 'AdSense por página de jogo (US$ 1,20)',
    moneyThree: 'Patrocínio por país e partida (US$ 50+)',
    moneyFour: 'Leads de alerta antes do jogo (US$ 2,00)',
    captureLabel: 'Captura de leads',
    alertTitle: 'Receber alerta antes do jogo',
    alertEmailPlaceholder: 'seu@email.com',
    activateAlert: 'Ativar alerta grátis',
    leadHelp: 'Lista pronta para monetizar com patrocinadores. Zero spam.',
    seoLabel: 'SEO rápido',
    seoTitle: 'Páginas que ranqueiam',
    seoText: 'URLs como /onde-assistir/brasil-x-espanha-2026 com dados estruturados, Schema.org e links para canais oficiais.',
    directoryEyebrow: 'Diretório oficial',
    channelsByCountry: 'Canais por país',
    officialButton: 'Abrir canal oficial ↗',
    recommendedAd: '📢 Anúncio recomendado para este jogo',
    emptyTitle: 'Nenhum jogo encontrado',
    emptyText: 'Tente outro país, data ou seleção.',
    matchSingular: 'partida',
    matchPlural: 'partidas',
    next: 'Próximo',
    alertDone: '✅ Alerta ativado! Esse lead pode entrar no funil de patrocinadores.',
    liveNow: '🟢 Ao vivo agora',
    liveIn: 'Começa em',
    shareMatch: 'Compartilhar',
    copyLink: 'Copiar link',
    copied: '✅ Link copiado!',
    sponsorsEyebrow: 'Monetização',
    sponsorsTitle: 'Tabela de patrocínio',
    sponsorBasic: 'Básico',
    sponsorPro: 'Profissional',
    sponsorPremium: 'Premium',
    sponsorBasicPrice: 'US$ 50',
    sponsorProPrice: 'US$ 200',
    sponsorPremiumPrice: 'US$ 500',
    sponsorBasicPer: '/mês',
    sponsorProPer: '/mês',
    sponsorPremiumPer: '/mês',
    sponsorBasicFeature1: 'Destaque em 1 país',
    sponsorBasicFeature2: 'Link patrocinado',
    sponsorBasicFeature3: 'Menção em 1 partida',
    sponsorProFeature1: 'Destaque em 3 países',
    sponsorProFeature2: 'Link + banner patrocinado',
    sponsorProFeature3: 'Menção em 5 partidas',
    sponsorProFeature4: 'Relatório mensal',
    sponsorPremiumFeature1: 'Destaque global',
    sponsorPremiumFeature2: 'Banner + vídeo patrocinado',
    sponsorPremiumFeature3: 'Menção em todas partidas',
    sponsorPremiumFeature4: 'Prioridade em novos conteúdos',
    sponsorPremiumFeature5: 'Relatório semanal + consultoria',
    sponsorCta: 'Comercializar agora'
  },
  en: {
    languageLabel: 'Language',
    userPageLink: 'My region',
    heroEyebrow: 'World Cup 2026 — official broadcast guide',
    heroTitle: 'Find the match and go straight to the official channel.',
    heroText: 'OndePassa does not stream matches. It sends fans to authorized channels and streaming services, with ad and sponsor spaces ready to sell.',
    seeMatches: 'See matches',
    officialChannels: 'Official channels',
    revenueLabel: 'Estimated revenue (simulation)',
    revenueHelp: 'Based on outbound clicks, ad views and sold highlights.',
    legalStrong: 'Legal broadcast:',
    legalText: 'this site works as a guide and redirector. It does not host, copy or rebroadcast match signals.',
    privacyNote: '🔒 Language and country are suggested from your browser/time zone. Preferences stay on this device only; we do not build click profiles.',
    searchLabel: 'Search match',
    searchPlaceholder: 'Brazil, final, today...',
    countryLabel: 'Country',
    statusLabel: 'Status',
    statusAll: 'All',
    statusToday: 'Today',
    statusUpcoming: 'Upcoming',
    statusLive: 'Live',
    sponsorLabel: 'Sponsored space',
    sponsorText: 'Sports bar, delivery, official shirt or travel app can appear here.',
    buyHighlight: 'Buy highlight',
    matchesEyebrow: 'Matches found',
    clearFilters: 'Clear filters',
    adsTop: 'AdSense — top slot',
    modelLabel: '24/7 model',
    moneyTitle: 'How it earns',
    moneyOne: 'Official-channel outbound click (US$ 0.42)',
    moneyTwo: 'AdSense per match page (US$ 1.20)',
    moneyThree: 'Sponsorship by country & match (US$ 50+)',
    moneyFour: 'Pre-match alert leads (US$ 2.00)',
    captureLabel: 'Lead capture',
    alertTitle: 'Get an alert before the match',
    alertEmailPlaceholder: 'your@email.com',
    activateAlert: 'Activate free alert',
    leadHelp: 'List ready for sponsor monetization. Zero spam.',
    seoLabel: 'Fast SEO',
    seoTitle: 'Pages that rank',
    seoText: 'URLs like /where-to-watch/usa-vs-bosnia-2026 with structured data, Schema.org and official channel links.',
    directoryEyebrow: 'Official directory',
    channelsByCountry: 'Channels by country',
    officialButton: 'Open official channel ↗',
    recommendedAd: '📢 Recommended ad for this match',
    emptyTitle: 'No match found',
    emptyText: 'Try another country, date or team.',
    matchSingular: 'match',
    matchPlural: 'matches',
    next: 'Upcoming',
    alertDone: '✅ Alert activated! This lead can enter the sponsor funnel.',
    liveNow: '🟢 Live now',
    liveIn: 'Starts in',
    shareMatch: 'Share',
    copyLink: 'Copy link',
    copied: '✅ Link copied!',
    sponsorsEyebrow: 'Monetization',
    sponsorsTitle: 'Sponsorship pricing',
    sponsorBasic: 'Basic',
    sponsorPro: 'Professional',
    sponsorPremium: 'Premium',
    sponsorBasicPrice: 'US$ 50',
    sponsorProPrice: 'US$ 200',
    sponsorPremiumPrice: 'US$ 500',
    sponsorBasicPer: '/mo',
    sponsorProPer: '/mo',
    sponsorPremiumPer: '/mo',
    sponsorBasicFeature1: 'Highlight in 1 country',
    sponsorBasicFeature2: 'Sponsored link',
    sponsorBasicFeature3: 'Mention in 1 match',
    sponsorProFeature1: 'Highlight in 3 countries',
    sponsorProFeature2: 'Link + sponsored banner',
    sponsorProFeature3: 'Mention in 5 matches',
    sponsorProFeature4: 'Monthly report',
    sponsorPremiumFeature1: 'Global highlight',
    sponsorPremiumFeature2: 'Banner + sponsored video',
    sponsorPremiumFeature3: 'Mention in all matches',
    sponsorPremiumFeature4: 'Priority on new content',
    sponsorPremiumFeature5: 'Weekly report + consulting',
    sponsorCta: 'Advertise now'
  },
  es: {
    languageLabel: 'Idioma',
    userPageLink: 'Mi región',
    heroEyebrow: 'Copa 2026 — guía oficial de transmisión',
    heroTitle: 'Encuentra el partido y ve directo al canal oficial.',
    heroText: 'OndePassa no transmite partidos. Envía a los fans a canales y streamings autorizados, con espacios listos para anuncios y patrocinadores.',
    seeMatches: 'Ver partidos',
    officialChannels: 'Canales oficiales',
    revenueLabel: 'Ingreso estimado (simulación)',
    revenueHelp: 'Basado en clics enviados, anuncios vistos y destacados vendidos.',
    legalStrong: 'Transmisión legal:',
    legalText: 'este sitio funciona como guía y redireccionador. No aloja, copia ni retransmite señal de partidos.',
    privacyNote: '🔒 Idioma y país se sugieren por navegador/zona horaria. Las preferencias quedan solo en este dispositivo; no creamos perfiles por clic.',
    searchLabel: 'Buscar partido',
    searchPlaceholder: 'México, final, hoy...',
    countryLabel: 'País',
    statusLabel: 'Estado',
    statusAll: 'Todos',
    statusToday: 'Hoy',
    statusUpcoming: 'Próximos',
    statusLive: 'En vivo',
    sponsorLabel: 'Espacio patrocinado',
    sponsorText: 'Bar, delivery, camiseta oficial o app de viaje puede aparecer aquí.',
    buyHighlight: 'Comprar destaque',
    matchesEyebrow: 'Partidos encontrados',
    clearFilters: 'Limpiar filtros',
    adsTop: 'AdSense — arriba de la lista',
    modelLabel: 'Modelo 24/7',
    moneyTitle: 'Cómo gana dinero',
    moneyOne: 'Clic a canal oficial (US$ 0.42)',
    moneyTwo: 'AdSense por página de partido (US$ 1.20)',
    moneyThree: 'Patrocinio por país y partido (US$ 50+)',
    moneyFour: 'Leads de alerta antes del partido (US$ 2.00)',
    captureLabel: 'Captura de leads',
    alertTitle: 'Recibir alerta antes del partido',
    alertEmailPlaceholder: 'tu@email.com',
    activateAlert: 'Activar alerta gratis',
    leadHelp: 'Lista lista para monetizar con patrocinadores. Cero spam.',
    seoLabel: 'SEO rápido',
    seoTitle: 'Páginas que posicionan',
    seoText: 'URLs como /donde-ver/mexico-vs-ecuador-2026 con datos estructurados, Schema.org y enlaces a canales oficiales.',
    directoryEyebrow: 'Directorio oficial',
    channelsByCountry: 'Canales por país',
    officialButton: 'Abrir canal oficial ↗',
    recommendedAd: '📢 Anuncio recomendado para este partido',
    emptyTitle: 'No se encontró partido',
    emptyText: 'Prueba otro país, fecha o selección.',
    matchSingular: 'partido',
    matchPlural: 'partidos',
    next: 'Próximo',
    alertDone: '✅ ¡Alerta activada! Este lead puede entrar al embudo de patrocinadores.',
    liveNow: '🟢 En vivo ahora',
    liveIn: 'Comienza en',
    shareMatch: 'Compartir',
    copyLink: 'Copiar enlace',
    copied: '✅ ¡Enlace copiado!',
    sponsorsEyebrow: 'Monetización',
    sponsorsTitle: 'Tabla de patrocinio',
    sponsorBasic: 'Básico',
    sponsorPro: 'Profesional',
    sponsorPremium: 'Premium',
    sponsorBasicPrice: 'US$ 50',
    sponsorProPrice: 'US$ 200',
    sponsorPremiumPrice: 'US$ 500',
    sponsorBasicPer: '/mes',
    sponsorProPer: '/mes',
    sponsorPremiumPer: '/mes',
    sponsorBasicFeature1: 'Destaque en 1 país',
    sponsorBasicFeature2: 'Enlace patrocinado',
    sponsorBasicFeature3: 'Mención en 1 partido',
    sponsorProFeature1: 'Destaque en 3 países',
    sponsorProFeature2: 'Enlace + banner patrocinado',
    sponsorProFeature3: 'Mención en 5 partidos',
    sponsorProFeature4: 'Informe mensual',
    sponsorPremiumFeature1: 'Destaque global',
    sponsorPremiumFeature2: 'Banner + video patrocinado',
    sponsorPremiumFeature3: 'Mención en todos los partidos',
    sponsorPremiumFeature4: 'Prioridad en nuevo contenido',
    sponsorPremiumFeature5: 'Informe semanal + consultoría',
    sponsorCta: 'Anunciarse ahora'
  }
};

/* ── Broadcasters Data ── */
const broadcasters = {
  br: {
    labels: { pt: 'Brasil', en: 'Brazil', es: 'Brasil' },
    flag: '🇧🇷',
    sponsor: {
      pt: 'Delivery, bar local e camisa da seleção funcionam muito bem antes dos jogos do Brasil.',
      en: 'Delivery, local sports bars and team shirts work very well before Brazil matches.',
      es: 'Delivery, bares locales y camisetas funcionan muy bien antes de partidos de Brasil.'
    },
    officials: [
      { name: 'FIFA — Copa 2026', note: { pt: 'Calendário e informações oficiais do torneio', en: 'Official tournament schedule and information', es: 'Calendario e información oficial del torneo' }, url: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026' },
      { name: 'ge / Globo', note: { pt: 'Cobertura e transmissão oficial quando disponível', en: 'Coverage and official broadcast when available', es: 'Cobertura y transmisión oficial cuando esté disponible' }, url: 'https://ge.globo.com/futebol/copa-do-mundo/' },
      { name: 'Globoplay', note: { pt: 'Streaming do Grupo Globo', en: 'Grupo Globo streaming service', es: 'Streaming del Grupo Globo' }, url: 'https://globoplay.globo.com/' },
      { name: 'CazeTV', note: { pt: 'Canal oficial no YouTube quando houver jogo autorizado', en: 'Official YouTube channel when authorized matches are available', es: 'Canal oficial de YouTube cuando haya partidos autorizados' }, url: 'https://www.youtube.com/@CazeTV' }
    ]
  },
  us: {
    labels: { pt: 'Estados Unidos', en: 'United States', es: 'Estados Unidos' },
    flag: '🇺🇸',
    sponsor: {
      pt: 'Planos de TV, streaming, bares esportivos e delivery convertem forte nos EUA.',
      en: 'TV plans, streaming, sports bars and delivery convert strongly in the US.',
      es: 'Planes de TV, streaming, bares deportivos y delivery convierten fuerte en EE.UU.'
    },
    officials: [
      { name: 'FIFA — World Cup 2026', note: { pt: 'Centro oficial do torneio', en: 'Official tournament hub', es: 'Centro oficial del torneo' }, url: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026' },
      { name: 'FOX Sports', note: { pt: 'Cobertura em inglês nos EUA', en: 'English-language coverage in the US', es: 'Cobertura en inglés en EE.UU.' }, url: 'https://www.foxsports.com/soccer/2026-fifa-world-cup' },
      { name: 'Telemundo Deportes', note: { pt: 'Cobertura em espanhol nos EUA', en: 'Spanish-language coverage in the US', es: 'Cobertura en español en EE.UU.' }, url: 'https://www.telemundo.com/deportes/futbol/copa-mundial-fifa-2026' },
      { name: 'Peacock Sports', note: { pt: 'Streaming para cobertura em espanhol', en: 'Streaming option for Spanish coverage', es: 'Streaming para cobertura en español' }, url: 'https://www.peacocktv.com/sports' }
    ]
  },
  mx: {
    labels: { pt: 'México', en: 'Mexico', es: 'México' },
    flag: '🇲🇽',
    sponsor: {
      pt: 'No México, destaque para operadoras, bares, camisetas e pacotes de streaming.',
      en: 'In Mexico, TV operators, bars, shirts and streaming packages are strong sponsors.',
      es: 'En México, operadores, bares, camisetas y paquetes de streaming son buenos patrocinadores.'
    },
    officials: [
      { name: 'FIFA — Copa Mundial 2026', note: { pt: 'Centro oficial do torneio', en: 'Official tournament hub', es: 'Centro oficial del torneo' }, url: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026' },
      { name: 'TUDN', note: { pt: 'Cobertura da TelevisaUnivision', en: 'TelevisaUnivision coverage', es: 'Cobertura de TelevisaUnivision' }, url: 'https://www.tudn.com/futbol/mundial-2026' },
      { name: 'ViX', note: { pt: 'Streaming da TelevisaUnivision', en: 'TelevisaUnivision streaming', es: 'Streaming de TelevisaUnivision' }, url: 'https://vix.com/' },
      { name: 'TV Azteca Deportes', note: { pt: 'Cobertura esportiva no México', en: 'Sports coverage in Mexico', es: 'Cobertura deportiva en México' }, url: 'https://www.tvazteca.com/aztecadeportes/' }
    ]
  },
  pt: {
    labels: { pt: 'Portugal', en: 'Portugal', es: 'Portugal' },
    flag: '🇵🇹',
    sponsor: {
      pt: 'Em Portugal, operadoras, bares e retransmissões oficiais têm forte procura.',
      en: 'In Portugal, operators, bars and official broadcasts have strong demand.',
      es: 'En Portugal, operadores, bares y retransmisiones oficiales tienen fuerte demanda.'
    },
    officials: [
      { name: 'FIFA — Copa 2026', note: { pt: 'Centro oficial do torneio', en: 'Official tournament hub', es: 'Centro oficial del torneo' }, url: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026' },
      { name: 'Sport TV', note: { pt: 'Canais desportivos por subscrição em Portugal', en: 'Portuguese subscription sports channels', es: 'Canales deportivos por suscripción en Portugal' }, url: 'https://www.sporttv.pt/' },
      { name: 'RTP', note: { pt: 'Cobertura em canal aberto quando disponível', en: 'Free-to-air coverage when available', es: 'Cobertura en canal abierto cuando esté disponible' }, url: 'https://www.rtp.pt/' }
    ]
  },
  ar: {
    labels: { pt: 'Argentina', en: 'Argentina', es: 'Argentina' },
    flag: '🇦🇷',
    sponsor: {
      pt: 'Na Argentina, operadoras, bares e apps de streaming têm forte potencial.',
      en: 'In Argentina, operators, bars and streaming apps have strong potential.',
      es: 'En Argentina, operadores, bares y apps de streaming tienen fuerte potencial.'
    },
    officials: [
      { name: 'FIFA — Copa 2026', note: { pt: 'Centro oficial do torneio', en: 'Official tournament hub', es: 'Centro oficial del torneo' }, url: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026' },
      { name: 'ESPN / Star+', note: { pt: 'Transmissão via Disney/ESPN na Argentina', en: 'Disney/ESPN broadcast in Argentina', es: 'Transmisión vía Disney/ESPN en Argentina' }, url: 'https://www.espn.com.ar/futbol/' },
      { name: 'TyC Sports', note: { pt: 'Canal esportivo argentino por subscrição', en: 'Argentine sports channel by subscription', es: 'Canal deportivo argentino por suscripción' }, url: 'https://www.tycsports.com/' }
    ]
  },
  ca: {
    labels: { pt: 'Canadá', en: 'Canada', es: 'Canadá' },
    flag: '🇨🇦',
    sponsor: {
      pt: 'No Canadá, operadoras de TV, bares esportivos e apps de streaming têm forte potencial durante a Copa.',
      en: 'In Canada, TV operators, sports bars and streaming apps have strong potential during the Cup.',
      es: 'En Canadá, operadores de TV, bares deportivos y apps de streaming tienen fuerte potencial durante la Copa.'
    },
    officials: [
      { name: 'TSN', note: { pt: 'Cobertura esportiva em inglês', en: 'English-language sports coverage', es: 'Cobertura deportiva en inglés' }, url: 'https://www.tsn.ca/' },
      { name: 'RDS', note: { pt: 'Cobertura esportiva em francês', en: 'French-language sports coverage', es: 'Cobertura deportiva en francés' }, url: 'https://www.rds.ca/' }
    ]
  },
  fr: {
    labels: { pt: 'França', en: 'France', es: 'Francia' },
    flag: '🇫🇷',
    sponsor: {
      pt: 'Na França, canais abertos e streaming dominam a audiência dos jogos da Copa.',
      en: 'In France, free-to-air channels and streaming dominate World Cup viewership.',
      es: 'En Francia, canales abiertos y streaming dominan la audiencia de la Copa.'
    },
    officials: [
      { name: 'M6', note: { pt: 'Canal aberto com transmissão dos jogos', en: 'Free-to-air channel broadcasting matches', es: 'Canal abierto con transmisión de partidos' }, url: 'https://www.m6.fr/' },
      { name: 'beIN Sports', note: { pt: 'Canais esportivos por assinatura', en: 'Subscription sports channels', es: 'Canales deportivos por suscripción' }, url: 'https://www.beinsports.com/fr/' }
    ]
  },
  de: {
    labels: { pt: 'Alemanha', en: 'Germany', es: 'Alemania' },
    flag: '🇩🇪',
    sponsor: {
      pt: 'Na Alemanha, emissoras públicas e streaming têm forte audiência para a Copa.',
      en: 'In Germany, public broadcasters and streaming have strong World Cup viewership.',
      es: 'En Alemania, emisoras públicas y streaming tienen fuerte audiencia para la Copa.'
    },
    officials: [
      { name: 'ARD', note: { pt: 'Emissora pública com transmissão ao vivo', en: 'Public broadcaster with live coverage', es: 'Emisora pública con transmisión en vivo' }, url: 'https://www.ard.de/' },
      { name: 'ZDF', note: { pt: 'Emissora pública com transmissão ao vivo', en: 'Public broadcaster with live coverage', es: 'Emisora pública con transmisión en vivo' }, url: 'https://www.zdf.de/' },
      { name: 'Magenta Sport', note: { pt: 'Streaming por assinatura Telekom', en: 'Telekom subscription streaming', es: 'Streaming por suscripción Telekom' }, url: 'https://www.magentasport.de/' }
    ]
  },
  es: {
    labels: { pt: 'Espanha', en: 'Spain', es: 'España' },
    flag: '🇪🇸',
    sponsor: {
      pt: 'Na Espanha, TV pública e streaming têm forte demanda por jogos da Copa.',
      en: 'In Spain, public TV and streaming have strong demand for World Cup matches.',
      es: 'En España, TV pública y streaming tienen fuerte demanda por partidos de la Copa.'
    },
    officials: [
      { name: 'RTVE', note: { pt: 'Televisão pública espanhola', en: 'Spanish public television', es: 'Televisión pública española' }, url: 'https://www.rtve.es/' },
      { name: 'DAZN', note: { pt: 'Streaming esportivo por assinatura', en: 'Sports subscription streaming', es: 'Streaming deportivo por suscripción' }, url: 'https://www.dazn.com/' }
    ]
  },
  it: {
    labels: { pt: 'Itália', en: 'Italy', es: 'Italia' },
    flag: '🇮🇹',
    sponsor: {
      pt: 'Na Itália, TV pública e streaming têm forte audiência para os jogos da Copa.',
      en: 'In Italy, public TV and streaming have strong viewership for World Cup matches.',
      es: 'En Italia, TV pública y streaming tienen fuerte audiencia para los partidos de la Copa.'
    },
    officials: [
      { name: 'RAI', note: { pt: 'Emissora pública italiana', en: 'Italian public broadcaster', es: 'Emisora pública italiana' }, url: 'https://www.rai.it/' },
      { name: 'DAZN', note: { pt: 'Streaming esportivo por assinatura', en: 'Sports subscription streaming', es: 'Streaming deportivo por suscripción' }, url: 'https://www.dazn.com/' }
    ]
  },
  nl: {
    labels: { pt: 'Holanda', en: 'Netherlands', es: 'Países Bajos' },
    flag: '🇳🇱',
    sponsor: {
      pt: 'Na Holanda, a emissora pública NOS domina a transmissão da Copa.',
      en: 'In the Netherlands, public broadcaster NOS dominates World Cup coverage.',
      es: 'En Países Bajos, la emisora pública NOS domina la transmisión de la Copa.'
    },
    officials: [
      { name: 'NOS', note: { pt: 'Emissora pública holandesa', en: 'Dutch public broadcaster', es: 'Emisora pública neerlandesa' }, url: 'https://nos.nl/' }
    ]
  },
  jp: {
    labels: { pt: 'Japão', en: 'Japan', es: 'Japón' },
    flag: '🇯🇵',
    sponsor: {
      pt: 'No Japão, canais abertos e streaming têm grande audiência nos jogos da Copa.',
      en: 'In Japan, free-to-air channels and streaming have large World Cup audiences.',
      es: 'En Japón, canales abiertos y streaming tienen gran audiencia en los partidos de la Copa.'
    },
    officials: [
      { name: 'NHK', note: { pt: 'Emissora pública japonesa', en: 'Japanese public broadcaster', es: 'Emisora pública japonesa' }, url: 'https://www.nhk.or.jp/' },
      { name: 'DAZN', note: { pt: 'Streaming esportivo por assinatura', en: 'Sports subscription streaming', es: 'Streaming deportivo por suscripción' }, url: 'https://www.dazn.com/' }
    ]
  },
  kr: {
    labels: { pt: 'Coreia do Sul', en: 'South Korea', es: 'Corea del Sur' },
    flag: '🇰🇷',
    sponsor: {
      pt: 'Na Coreia do Sul, emissoras e plataformas digitais têm forte procura pela Copa.',
      en: 'In South Korea, broadcasters and digital platforms have strong World Cup demand.',
      es: 'En Corea del Sur, emisoras y plataformas digitales tienen fuerte demanda de la Copa.'
    },
    officials: [
      { name: 'JTBC', note: { pt: 'Canal por assinatura com transmissão da Copa', en: 'Subscription channel broadcasting the Cup', es: 'Canal por suscripción con transmisión de la Copa' }, url: 'https://jtbc.joins.com/' },
      { name: 'KBS', note: { pt: 'Emissora pública sul-coreana', en: 'South Korean public broadcaster', es: 'Emisora pública surcoreana' }, url: 'https://www.kbs.co.kr/' }
    ]
  },
  sa: {
    labels: { pt: 'Arábia Saudita', en: 'Saudi Arabia', es: 'Arabia Saudita' },
    flag: '🇸🇦',
    sponsor: {
      pt: 'Na Arábia Saudita e região MENA, a beIN Sports detém os direitos oficiais de transmissão.',
      en: 'In Saudi Arabia and the MENA region, beIN Sports holds official broadcast rights.',
      es: 'En Arabia Saudita y la región MENA, beIN Sports posee los derechos oficiales de transmisión.'
    },
    officials: [
      { name: 'beIN Sports', note: { pt: 'Direitos oficiais para Oriente Médio e Norte da África', en: 'Official rights for Middle East and North Africa', es: 'Derechos oficiales para Oriente Medio y Norte de África' }, url: 'https://www.beinsports.com/' }
    ]
  },
  au: {
    labels: { pt: 'Austrália', en: 'Australia', es: 'Australia' },
    flag: '🇦🇺',
    sponsor: {
      pt: 'Na Austrália, a SBS transmite a Copa com ampla audiência.',
      en: 'In Australia, SBS broadcasts the Cup with wide viewership.',
      es: 'En Australia, SBS transmite la Copa con amplia audiencia.'
    },
    officials: [
      { name: 'SBS', note: { pt: 'Emissora pública australiana', en: 'Australian public broadcaster', es: 'Emisora pública australiana' }, url: 'https://www.sbs.com.au/' }
    ]
  },
  sn: {
    labels: { pt: 'Senegal', en: 'Senegal', es: 'Senegal' },
    flag: '🇸🇳',
    sponsor: {
      pt: 'No Senegal, a RTS e canais parceiros têm forte audiência nos jogos dos Leões.',
      en: 'In Senegal, RTS and partner channels have strong viewership for Lions matches.',
      es: 'En Senegal, RTS y canales asociados tienen fuerte audiencia en partidos de los Leones.'
    },
    officials: [
      { name: 'RTS', note: { pt: 'Radiodifusão nacional do Senegal', en: 'Senegalese national broadcaster', es: 'Radiodifusión nacional de Senegal' }, url: 'https://www.rts.sn/' }
    ]
  }
};

/* ── Match Data ── */
const matches = [
  {
    id: 'usa-vs-bosnia',
    teams: { pt: 'Estados Unidos 🇺🇸 x 🇧🇦 Bósnia e Herzegovina', en: 'United States 🇺🇸 vs 🇧🇦 Bosnia and Herzegovina', es: 'Estados Unidos 🇺🇸 vs 🇧🇦 Bosnia y Herzegovina' },
    stage: { pt: 'Rodada de 32', en: 'Round of 32', es: 'Ronda de 32' },
    time: { pt: 'Hoje, 1 de julho — 16:00 ET', en: 'Today, July 1 — 4:00 PM ET', es: 'Hoy, 1 de julio — 16:00 ET' },
    status: 'today',
    demand: { pt: 'Alta procura nos EUA', en: 'High demand in the US', es: 'Alta demanda en EE.UU.' },
    countries: { br: ['ge / Globo', 'Globoplay', 'CazeTV'], us: ['FOX Sports', 'Telemundo Deportes', 'Peacock Sports'], mx: ['TUDN', 'ViX', 'TV Azteca Deportes'], pt: ['Sport TV', 'RTP'], ar: ['ESPN / Star+', 'TyC Sports'], ca: ['TSN', 'RDS'], fr: ['M6', 'beIN Sports'], de: ['ARD', 'ZDF'], es: ['RTVE', 'DAZN'], it: ['RAI', 'DAZN'], nl: ['NOS'], jp: ['NHK', 'DAZN'], kr: ['JTBC', 'KBS'], sa: ['beIN Sports'], au: ['SBS'], sn: ['RTS'] },
    timestamp: Date.now() + 3600000 * 3,
    slug: 'usa-vs-bosnia-2026'
  },
  {
    id: 'mexico-vs-ecuador',
    teams: { pt: 'México 🇲🇽 x 🇪🇨 Equador', en: 'Mexico 🇲🇽 vs 🇪🇨 Ecuador', es: 'México 🇲🇽 vs 🇪🇨 Ecuador' },
    stage: { pt: 'Rodada de 32', en: 'Round of 32', es: 'Ronda de 32' },
    time: { pt: 'Hoje, 1 de julho — 19:00 ET', en: 'Today, July 1 — 7:00 PM ET', es: 'Hoy, 1 de julio — 19:00 ET' },
    status: 'today',
    demand: { pt: 'Alta procura no México', en: 'High demand in Mexico', es: 'Alta demanda en México' },
    countries: { br: ['ge / Globo', 'Globoplay', 'CazeTV'], us: ['FOX Sports', 'Telemundo Deportes', 'Peacock Sports'], mx: ['TUDN', 'ViX', 'TV Azteca Deportes'], pt: ['Sport TV'], ar: ['ESPN / Star+'], ca: ['TSN', 'RDS'], fr: ['M6', 'beIN Sports'], de: ['ARD', 'ZDF'], es: ['RTVE', 'DAZN'], it: ['RAI', 'DAZN'], nl: ['NOS'], jp: ['NHK', 'DAZN'], kr: ['JTBC', 'KBS'], sa: ['beIN Sports'], au: ['SBS'], sn: ['RTS'] },
    timestamp: Date.now() + 3600000 * 6,
    slug: 'mexico-vs-ecuador-2026'
  },
  {
    id: 'england-vs-dr-congo',
    teams: { pt: 'Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 x 🇨🇩 RD Congo', en: 'England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 vs 🇨🇩 DR Congo', es: 'Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿 vs 🇨🇩 RD Congo' },
    stage: { pt: 'Rodada de 32', en: 'Round of 32', es: 'Ronda de 32' },
    time: { pt: 'Hoje, 1 de julho — 13:00 ET', en: 'Today, July 1 — 1:00 PM ET', es: 'Hoy, 1 de julio — 13:00 ET' },
    status: 'live',
    demand: { pt: 'Busca internacional', en: 'International search demand', es: 'Búsqueda internacional' },
    countries: { br: ['CazeTV', 'ge / Globo'], us: ['FOX Sports', 'Telemundo Deportes', 'Peacock Sports'], mx: ['TUDN', 'ViX', 'TV Azteca Deportes'], pt: ['Sport TV', 'RTP'], ar: ['ESPN / Star+'], ca: ['TSN', 'RDS'], fr: ['M6', 'beIN Sports'], de: ['ARD', 'ZDF'], es: ['RTVE', 'DAZN'], it: ['RAI', 'DAZN'], nl: ['NOS'], jp: ['NHK', 'DAZN'], kr: ['JTBC', 'KBS'], sa: ['beIN Sports'], au: ['SBS'], sn: ['RTS'] },
    timestamp: Date.now() - 3600000 * 0.5,
    slug: 'england-vs-dr-congo-2026'
  },
  {
    id: 'belgium-vs-senegal',
    teams: { pt: 'Bélgica 🇧🇪 x 🇸🇳 Senegal', en: 'Belgium 🇧🇪 vs 🇸🇳 Senegal', es: 'Bélgica 🇧🇪 vs 🇸🇳 Senegal' },
    stage: { pt: 'Rodada de 32', en: 'Round of 32', es: 'Ronda de 32' },
    time: { pt: 'Hoje, 1 de julho — 21:00 ET', en: 'Today, July 1 — 9:00 PM ET', es: 'Hoy, 1 de julio — 21:00 ET' },
    status: 'upcoming',
    demand: { pt: 'Patrocínio premium', en: 'Premium sponsorship', es: 'Patrocinio premium' },
    countries: { br: ['ge / Globo', 'CazeTV'], us: ['FOX Sports', 'Telemundo Deportes', 'Peacock Sports'], mx: ['TUDN', 'ViX', 'TV Azteca Deportes'], pt: ['Sport TV'], ar: ['ESPN / Star+', 'TyC Sports'], ca: ['TSN', 'RDS'], fr: ['M6', 'beIN Sports'], de: ['ARD', 'ZDF'], es: ['RTVE', 'DAZN'], it: ['RAI', 'DAZN'], nl: ['NOS'], jp: ['NHK', 'DAZN'], kr: ['JTBC', 'KBS'], sa: ['beIN Sports'], au: ['SBS'], sn: ['RTS'] },
    timestamp: Date.now() + 3600000 * 8,
    slug: 'belgium-vs-senegal-2026'
  },
  {
    id: 'brazil-vs-croatia',
    teams: { pt: 'Brasil 🇧🇷 x 🇭🇷 Croácia', en: 'Brazil 🇧🇷 vs 🇭🇷 Croatia', es: 'Brasil 🇧🇷 vs 🇭🇷 Croacia' },
    stage: { pt: 'Oitavas de final', en: 'Round of 16', es: 'Octavos de final' },
    time: { pt: '3 de julho — 16:00 ET', en: 'July 3 — 4:00 PM ET', es: '3 de julio — 16:00 ET' },
    status: 'upcoming',
    demand: { pt: 'Altíssima procura — Brasil em campo', en: 'Very high demand — Brazil on the pitch', es: 'Altísima demanda — Brasil en la cancha' },
    countries: { br: ['ge / Globo', 'Globoplay', 'CazeTV'], us: ['FOX Sports', 'Telemundo Deportes', 'Peacock Sports'], mx: ['TUDN', 'ViX', 'TV Azteca Deportes'], pt: ['RTP', 'Sport TV'], ar: ['ESPN / Star+'], ca: ['TSN', 'RDS'], fr: ['M6', 'beIN Sports'], de: ['ARD', 'ZDF'], es: ['RTVE', 'DAZN'], it: ['RAI', 'DAZN'], nl: ['NOS'], jp: ['NHK', 'DAZN'], kr: ['JTBC', 'KBS'], sa: ['beIN Sports'], au: ['SBS'], sn: ['RTS'] },
    timestamp: Date.now() + 3600000 * 48,
    slug: 'brazil-vs-croatia-2026'
  },
  {
    id: 'argentina-vs-uruguay',
    teams: { pt: 'Argentina 🇦🇷 x 🇺🇾 Uruguai', en: 'Argentina 🇦🇷 vs 🇺🇾 Uruguay', es: 'Argentina 🇦🇷 vs 🇺🇾 Uruguay' },
    stage: { pt: 'Oitavas de final', en: 'Round of 16', es: 'Octavos de final' },
    time: { pt: '4 de julho — 19:00 ET', en: 'July 4 — 7:00 PM ET', es: '4 de julio — 19:00 ET' },
    status: 'upcoming',
    demand: { pt: 'Alta procura no Cone Sul', en: 'High demand in the Southern Cone', es: 'Alta demanda en el Cono Sur' },
    countries: { br: ['ge / Globo', 'Globoplay', 'CazeTV'], us: ['FOX Sports', 'Telemundo Deportes'], mx: ['TUDN', 'ViX', 'TV Azteca Deportes'], pt: ['Sport TV'], ar: ['ESPN / Star+', 'TyC Sports'], ca: ['TSN', 'RDS'], fr: ['M6', 'beIN Sports'], de: ['ARD', 'ZDF'], es: ['RTVE', 'DAZN'], it: ['RAI', 'DAZN'], nl: ['NOS'], jp: ['NHK', 'DAZN'], kr: ['JTBC', 'KBS'], sa: ['beIN Sports'], au: ['SBS'], sn: ['RTS'] },
    timestamp: Date.now() + 3600000 * 72,
    slug: 'argentina-vs-uruguay-2026'
  },
  // ═══ QUARTAS-DE-FINAL ═══
  {
    id: 'brazil-vs-england',
    teams: { pt: 'Brasil 🇧🇷 x 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra', en: 'Brazil 🇧🇷 vs 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England', es: 'Brasil 🇧🇷 vs 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra' },
    stage: { pt: 'Quartas de final', en: 'Quarter-finals', es: 'Cuartos de final' },
    time: { pt: '7 de julho — 16:00 ET', en: 'July 7 — 4:00 PM ET', es: '7 de julio — 16:00 ET' },
    status: 'upcoming',
    demand: { pt: 'Altíssima procura — Brasil em jogo de quartas', en: 'Huge demand — Brazil in quarter-finals', es: 'Altísima demanda — Brasil en cuartos de final' },
    countries: { br: ['ge / Globo', 'Globoplay', 'CazeTV'], us: ['FOX Sports', 'Telemundo Deportes', 'Peacock Sports'], mx: ['TUDN', 'ViX', 'TV Azteca Deportes'], pt: ['RTP', 'Sport TV'], ar: ['ESPN / Star+'], ca: ['TSN', 'RDS'], fr: ['M6', 'beIN Sports'], de: ['ARD', 'ZDF'], es: ['RTVE', 'DAZN'], it: ['RAI', 'DAZN'], nl: ['NOS'], jp: ['NHK', 'DAZN'], kr: ['JTBC', 'KBS'], sa: ['beIN Sports'], au: ['SBS'], sn: ['RTS'] },
    timestamp: Date.now() + 3600000 * 168,
    slug: 'brazil-vs-england-2026'
  },
  {
    id: 'argentina-vs-belgium',
    teams: { pt: 'Argentina 🇦🇷 x 🇧🇪 Bélgica', en: 'Argentina 🇦🇷 vs 🇧🇪 Belgium', es: 'Argentina 🇦🇷 vs 🇧🇪 Bélgica' },
    stage: { pt: 'Quartas de final', en: 'Quarter-finals', es: 'Cuartos de final' },
    time: { pt: '7 de julho — 19:00 ET', en: 'July 7 — 7:00 PM ET', es: '7 de julio — 19:00 ET' },
    status: 'upcoming',
    demand: { pt: 'Alta procura — duelo sul-americano vs europeu', en: 'High demand — South America vs Europe clash', es: 'Alta demanda — duelo sudamericano vs europeo' },
    countries: { br: ['ge / Globo', 'Globoplay', 'CazeTV'], us: ['FOX Sports', 'Telemundo Deportes'], mx: ['TUDN', 'ViX', 'TV Azteca Deportes'], pt: ['Sport TV'], ar: ['ESPN / Star+', 'TyC Sports'], ca: ['TSN', 'RDS'], fr: ['M6', 'beIN Sports'], de: ['ARD', 'ZDF'], es: ['RTVE', 'DAZN'], it: ['RAI', 'DAZN'], nl: ['NOS'], jp: ['NHK', 'DAZN'], kr: ['JTBC', 'KBS'], sa: ['beIN Sports'], au: ['SBS'], sn: ['RTS'] },
    timestamp: Date.now() + 3600000 * 170,
    slug: 'argentina-vs-belgium-2026'
  },
  {
    id: 'usa-vs-germany',
    teams: { pt: 'Estados Unidos 🇺🇸 x 🇩🇪 Alemanha', en: 'United States 🇺🇸 vs 🇩🇪 Germany', es: 'Estados Unidos 🇺🇸 vs 🇩🇪 Alemania' },
    stage: { pt: 'Quartas de final', en: 'Quarter-finals', es: 'Cuartos de final' },
    time: { pt: '8 de julho — 16:00 ET', en: 'July 8 — 4:00 PM ET', es: '8 de julio — 16:00 ET' },
    status: 'upcoming',
    demand: { pt: 'Muita procura nos EUA e Europa', en: 'High demand in the US and Europe', es: 'Alta demanda en EE.UU. y Europa' },
    countries: { br: ['ge / Globo', 'CazeTV'], us: ['FOX Sports', 'Telemundo Deportes', 'Peacock Sports'], mx: ['TUDN', 'ViX', 'TV Azteca Deportes'], pt: ['Sport TV'], ar: ['ESPN / Star+'], ca: ['TSN', 'RDS'], fr: ['M6', 'beIN Sports'], de: ['ARD', 'ZDF'], es: ['RTVE', 'DAZN'], it: ['RAI', 'DAZN'], nl: ['NOS'], jp: ['NHK', 'DAZN'], kr: ['JTBC', 'KBS'], sa: ['beIN Sports'], au: ['SBS'], sn: ['RTS'] },
    timestamp: Date.now() + 3600000 * 192,
    slug: 'usa-vs-germany-2026'
  },
  {
    id: 'mexico-vs-spain',
    teams: { pt: 'México 🇲🇽 x 🇪🇸 Espanha', en: 'Mexico 🇲🇽 vs 🇪🇸 Spain', es: 'México 🇲🇽 vs 🇪🇸 España' },
    stage: { pt: 'Quartas de final', en: 'Quarter-finals', es: 'Cuartos de final' },
    time: { pt: '8 de julho — 19:00 ET', en: 'July 8 — 7:00 PM ET', es: '8 de julio — 19:00 ET' },
    status: 'upcoming',
    demand: { pt: 'Grande expectativa no México e Espanha', en: 'Great expectations in Mexico and Spain', es: 'Gran expectativa en México y España' },
    countries: { br: ['ge / Globo', 'Globoplay'], us: ['FOX Sports', 'Telemundo Deportes'], mx: ['TUDN', 'ViX', 'TV Azteca Deportes'], pt: ['Sport TV'], ar: ['ESPN / Star+'], ca: ['TSN', 'RDS'], fr: ['M6', 'beIN Sports'], de: ['ARD', 'ZDF'], es: ['RTVE', 'DAZN'], it: ['RAI', 'DAZN'], nl: ['NOS'], jp: ['NHK', 'DAZN'], kr: ['JTBC', 'KBS'], sa: ['beIN Sports'], au: ['SBS'], sn: ['RTS'] },
    timestamp: Date.now() + 3600000 * 194,
    slug: 'mexico-vs-spain-2026'
  },
  // ═══ SEMI-FINAIS ═══
  {
    id: 'brazil-vs-argentina',
    teams: { pt: 'Brasil 🇧🇷 x 🇦🇷 Argentina', en: 'Brazil 🇧🇷 vs 🇦🇷 Argentina', es: 'Brasil 🇧🇷 vs 🇦🇷 Argentina' },
    stage: { pt: 'Semi-final', en: 'Semi-final', es: 'Semifinal' },
    time: { pt: '12 de julho — 16:00 ET', en: 'July 12 — 4:00 PM ET', es: '12 de julio — 16:00 ET' },
    status: 'upcoming',
    demand: { pt: 'Máxima procura — clássico sul-americano na semi', en: 'Maximum demand — South American classic in the semi', es: 'Máxima demanda — clásico sudamericano en la semifinal' },
    countries: { br: ['ge / Globo', 'Globoplay', 'CazeTV'], us: ['FOX Sports', 'Telemundo Deportes', 'Peacock Sports'], mx: ['TUDN', 'ViX', 'TV Azteca Deportes'], pt: ['RTP', 'Sport TV'], ar: ['ESPN / Star+', 'TyC Sports'], ca: ['TSN', 'RDS'], fr: ['M6', 'beIN Sports'], de: ['ARD', 'ZDF'], es: ['RTVE', 'DAZN'], it: ['RAI', 'DAZN'], nl: ['NOS'], jp: ['NHK', 'DAZN'], kr: ['JTBC', 'KBS'], sa: ['beIN Sports'], au: ['SBS'], sn: ['RTS'] },
    timestamp: Date.now() + 3600000 * 264,
    slug: 'brazil-vs-argentina-2026'
  },
  {
    id: 'usa-vs-mexico',
    teams: { pt: 'Estados Unidos 🇺🇸 x 🇲🇽 México', en: 'United States 🇺🇸 vs 🇲🇽 Mexico', es: 'Estados Unidos 🇺🇸 vs 🇲🇽 México' },
    stage: { pt: 'Semi-final', en: 'Semi-final', es: 'Semifinal' },
    time: { pt: '13 de julho — 19:00 ET', en: 'July 13 — 7:00 PM ET', es: '13 de julio — 19:00 ET' },
    status: 'upcoming',
    demand: { pt: 'Máxima procura — clássico da América do Norte', en: 'Maximum demand — North American classic', es: 'Máxima demanda — clásico de América del Norte' },
    countries: { br: ['ge / Globo', 'CazeTV'], us: ['FOX Sports', 'Telemundo Deportes', 'Peacock Sports'], mx: ['TUDN', 'ViX', 'TV Azteca Deportes'], pt: ['Sport TV'], ar: ['ESPN / Star+', 'TyC Sports'], ca: ['TSN', 'RDS'], fr: ['M6', 'beIN Sports'], de: ['ARD', 'ZDF'], es: ['RTVE', 'DAZN'], it: ['RAI', 'DAZN'], nl: ['NOS'], jp: ['NHK', 'DAZN'], kr: ['JTBC', 'KBS'], sa: ['beIN Sports'], au: ['SBS'], sn: ['RTS'] },
    timestamp: Date.now() + 3600000 * 288,
    slug: 'usa-vs-mexico-2026'
  },
  // ═══ GRANDE FINAL ═══
  {
    id: 'final-2026',
    teams: { pt: '🏆 Grande Final — Vencedor SF1 x Vencedor SF2', en: '🏆 Grand Final — Winner SF1 vs Winner SF2', es: '🏆 Gran Final — Ganador SF1 vs Ganador SF2' },
    stage: { pt: 'Grande Final', en: 'Final', es: 'Gran Final' },
    time: { pt: '19 de julho — 12:00 ET', en: 'July 19 — 12:00 PM ET', es: '19 de julio — 12:00 ET' },
    status: 'upcoming',
    demand: { pt: 'Máxima procura global — a grande decisão da Copa 2026', en: 'Maximum global demand — the 2026 World Cup grand finale', es: 'Máxima demanda global — la gran final de la Copa 2026' },
    countries: { br: ['ge / Globo', 'Globoplay', 'CazeTV'], us: ['FOX Sports', 'Telemundo Deportes', 'Peacock Sports'], mx: ['TUDN', 'ViX', 'TV Azteca Deportes'], pt: ['RTP', 'Sport TV'], ar: ['ESPN / Star+', 'TyC Sports'], ca: ['TSN', 'RDS'], fr: ['M6', 'beIN Sports'], de: ['ARD', 'ZDF'], es: ['RTVE', 'DAZN'], it: ['RAI', 'DAZN'], nl: ['NOS'], jp: ['NHK', 'DAZN'], kr: ['JTBC', 'KBS'], sa: ['beIN Sports'], au: ['SBS'], sn: ['RTS'] },
    timestamp: Date.now() + 3600000 * 438,
    slug: 'final-2026'
  }
];

/* ── State ── */
let state = {
  country: null,
  language: null,
  status: 'all',
  search: '',
  sentClicks: 0,
  adClicks: 0,
  impressions: 0,
  leads: 0,
  sponsorsSold: 0,
  theme: null
};

/* ── DOM References ── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const DOM = {
  countrySelect: $('#countrySelect'),
  languageSelect: $('#languageSelect'),
  statusSelect: $('#statusSelect'),
  searchInput: $('#searchInput'),
  matchGrid: $('#matchGrid'),
  matchCount: $('#matchCount'),
  revenueEstimate: $('#revenueEstimate'),
  revenueSentClicks: $('#revenueSentClicks'),
  revenueAdClicks: $('#revenueAdClicks'),
  revenueImpressions: $('#revenueImpressions'),
  revenueSponsors: $('#revenueSponsors'),
  resetButton: $('#resetButton'),
  leadForm: $('#leadForm'),
  leadMessage: $('#leadMessage'),
  officialGrid: $('#officialGrid'),
  sponsorCopy: $('#sponsorCopy'),
  themeToggle: $('#themeToggle'),
  toast: $('#toast'),
  liveBar: $('#liveBar'),
  liveCountdownText: $('#liveCountdownText'),
  liveMatchName: $('#liveMatchName')
};

/* ── Config System ── */
function getAppConfig() {
  try { return JSON.parse(localStorage.getItem('ondepassaAdminConfig') || '{}'); }
  catch { return {}; }
}

function replacePlaceholders() {
  const cfg = getAppConfig();
  const domain = cfg.domain || 'seudominio.com';
  const adsense = cfg.adsense || 'ca-pub-SEU_ID_ADSENSE';
  const gaId = cfg.gaId || 'G-MEASUREMENT_ID';
  const email = cfg.email || 'comercial@seudominio.com';

  const pairs = [
    ['seudominio.com', domain],
    ['ca-pub-SEU_ID_ADSENSE', adsense],
    ['G-MEASUREMENT_ID', gaId],
    ['comercial@seudominio.com', email]
  ];

  // Walk text nodes safely (does NOT destroy DOM/event listeners)
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while (node = walker.nextNode()) {
    let txt = node.textContent;
    let changed = false;
    for (const [oldVal, newVal] of pairs) {
      if (oldVal !== newVal && txt.includes(oldVal)) {
        txt = txt.split(oldVal).join(newVal);
        changed = true;
      }
    }
    if (changed) node.textContent = txt;
  }

  // Replace in meta tag content attributes
  $$('meta[content]').forEach(el => {
    let val = el.content;
    for (const [oldVal, newVal] of pairs) {
      if (oldVal !== newVal && val.includes(oldVal)) {
        val = val.split(oldVal).join(newVal);
      }
    }
    if (val !== el.content) el.content = val;
  });

  // Replace in href, data-i18n-placeholder and other string attributes
  $$('[href],[data-i18n-placeholder],[data-copy-link]').forEach(el => {
    ['href', 'data-i18n-placeholder', 'data-copy-link'].forEach(attr => {
      if (!el.hasAttribute(attr)) return;
      let val = el.getAttribute(attr);
      if (!val) return;
      let changed = false;
      for (const [oldVal, newVal] of pairs) {
        if (oldVal !== newVal && val.includes(oldVal)) {
          val = val.split(oldVal).join(newVal);
          changed = true;
        }
      }
      if (changed) el.setAttribute(attr, val);
    });
  });

  // Replace in canonical link href
  $$('link[rel="canonical"]').forEach(el => {
    let val = el.href;
    for (const [oldVal, newVal] of pairs) {
      if (oldVal !== newVal && val.includes(oldVal)) {
        val = val.split(oldVal).join(newVal);
      }
    }
    if (val !== el.href) el.href = val;
  });
}

/* ── Utility Functions ── */
function t(value) {
  return typeof value === 'string' ? value : (value[state.language] || value.pt || value.en || '');
}

function getSavedPrefs() {
  try { return JSON.parse(localStorage.getItem('ondepassaPrefs') || '{}'); }
  catch { return {}; }
}

function detectLanguage() {
  const saved = getSavedPrefs().language;
  if (saved) return saved;
  const lang = (navigator.languages && navigator.languages[0] ? navigator.languages[0] : navigator.language || 'pt').toLowerCase();
  if (lang.startsWith('es')) return 'es';
  if (lang.startsWith('en')) return 'en';
  return 'pt';
}

function detectCountry() {
  const saved = getSavedPrefs().country;
  if (saved) return saved;
  const lang = (navigator.language || '').toLowerCase();
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  if (lang.includes('mx') || zone.includes('Mexico')) return 'mx';
  if (lang.includes('us') || zone.includes('New_York') || zone.includes('Chicago') || zone.includes('Los_Angeles') || zone.includes('Denver')) return 'us';
  if (lang.includes('pt') || zone.includes('Lisbon') || zone.includes('Azores')) return 'pt';
  if (lang.includes('ar') || zone.includes('Buenos_Aires')) return 'ar';
  if (lang.includes('br') || zone.includes('Sao_Paulo') || zone.includes('Manaus') || zone.includes('Belem') || zone.includes('Noronha')) return 'br';
  return detectLanguage() === 'en' ? 'us' : 'br';
}

function detectTheme() {
  const saved = getSavedPrefs().theme;
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function savePrefs() {
  localStorage.setItem('ondepassaPrefs', JSON.stringify({
    language: state.language,
    country: state.country,
    theme: state.theme
  }));
}

function formatNumber(num) {
  return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

function debounce(fn, ms = 250) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

/* ── Theme ── */
function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  if (DOM.themeToggle) {
    DOM.themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    DOM.themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Modo claro' : 'Modo escuro');
  }
  savePrefs();
}

function toggleTheme() {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
}

/* ── Toast Notifications ── */
function showToast(message, type = 'success') {
  if (!DOM.toast) return;
  DOM.toast.textContent = message;
  DOM.toast.className = `toast ${type}`;
  DOM.toast.classList.add('show');
  clearTimeout(DOM.toast._hideTimer);
  DOM.toast._hideTimer = setTimeout(() => {
    DOM.toast.classList.remove('show');
  }, 3000);
}

/* ── Live Countdown ── */
let countdownInterval = null;

function updateCountdown() {
  const liveMatch = matches.find(m => m.status === 'live') || matches.find(m => m.status === 'today');
  if (!liveMatch || !DOM.liveBar) {
    if (DOM.liveBar) DOM.liveBar.style.display = 'none';
    return;
  }

  DOM.liveBar.style.display = 'flex';
  const now = Date.now();
  const diff = liveMatch.timestamp - now;

  if (liveMatch.status === 'live' || (liveMatch.status === 'today' && diff < 0)) {
    DOM.liveMatchName.textContent = t(liveMatch.teams);
    DOM.liveCountdownText.textContent = t({ pt: '🟢 AO VIVO AGORA', en: '🟢 LIVE NOW', es: '🟢 EN VIVO AHORA' });
    if (DOM.liveBar.querySelector('.live-dot')) {
      DOM.liveBar.querySelector('.live-dot').style.display = 'inline-flex';
    }
    return;
  }

  if (diff > 0) {
    const hours = Math.floor(diff / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    DOM.liveMatchName.textContent = t(liveMatch.teams);
    DOM.liveCountdownText.textContent = `${t({ pt: 'Começa em', en: 'Starts in', es: 'Comienza en' })} ${hours}h ${mins.toString().padStart(2, '0')}m ${secs.toString().padStart(2, '0')}s`;
    if (DOM.liveBar.querySelector('.live-dot')) {
      DOM.liveBar.querySelector('.live-dot').style.display = 'none';
    }
  }
}

function startCountdown() {
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}

/* ── i18n ── */
function applyTranslations() {
  const dict = translations[state.language];
  document.documentElement.lang = state.language === 'pt' ? 'pt-BR' : state.language;

  $$('[data-i18n]').forEach(node => {
    const key = node.getAttribute('data-i18n');
    if (dict[key]) node.textContent = dict[key];
  });

  $$('[data-i18n-placeholder]').forEach(node => {
    const key = node.getAttribute('data-i18n-placeholder');
    if (dict[key]) node.placeholder = dict[key];
  });

  if (DOM.searchInput) {
    DOM.searchInput.placeholder = dict.searchPlaceholder || translations[state.language].searchPlaceholder;
  }
}

/* ── Country Dropdown ── */
function populateCountries() {
  if (!DOM.countrySelect) return;
  DOM.countrySelect.innerHTML = '';
  Object.entries(broadcasters).forEach(([value, country]) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = `${country.flag || ''} ${t(country.labels)}`.trim();
    DOM.countrySelect.append(option);
  });
  DOM.countrySelect.value = state.country;
}

/* ── Helpers ── */
function getOfficialByName(countryKey, name) {
  return broadcasters[countryKey]?.officials.find(item => item.name === name) || broadcasters[countryKey]?.officials[0] || null;
}

function formatStatus(status) {
  const dict = translations[state.language];
  if (status === 'live') return dict.statusLive;
  if (status === 'today') return dict.statusToday;
  return dict.statusUpcoming;
}

function getFilteredMatches() {
  const search = state.search.trim().toLowerCase();
  return matches.filter(match => {
    const searchable = `${t(match.teams)} ${t(match.stage)} ${t(match.time)}`.toLowerCase();
    const matchesSearch = !search || searchable.includes(search);
    const matchesStatus = state.status === 'all' || match.status === state.status;
    const hasCountryProvider = match.countries[state.country] && match.countries[state.country].length > 0;
    return matchesSearch && matchesStatus && hasCountryProvider;
  });
}

/* ── Revenue Engine ── */
function updateRevenue() {
  const sentRevenue = state.sentClicks * 0.42;
  const adRevenue = state.adClicks * 1.20;
  const impressionRevenue = state.impressions * 0.018;
  const leadRevenue = state.leads * 2.00;
  const sponsorRevenue = state.sponsorsSold * 50;
  const total = sentRevenue + adRevenue + impressionRevenue + leadRevenue + sponsorRevenue;

  if (DOM.revenueEstimate) {
    DOM.revenueEstimate.textContent = formatCurrency(total);
  }
  if (DOM.revenueSentClicks) DOM.revenueSentClicks.textContent = `${state.sentClicks} (${formatCurrency(sentRevenue)})`;
  if (DOM.revenueAdClicks) DOM.revenueAdClicks.textContent = `${state.adClicks} (${formatCurrency(adRevenue)})`;
  if (DOM.revenueImpressions) DOM.revenueImpressions.textContent = `${state.impressions} (${formatCurrency(impressionRevenue)})`;
  if (DOM.revenueSponsors) DOM.revenueSponsors.textContent = `${state.sponsorsSold} (${formatCurrency(sponsorRevenue)})`;

  // Share state with admin panel via localStorage
  try {
    localStorage.setItem('ondepassaRevenue', JSON.stringify({
      sentClicks: state.sentClicks,
      adClicks: state.adClicks,
      impressions: state.impressions,
      leads: state.leads,
      sponsorsSold: state.sponsorsSold
    }));
  } catch {}

  // Track revenue as GA event
  gtag('event', 'revenue_simulation', {
    total_revenue: total,
    sent_clicks: state.sentClicks,
    ad_clicks: state.adClicks,
    impressions: state.impressions,
    leads: state.leads,
    sponsors: state.sponsorsSold
  });
}

/* ── Render Officials ── */
function renderOfficials() {
  if (!DOM.officialGrid) return;
  DOM.officialGrid.innerHTML = Object.entries(broadcasters).map(([key, country]) => `
    <article class="official-card">
      <h3>${country.flag || ''} ${t(country.labels)}</h3>
      <ul>
        ${country.officials.map(item => `
          <li>
            <a href="${item.url}" target="_blank" rel="noopener sponsored">
              ${item.name}
              <small>${t(item.note)}</small>
            </a>
          </li>
        `).join('')}
      </ul>
    </article>
  `).join('');
}

/* ── Render Matches ── */
function renderMatches() {
  const dict = translations[state.language];
  const filtered = getFilteredMatches();
  state.impressions += filtered.length;

  // Update sponsor text
  if (DOM.sponsorCopy) {
    DOM.sponsorCopy.textContent = t(broadcasters[state.country]?.sponsor || dict.sponsorText);
  }

  // Update count
  if (DOM.matchCount) {
    DOM.matchCount.textContent = `${filtered.length} ${filtered.length === 1 ? dict.matchSingular : dict.matchPlural}`;
  }

  // Empty state
  if (!filtered.length) {
    if (DOM.matchGrid) {
      DOM.matchGrid.innerHTML = `
        <div class="empty-state">
          <strong>${dict.emptyTitle}</strong>
          <p>${dict.emptyText}</p>
        </div>
      `;
    }
    updateRevenue();
    return;
  }

  // Render cards
  if (DOM.matchGrid) {
    DOM.matchGrid.innerHTML = filtered.map((match, index) => {
      const providers = (match.countries[state.country] || []);
      const providerHtml = providers.map(name => {
        const provider = getOfficialByName(state.country, name);
        if (!provider) return '';
        return `
          <div class="provider">
            <div>
              <strong>${provider.name}</strong>
              <span>${t(provider.note)}</span>
            </div>
            <a class="watch-button" data-transfer-click data-match-id="${match.id}" data-provider="${provider.name}" href="${provider.url}" target="_blank" rel="noopener sponsored">
              ${dict.officialButton}
            </a>
          </div>
        `;
      }).join('');

      return `
        <article class="match-card" style="animation-delay: ${index * 80}ms">
          <div class="match-top">
            <div>
              <div class="teams">${t(match.teams)}</div>
              <div class="meta">${t(match.stage)} — ${t(match.time)} — ${t(broadcasters[state.country]?.labels || '')}</div>
            </div>
            <span class="status-tag ${match.status}">${formatStatus(match.status)}</span>
          </div>
          <div class="provider-list">
            ${providerHtml}
          </div>
          <div class="ad-unit">
            <strong>${dict.recommendedAd}</strong>
            <small>${t(match.demand)}: espaço para bar, delivery, camisa, TV, projetor ou patrocinador local.</small>
          </div>
          <div style="display:flex; gap:8px; margin-top:4px">
            <button class="share-btn-sm" data-share-match="${match.slug}" title="${dict.shareMatch}">
              📤 ${dict.shareMatch}
            </button>
            <button class="share-btn-sm" data-copy-link="${window.location.origin}/pages/${match.slug}.html" title="${dict.copyLink}">
              🔗 ${dict.copyLink}
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  // Attach click tracking
  $$('[data-transfer-click]').forEach(link => {
    link.addEventListener('click', function (e) {
      state.sentClicks += 1;
      updateRevenue();
      // GA event
      gtag('event', 'outbound_click', {
        match_id: this.dataset.matchId,
        provider: this.dataset.provider,
        country: state.country,
        language: state.language
      });
    });
  });

  // Share buttons
  $$('[data-share-match]').forEach(btn => {
    btn.addEventListener('click', function () {
      const slug = this.dataset.shareMatch;
      const match = matches.find(m => m.slug === slug);
      if (match && navigator.share) {
        navigator.share({
          title: t(match.teams),
          text: `${t(match.teams)} — ${t(match.stage)} — ${t(match.time)}`,
          url: `${window.location.origin}/pages/${slug}.html`
        }).catch(() => {});
      }
    });
  });

  $$('[data-copy-link]').forEach(btn => {
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(this.dataset.copyLink).then(() => {
        showToast(translations[state.language].copied || '✅ Link copied!');
      }).catch(() => {});
    });
  });

  updateRevenue();
}

/* ── Refresh All ── */
function refreshAll() {
  applyTranslations();
  populateCountries();
  renderOfficials();
  renderMatches();
  if (DOM.languageSelect) DOM.languageSelect.value = state.language;
  if (DOM.statusSelect) DOM.statusSelect.value = state.status;
}

/* ── Google Ads Helpers ── */
function triggerAdClick() {
  state.adClicks += 1;
  updateRevenue();
  gtag('event', 'ad_click', { country: state.country, language: state.language });
}

/* ── Lead Form ── */
function handleLeadSubmit(e) {
  e.preventDefault();
  state.leads += 1;
  const email = DOM.leadForm?.querySelector('input')?.value || '';
  if (DOM.leadMessage) {
    DOM.leadMessage.textContent = translations[state.language].alertDone;
    DOM.leadMessage.style.color = 'var(--green)';
  }
  DOM.leadForm?.reset();
  updateRevenue();
  showToast(translations[state.language].alertDone);
  // GA lead event
  gtag('event', 'lead_capture', {
    country: state.country,
    language: state.language,
    email_hash: btoa(email.trim().toLowerCase()).slice(0, 12)
  });
}

/* ── Floating Share (Current Page) ── */
function setupFloatingShare() {
  const sharePage = $('#sharePage');
  const copyPageLink = $('#copyPageLink');

  sharePage?.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      }).catch(() => {});
    }
  });

  copyPageLink?.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast(translations[state.language].copied);
    });
  });
}

/* ── Initialization ── */
function init() {
  // Detect state
  state.language = detectLanguage();
  state.country = detectCountry();
  state.theme = detectTheme();

  // Apply theme
  applyTheme(state.theme);

  // Init UI
  if (DOM.languageSelect) DOM.languageSelect.value = state.language;
  if (DOM.statusSelect) DOM.statusSelect.value = 'all';
  if (DOM.searchInput) DOM.searchInput.value = '';

  refreshAll();

  // Event listeners
  DOM.languageSelect?.addEventListener('change', e => {
    state.language = e.target.value;
    savePrefs();
    refreshAll();
  });

  DOM.countrySelect?.addEventListener('change', e => {
    state.country = e.target.value;
    savePrefs();
    renderMatches();
  });

  DOM.statusSelect?.addEventListener('change', e => {
    state.status = e.target.value;
    renderMatches();
  });

  DOM.searchInput?.addEventListener('input', debounce(e => {
    state.search = e.target.value;
    renderMatches();
  }, 200));

  DOM.resetButton?.addEventListener('click', () => {
    state.search = '';
    state.status = 'all';
    if (DOM.searchInput) DOM.searchInput.value = '';
    if (DOM.statusSelect) DOM.statusSelect.value = 'all';
    renderMatches();
  });

  // Ad click
  $$('[data-ad-click]').forEach(el => {
    el.addEventListener('click', triggerAdClick);
  });

  // Lead form
  DOM.leadForm?.addEventListener('submit', handleLeadSubmit);

  // Theme toggle
  DOM.themeToggle?.addEventListener('click', toggleTheme);

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!getSavedPrefs().theme) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Floating share
  setupFloatingShare();

  // Replace placeholders with admin config values (before any dynamic rendering)
  replacePlaceholders();

  // Countdown
  startCountdown();

  // Initial GA pageview
  gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    language: state.language,
    country: state.country
  });

  console.log(`🏆 OndePassa Copa 2026 — ${state.language} / ${state.country}`);
}

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', init);
