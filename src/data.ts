import { Project, Experience, CoreValue } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'quantum_ui',
    title: 'QUANTUM_UI',
    category: 'ui-ux',
    tech: ['React', 'D3.js', 'WebAudio', 'Tailwind'],
    description: {
      EN: 'Cybernetic interface and telemetry visualization console built for high-throughput stream databases.',
      UZ: 'Yuqori tezlikdagi oqimli maʼlumotlar bazalari uchun yaratilgan kibernetik interfeys va telemetriya vizualizatsiya konsoli.'
    },
    details: {
      EN: [
        'Real-time rendering of up to 100,000 telemetry data points per second.',
        'Custom audio notification engine using the WebAudio synth API.',
        'Responsive layout adapted for field tablets and ultra-wide telemetry monitors.'
      ],
      UZ: [
        'Soniyaiga 100 000 gacha telemetriya maʼlumotlarini real vaqtda koʻrsatish.',
        'WebAudio sintizatori yordamida yaratilgan ovozli bildirishnoma tizimi.',
        'Planshetlar va oʻta keng telemetriya monitorlari uchun moslashuvchan dizayn.'
      ]
    },
    metrics: [
      { label: { EN: 'FPS Performance', UZ: 'FPS Tezligi' }, value: '60+' },
      { label: { EN: 'Latency Rate', UZ: 'Kechikish koʻrsatkichi' }, value: '< 5ms' }
    ],
    accentColor: 'text-[#00f3ff] border-[#00f3ff]/30 shadow-[#00f3ff]/10 hover:border-[#00f3ff]'
  },
  {
    id: 'cyber_node',
    title: 'CYBER_NODE',
    category: 'web-design',
    tech: ['NextJS', 'Three.js', 'GraphQL', 'Tailwind'],
    description: {
      EN: 'A highly functional decentralized cloud orchestrator panel with spatial nodes visualizers.',
      UZ: 'Fazoviy tugunlarni vizuallashtiruvchi yuqori funksional markazlashmagan bulut boshqaruv paneli.'
    },
    details: {
      EN: [
        '3D spatial rendering of live Kubernetes clusters and worker node resources.',
        'Low-overhead GraphQL subscriptions keeping node status in millisecond sync.',
        'Fully integrated offline resilience layer using service workers and IndexedDB.'
      ],
      UZ: [
        'Kubernetes klasterlari va ishchi tugunlarni 3D koʻrinishida vizualizatsiya qilish.',
        'Millisoniyali kechikishlar bilan tugunlar holatini GraphQL orqali moslashtirish.',
        'Service Worker va IndexedDB yordamida ishlash qobiliyatini toʻliq oflayn saqlash.'
      ]
    },
    metrics: [
      { label: { EN: 'Node Capacity', UZ: 'Tugun sigʻimi' }, value: '1.2M+' },
      { label: { EN: 'Uptime SLA', UZ: 'Tizim barqarorligi' }, value: '99.999%' }
    ],
    accentColor: 'text-[#39ff14] border-[#39ff14]/30 shadow-[#39ff14]/10 hover:border-[#39ff14]'
  },
  {
    id: 'void_system',
    title: 'VOID_SYSTEM',
    category: '3d-animation',
    tech: ['React-Three-Fiber', 'GLSL', 'Vite', 'GSAP'],
    description: {
      EN: 'Darkness-optimized spatial OS micro-environment with procedural starry sky and deep shadows.',
      UZ: 'Protsedurali yulduzli osmon va chuqur soyalarga ega qorongʻulikka moslashtirilgan interaktiv OS mikro-muhiti.'
    },
    details: {
      EN: [
        'Custom GLSL raymarching shaders rendering complex cosmic wormholes.',
        'Interactive gravitational field responsive to real-time drag forces and pointer clicks.',
        'Sophisticated state architecture for handling virtual desktop window overlapping.'
      ],
      UZ: [
        'Murakkab kosmik shaderlarni tasvirlash uchun GLSL algoritmlari.',
        'Foydalanuvchi sensorlari va sichqoncha harakatiga moslashuvchan gravitatsion maydon.',
        'Virtual ish stoli oynalarining bir-birini qoplashini boshqarish arxitekturasi.'
      ]
    },
    metrics: [
      { label: { EN: 'Shader Compute', UZ: 'Shader hisoblash' }, value: 'Low GPU' },
      { label: { EN: 'Animation Smoothness', UZ: 'Animatsiya ravonligi' }, value: 'Smooth' }
    ],
    accentColor: 'text-[#bd00ff] border-[#bd00ff]/30 shadow-[#bd00ff]/10 hover:border-[#bd00ff]'
  },
  {
    id: 'globl_id',
    title: 'GLOBL_ID',
    category: 'branding',
    tech: ['Figma', 'Illustrator', 'SVG Core', 'WebGL'],
    description: {
      EN: 'Visual branding system and secure cryptographic credential framework for multi-tenant identities.',
      UZ: 'Koʻp foydalanuvchili identifikator tizimlari uchun brending va xavfsiz kriptografik interfeys.'
    },
    details: {
      EN: [
        'Designed full cryptographic iconography, digital passports, and dynamic layout templates.',
        'Includes web-embedded generative SVG shields that mutate uniquely per digital signature.',
        'Brand-guidelines compiled in automatic responsive static-sites with export tokens.'
      ],
      UZ: [
        'Kriptografik belgilar, raqamli pasportlar va dinamik shablonlar tizimi.',
        'Har bir raqamli imzo uchun unikal oʻzgaradigan generativ SVG qalqonlari.',
        'Eksport tokenlariga ega avtomatik moslashuvchan brend-buklet platformasi.'
      ]
    },
    metrics: [
      { label: { EN: 'Variations Generated', UZ: 'Yaratilgan unikal turlar' }, value: 'Infinite' },
      { label: { EN: 'Standard Alignment', UZ: 'Xavfsizlik standarti' }, value: 'W3C DID' }
    ],
    accentColor: 'text-[#00f3ff] border-[#00f3ff]/30 shadow-[#00f3ff]/10 hover:border-[#00f3ff]'
  },
  {
    id: 'texnologik_qobiq',
    title: 'TEXNOLOGIK_QOBIQ',
    category: 'branding',
    tech: ['Vite', 'Three.JS', 'CAD Export', 'Framer Motion'],
    description: {
      EN: 'Cyber-organic visual wrap and digital-physical hardware identity interface designed for NEON_LABS core server units.',
      UZ: 'NEON_LABS server tugunlari uchun moʻljallangan kiber-organik raqamli-jismoniy uskunalar interfeysi va dizayni.'
    },
    details: {
      EN: [
        'Combines hard-surface modeling aesthetic with sleek responsive dark patterns.',
        'Dynamic heat map overlays rendering system temperature statistics in WebGL.',
        'Complete brand identity spanning interactive web landing page and physical unit skins.'
      ],
      UZ: [
        'Silliq va nafis qorongʻu qoplamalar bilan bardoshli modellashtirish estetikasi.',
        'Tizim haroratini koʻrsatuvchi WebGL-ga asoslangan dinamik issiqlik xaritasi.',
        'Veb sahifadan tortib to jismoniy server qoplamalarigacha boʻlgan toʻliq brending.'
      ]
    },
    metrics: [
      { label: { EN: 'Design Resolution', UZ: 'Dizayn aniqligi' }, value: 'Pixel-Perfect' },
      { label: { EN: 'Aesthetic Score', UZ: 'Estetika bahosi' }, value: 'Futurist' }
    ],
    accentColor: 'text-[#bd00ff] border-[#bd00ff]/30 shadow-[#bd00ff]/10 hover:border-[#bd00ff]'
  },
  {
    id: 'aether_os',
    title: 'AETHER_OS',
    category: 'web-design',
    tech: ['React', 'TypeScript', 'Tailwind', 'Canvas'],
    description: {
      EN: 'A cloud-based hyper-vibrant operating terminal interface with floating modules and matrix style effects.',
      UZ: 'Suzuvchi modullar va matritsa uslubidagi effektlarga ega boʻlgan bulutli yuqori dinamik operatsion terminal interfeysi.'
    },
    details: {
      EN: [
        'Beautiful falling code particles custom rendered directly on standard 2D canvas context.',
        'Draggable windows with absolute position memory and micro-bounce animations.',
        'Simulated UNIX terminal terminal emulator responsive to authentic standard bash command subset.'
      ],
      UZ: [
        'Standart 2D canvas muhitida chizilgan, chiroyli tushuvchi kod zarrachalari.',
        'Koordinata xotirasi va elastik animatsiyalarga ega suzib yuruvchi darchalar.',
        'Haqiqiy standart bash buyruqlariga javob beradigan UNIX terminal simulyatori.'
      ]
    },
    metrics: [
      { label: { EN: 'Terminal Emulator', UZ: 'Terminal simulyatori' }, value: '99% POSIX' },
      { label: { EN: 'Canvas Framerate', UZ: 'Canvas kadr chastotasi' }, value: '60 FPS' }
    ],
    accentColor: 'text-[#39ff14] border-[#39ff14]/30 shadow-[#39ff14]/10 hover:border-[#39ff14]'
  },
  {
    id: 'onyx_brand',
    title: 'ONYX_BRAND',
    category: 'branding',
    tech: ['Figma', 'SVG Web', 'Minimalism', 'Typography'],
    description: {
      EN: 'Extreme minimalist luxury identity showcasing striking geometric spacing, micro-serif elements, and deep charcoal voids.',
      UZ: 'Geometrik boʻshliqlar va silliq toʻq rangli elementlarni aks ettiruvchi ekstremal minimalist lyuks brending tizimi.'
    },
    details: {
      EN: [
        'Curated selection of high-contrast display typography evoking premium aesthetic weight.',
        'Symmetric grid patterns tailored strictly for premium digital publishing platforms.',
        'Fully procedural logo vectors optimized for microscopic resolution rendering.'
      ],
      UZ: [
        'Yuqori sifatli vizual ogʻirlik bagʻishlovchi yuqori kontrastli displey tipografiyasi.',
        'Raqamli nashriyot platformalari uchun maxsus moslangan simmetrik panjaralar.',
        'Mikroskopik oʻlchamlarda ham sifatini yoʻqotmaydigan protsedurali vektor logotiplari.'
      ]
    },
    metrics: [
      { label: { EN: 'Contrast Ratio', UZ: 'Kontrast nisbati' }, value: '21:1' },
      { label: { EN: 'Layout Grids', UZ: 'Grid chiziqlari' }, value: '12-Col Golden' }
    ],
    accentColor: 'text-[#00f3ff] border-[#00f3ff]/30 shadow-[#00f3ff]/10 hover:border-[#00f3ff]'
  },
  {
    id: 'velocity_dash',
    title: 'VELOCITY_DASH',
    category: 'ui-ux',
    tech: ['React', 'Recharts', 'Tailwind', 'WebWorker'],
    description: {
      EN: 'High speed tracking panel rendering streaming data charts and performance statistics with absolute zero delay.',
      UZ: 'Dinamik maʼlumotlar va ishlash tezligi grafiklarini mutlaqo kechikishlarsiz koʻrsatadigan boshqaruv paneli.'
    },
    details: {
      EN: [
        'Complex background computation moved entirely to WebWorkers to avoid UI thread blocks.',
        'Custom customizable charting components adapting to raw high-speed database streams.',
        'Responsive layout prioritizing extreme data density and easy scannability.'
      ],
      UZ: [
        'Interfeys barqarorligini taʼminlash maqsadida ogʻir hisob-kitoblarni WebWorkerga oʻtkazish.',
        'Tezkor oqimlarga oson moslashadigan kengaytiriladigan diagramma modullari.',
        'Maʼlumotlar zichligi va tezkor oʻqilishiga yoʻnaltirilgan ixcham dizayn.'
      ]
    },
    metrics: [
      { label: { EN: 'Update Velocity', UZ: 'Yangilanish tezligi' }, value: '50ms' },
      { label: { EN: 'Durable Sync', UZ: 'Barqaror sinxronizatsiya' }, value: 'Active' }
    ],
    accentColor: 'text-[#39ff14] border-[#39ff14]/30 shadow-[#39ff14]/10 hover:border-[#39ff14]'
  },
  {
    id: 'kinetic_flow',
    title: 'KINETIC_FLOW',
    category: '3d-animation',
    tech: ['Canvas 2D', 'Verlet Physics', 'React Hooks', 'Math'],
    description: {
      EN: 'Kinetic vector string simulation which reacts gracefully to pointer cursor hover and drag and drop paths.',
      UZ: 'Sichqoncha koʻrsatkichi yoki tortish/tashlash harakatlariga mayin moslashadigan kinetik vektor simulyatsiyasi.'
    },
    details: {
      EN: [
        'Employs Verlet integration to compute multi-joint chain string dynamics at 60 FPS.',
        'Custom interactive canvas component matching device pixel density (High DPI).',
        'Customizable physics constants: gravity, friction, chain tension, and wind flow.'
      ],
      UZ: [
        'Verlet integratsiyasi yordamida koʻp boʻgʻimli zanjirlar harakatini 60 FPSda hisoblash.',
        'Ekran zichligiga (High DPI) moslashuvchan interaktiv canvas moduli.',
        'Gravitatsiya, ishqalanish, zanjir tarangligi kabi oʻzgaruvchi fizik doimiylar.'
      ]
    },
    metrics: [
      { label: { EN: 'Physics Solver', UZ: 'Fizika algoritmi' }, value: 'Verlet' },
      { label: { EN: 'Resolution Scaling', UZ: 'Ekran moslashuvi' }, value: 'Retina 2x' }
    ],
    accentColor: 'text-[#bd00ff] border-[#bd00ff]/30 shadow-[#bd00ff]/10 hover:border-[#bd00ff]'
  },
  {
    id: 'vault_core',
    title: 'VAULT_CORE',
    category: 'web-design',
    tech: ['React', 'WebCrypto', 'LocalForage', 'Tailwind'],
    description: {
      EN: 'Secure browser-stored digital safe with local high-grade AES-GCM credential encryption files.',
      UZ: 'AES-GCM shifrlash tizimiga ega, xavfsiz brauzerda saqlanuvchi shaxsiy raqamli kalitlar ombori.'
    },
    details: {
      EN: [
        'PBKDF2-based password hashing and key generation executed fully client-side.',
        'Secure multi-account vaults with individual key derivation security structures.',
        'Drag-and-drop file vault encryption capability with lightning-fast local processing.'
      ],
      UZ: [
        'PBKDF2-ga asoslangan parolni xeshlash va kalitlarni mijoz tomonida yaratish.',
        'Har bir hisob uchun alohida xavfsiz shifrlash va kalitlarni saqlash tizimi.',
        'Fayllarni shifrlash uchun faylni sudrab tashlash (drag-n-drop) texnologiyasi.'
      ]
    },
    metrics: [
      { label: { EN: 'Encryption Algo', UZ: 'Shifrlash algoritmi' }, value: 'AES-GCM' },
      { label: { EN: 'Decryption Speed', UZ: 'Shifrni ochish tezligi' }, value: 'Instant' }
    ],
    accentColor: 'text-[#00f3ff] border-[#00f3ff]/30 shadow-[#00f3ff]/10 hover:border-[#00f3ff]'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    period: '2021 - PRESENT',
    role: { EN: 'Chief Architect & Engineer', UZ: 'Bosh muhandis va arxitektor' },
    company: 'NEON_LABS',
    description: {
      EN: 'Leading digital-physical systems engineering, high-throughput web architectures, telemetry interfaces, and brand engineering.',
      UZ: 'Raqamli-jismoniy tizimlar muhandisligi, yuqori tezlikdagi veb-arxitektura, telemetriya interfeyslari va brending loyihalariga rahbarlik.'
    }
  },
  {
    period: '2019 - 2021',
    role: { EN: 'Senior Frontend Engineer', UZ: 'Katta front-end muhandisi' },
    company: 'ORBIT_SYS',
    description: {
      EN: 'Engineered high-density real-time monitoring consoles, complex SVG dashboards, and advanced 3D interactive assets using WebGL.',
      UZ: 'WebGL yordamida yuqori zichlikdagi monitoring panellari, murakkab interaktiv SVG tizimlar va 3D modellarni dasturlash.'
    }
  },
  {
    period: '2017 - 2019',
    role: { EN: 'Creative Technologist', UZ: 'Ijodiy texnolog' },
    company: 'AURA_DESIGN',
    description: {
      EN: 'Bridged creative direction and functional code to craft immersive digital platforms, vector identities, and animated web experiences.',
      UZ: 'Immersiv raqamli platformalar, unikal vektor dizaynlar va animatsion veb interfeyslarni yaratishda dizayn va kod hamkorligini barpo etish.'
    }
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: { EN: 'UNCOMPROMISING PRECISION', UZ: 'MUROSASIZ ANIKLIK' },
    desc: {
      EN: 'Perfect pixel alignments, strict mathematical animations, and clean, type-safe robust production architectures.',
      UZ: 'Mukammal piksellar mosligi, qatʼiy matematik animatsiyalar va toza, xavfsiz dasturiy arxitektura.'
    }
  },
  {
    title: { EN: 'HYPER-EFFICIENCY', UZ: 'GIPER-SAMARADORLIK' },
    desc: {
      EN: 'Zero bloated files, optimal runtime execution speeds, lightweight assets, and frictionless interfaces that load in milliseconds.',
      UZ: 'Keraksiz kutubxonalardan xoli kod, millisoniyalarda yuklanadigan yengil interfeyslar va maksimal tezlik.'
    }
  },
  {
    title: { EN: 'FUTURISTIC VISION', UZ: 'FUTURISTIK QARASH' },
    desc: {
      EN: 'Pioneering cutting-edge UI paradigms, generative art pieces, and cybernetic aesthetics that project tomorrow’s tech today.',
      UZ: 'Bugungi texnologiyalar orqali ertangi kun kibernetik estetikasi va yangi UI paradigmalari meʼmori boʻlish.'
    }
  },
  {
    title: { EN: 'DEEP CONNECTEDNESS', UZ: 'CHUQUR BOG\'LIQLIK' },
    desc: {
      EN: 'Building intimate digital channels, transparent communication flows, and collaborative digital environments that last.',
      UZ: 'Foydalanuvchilar va hamkorlar bilan kuchli hamfikrlik, shaffof muloqot va mustahkam virtual aloqa tizimi.'
    }
  }
];

export const DICTIONARY = {
  EN: {
    nav_home: 'HOME',
    nav_works: 'LOYIHALAR', // Note: or SELECTED WORKS
    nav_works_long: 'SELECTED WORKS',
    nav_about: 'ABOUT',
    nav_contact: 'CONTACT',
    nav_collab: 'COLLABORATE',
    
    hero_title: 'Pushing the boundaries of digital engineering',
    hero_subtitle: 'At the nexus of engineering precision and digital aesthetics, we design and program elite-tier web applications, cybernetic interfaces, and technical brand frameworks that redefine functional beauty.',
    hero_cta: 'ESTABLISH CONNECTIVITY',
    hero_stats_projects: 'STRUCTURED RELEASES',
    hero_stats_uptime: 'SYSTEM OPERABILITY',
    
    tech_stack_title: 'TECHNOLOGICAL ENVELOPE',
    tech_stack_desc: 'Operating at high terminal velocity, we synthesize frontend systems, responsive spatial user experiences, solid backend infrastructure, and computational web graphics.',
    tech_front: 'FRONT-END',
    tech_ux: 'USER ARCHITECTURE',
    tech_back: 'BACK-END DECOUPLED',
    tech_gen: 'GENERATIVE SYSTEMS',
    
    footer_ready_title: 'READY TO SYSTEMATIZE?',
    footer_ready_cta: 'INITIATE CONTRACT',
    footer_ready_resume: 'VIEW SECURE CV',
    
    filter_all: 'ALL WORK',
    filter_web: 'WEB DESIGN',
    filter_brand: 'BRANDING',
    filter_ui: 'UI/UX',
    filter_3d: '3D ANIMATION',
    
    project_view_specs: 'EXAMINE ARCHITECTURAL SPECIFICATIONS',
    project_close_specs: 'COLLAPSE SPECS',
    project_launch_live: 'ACTIVATE DIGITAL PREVIEW',
    project_live_demo: 'LIVE INTERACTIVE COMPONENT',
    project_technologies: 'CORE MODULES',
    
    about_personality_title: 'AESTHETIC CHARACTER',
    about_personality_text: 'We are digital architects. We do not build standard software; we construct clean, lightning-fast digital structures. Operating at the frontier of layout mathematics and high-fidelity systems code, we create interactive solutions that translate complex technical data into clean functional art.',
    about_path_title: 'CHRONOLOGICAL LOG',
    about_values_title: 'GOVERNING ARCHETYPES',
    
    contact_title: "Let's collaborate.",
    contact_subtitle: 'Initiate a secure cryptographic communication socket below. We typically establish responses within 4 hours during active UTC+5 terminal hours.',
    contact_form_name: 'ENTITY IDENTIFIER (NAME)',
    contact_form_name_placeholder: 'Input your name...',
    contact_form_email: 'ENCRYPTED DESTINATION (EMAIL)',
    contact_form_email_placeholder: 'Input your security verified email...',
    contact_form_subject: 'TRANSMISSION PROTOCOL (SUBJECT)',
    contact_form_subject_placeholder: 'Select a project category...',
    contact_form_msg: 'PAYLOAD BODY (MESSAGE)',
    contact_form_msg_placeholder: 'Describe the digital architecture you wish to manifest with us...',
    contact_form_submit: 'BROADCAST COMMAND (SEND MESSAGE)',
    contact_form_sending: 'ENCRYPTING BROADCAST...',
    contact_form_success: 'TRANSMISSION RECEIVED SUCCESSFULLY. COMMENCING INTEL DECODING.',
    contact_form_error: 'TRANSMISSION FAILED. CORE NETWORK ANOMALY. CHECK PARITY.',
    
    contact_detail_loc: 'PHYSICAL COORDINATES',
    contact_detail_loc_val: 'Tashkent, Uzbekistan (Global Interface)',
    contact_detail_comm: 'COMMUNICATION SOCKET',
    contact_detail_hours: 'OPERATING TERM',
    contact_detail_hours_val: '09:00 - 18:00 UTC+5 (Active Status)',
    
    copied_indicator: 'COPIED TO SYSTEM CLIPBOARD',
    back_to_top: 'RESET GRID FOCUS'
  },
  UZ: {
    nav_home: 'BOSH SAHIFA',
    nav_works: 'LOYIHALAR',
    nav_works_long: 'TANLANGAN ISHLAR',
    nav_about: 'MEN HAQIMDA',
    nav_contact: 'ALOQA',
    nav_collab: 'HAMKORLIK',
    
    hero_title: 'Muhandislik estetikasi va kelajakka yoʻnaltirilgan raqamli arxitektura',
    hero_subtitle: 'Muhandislik aniqligi va raqamli estetika chorrahasida biz funktsional goʻzallikni qayta shakllantiruvchi elita toifasidagi veb-ilovalarni, kibernetik interfeyslarni va texnik brend tizimlarini loyihalashtiramiz va dasturlaymiz.',
    hero_cta: 'ALOQA OʻRNATISH',
    hero_stats_projects: 'TIZIMLASHTIRILGAN ISHLAR',
    hero_stats_uptime: 'TIZIM BARQARORLIGI',
    
    tech_stack_title: 'TEXNOLOGIK QOBIQ',
    tech_stack_desc: 'Yuqori tezlik va barqarorlik qobiqida biz front-end ekotizimlarini, moslashuvchan fazoviy foydalanuvchi interfeyslarini, ishonchli backend infratuzilmasini va hisoblash veb-grafikasini sintez qilamiz.',
    tech_front: 'FRONT-END',
    tech_ux: 'FOYDALANUVCHI ARXITEKTURASI',
    tech_back: 'DECOUPLED BACK-END',
    tech_gen: 'GENERATIV TIZIMLAR',
    
    footer_ready_title: 'TIZIMLASHTIRISHGA TAYYORMISIZ?',
    footer_ready_cta: 'SHARTNOMA BOSHLASH',
    footer_ready_resume: 'XAVFSIZ REZYUMENI KOʻRISH',
    
    filter_all: 'BARCHA LOYIHALAR',
    filter_web: 'VEB-DIZAYN',
    filter_brand: 'BRENDING',
    filter_ui: 'UI/UX',
    filter_3d: '3D ANIMATSIYA',
    
    project_view_specs: 'ARXITEKTURA SPETSIFIKATSIYALARINI TEKSHIRISH',
    project_close_specs: 'SPETSIFIKATSIYALARNI YOPISH',
    project_launch_live: 'RAQAMLI PREVYUNI FAOLLASHTIRISH',
    project_live_demo: 'LIVE INTERAKTIV LOYIHA',
    project_technologies: 'ASOSIY MODULLAR',
    
    about_personality_title: 'ESTETIK SHAXSIYAT',
    about_personality_text: 'Biz raqamli tajribalar meʼmorimiz. Biz shunchaki oddiy dasturlar yaratmaymiz; biz mukammal, chaqmoqdek tez ishlovchi raqamli inshootlarni bunyod etamiz. Matematik tartiblar va yuqori darajali tizimli kodlardan foydalanib, murakkab texnik maʼlumotlarni nafis sanʼat namunasiga aylantiramiz.',
    about_path_title: 'XRONOLOGIK JURNAL (MENING YOʻLIM)',
    about_values_title: 'G_GOVERNING PRINSIPLAR',
    
    contact_title: 'Keling, hamkorlik qilamiz.',
    contact_subtitle: 'Quyidagi xavfsiz kriptografik aloqa kanali orqali xabar yoʻllang. Biz UTC+5 faol ish vaqtida odatda 4 soat ichida javob beramiz.',
    contact_form_name: 'SUBYEKT NOMI (ISM-SHARIF)',
    contact_form_name_placeholder: 'Ism-sharifingizni kiriting...',
    contact_form_email: 'SHIFRLANGAN MANZIL (ELEKTRON POCHTA)',
    contact_form_email_placeholder: 'Elektron pochtangizni kiriting...',
    contact_form_subject: 'MAVZU BAYONNOMASI (LOYIHA TURINI SECHING)',
    contact_form_subject_placeholder: 'Loyiha yoʻnalishini tanlang...',
    contact_form_msg: 'MAZMUN PAYLOADI (XABAR)',
    contact_form_msg_placeholder: 'Biz bilan birga qanday raqamli sanʼat namunasini yaratmoqchi ekanligingizni tasvirlang...',
    contact_form_submit: 'UZATISH BUYRUGʻI (XABAR YUBORISH)',
    contact_form_sending: 'XABAR SHIFRLANMOQDA...',
    contact_form_success: 'XABAR FAOLLASHTIRILDI VA ETKAZILDI. TEZKOR TAHLIL BOSHLANDI.',
    contact_form_error: 'XABAR YUBORILMADI. TARMOQ SINXRONLIGI YOʻQOLDI. PARITETNI TEKSHIRING.',
    
    contact_detail_loc: 'GEOGRAFIK KOORDINATALAR',
    contact_detail_loc_val: 'Toshkent, Oʻzbekiston (Masofaviy global tarmoq)',
    contact_detail_comm: 'ALOQA SOKETI',
    contact_detail_hours: 'ISH VAQTI REJIMI',
    contact_detail_hours_val: '09:00 - 18:00 UTC+5 (Faol maqom)',
    
    copied_indicator: 'TIZIM BUFERIGA NUSHANLANDI',
    back_to_top: 'PANJARA MARKAZIGA QAYTISH'
  }
};
