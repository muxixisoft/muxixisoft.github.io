const SUPPORTED_LANGS = ['en', 'de', 'ja'];
const STORAGE_KEY = 'muxixi_lang';

const SCREEN_SLUGS = [
  'screen-01-voice-shutter',
  'screen-02-qr-viewfinder',
  'screen-03-retro-timestamps',
  'screen-04-burst-mode',
  'screen-05-time-slice',
  'screen-06-milestone-tags',
];

const TRANSLATIONS = {
  en: {
    title: 'TimerCamera+ & Indie Apps | Muxixi Studios',
    metaDesc:
      'Muxixi Studios builds TimerCamera+ — hands-free self-timer photography with clap & voice shutter, free QR browser remote viewfinder (no 2nd app), 3/5/9/∞ burst, and retro film date stamps for iOS & Android.',
    iosUrl: 'https://apps.apple.com/app/apple-store/id6768857092?pt=128292627&ct=website_home&mt=8',
    video: {
      poster: 'assets/img/video-poster.jpg',
      webm: 'assets/video/timercamera-promo-en.webm',
      mp4: 'assets/video/timercamera-promo-en.mp4',
      vtt: 'assets/video/timercamera-promo-en.vtt',
      vttLang: 'en',
      vttLabel: 'English',
      autoCaptions: false,
    },
    imgPrefix: 'assets/img/',
    text: {
      skip_link: 'Skip to main content',
      brand_sub: 'Indie Mobile Tools',
      nav_features: 'Features',
      nav_showcase: 'Showcase',
      nav_faq: 'FAQ',
      nav_apps: 'More Apps',
      nav_privacy: 'Privacy',
      header_cta: 'Get TimerCamera+',
      cta_ios: 'Download on App Store',
      cta_android: 'Get it on Google Play',
      video_caption: '18-second hands-free demo · Turn sound on for clap & shutter cues',
      features_kicker: 'WHY TIMERCAMERA+',
      features_h2: 'Built for solo travelers, couples & group shots',
      features_sub:
        'Zero social-feed bloat. Every detail is engineered to help you frame sharper rear-camera photos on your own terms.',
      feat1_badge: 'ACOUSTIC TRIGGER',
      feat1_title: 'Clap Twice or Say "Hey!"',
      feat1_desc:
        'Start a 3s–60s countdown from up to 3 meters away with 100% offline audio recognition, plus a 500ms beep cue right before shutter fire so you nail your pose blind.',
      feat2_badge: 'NEW IN v1.11 · 100% FREE',
      feat2_title: 'QR Browser Wireless Viewfinder',
      feat3_badge: 'HIGH-SPEED BURST',
      feat3_title: '3 / 5 / 9 / ∞ Burst & Smart Picker',
      feat3_desc:
        'Automatically capture a rapid sequence after the timer ends, review every frame in one sheet, keep the sharpest smile, and batch-delete the rest in a single tap.',
      feat4_badge: 'FILM AESTHETIC',
      feat4_title: 'Retro Date Stamps & Live GPS',
      feat4_desc:
        'Imprint authentic 90s film date stamps (Retro 90s, Kodak Gold, Cyber Neon, Tokyo 1995), city weather, milestone day counters, and 16 GPU-animated stickers.',
      feat5_badge: 'CREATIVE COLLAGE',
      feat5_title: 'Time Slice Before & After',
      feat5_desc:
        'Blend two moments from different times of day into a clean split or mirror composition — ideal for travel sunsets, workouts, and daily progress diaries.',
      feat6_badge: 'ULTRA-LIGHT & PRIVATE',
      feat6_title: 'Full-Sensor Clarity, Zero Cloud',
      feat6_desc:
        'Under 10 MB with native iPad & 2K Ultra HD export. Every clap check, burst frame, and QR live preview stays strictly on your device or local network.',
      showcase_kicker: 'INSIDE THE CAMERA',
      showcase_h2: 'See every shot before you download',
      showcase_sub: 'Swipe across the latest v1.11.1 screens — tap any poster to inspect full size.',
      faq_kicker: 'FREQUENTLY ASKED',
      faq_h2: 'Quick answers before you shoot',
      faq1_q: 'Does the second phone need to install an app for the QR viewfinder?',
      faq1_a:
        'No. Just scan the QR code displayed on your shooting phone using any iPhone or Android camera. It opens a lightweight live viewfinder directly inside Safari or Chrome over your local Wi-Fi or personal hotspot — completely free, with zero app install on phone #2.',
      faq2_q: 'Are my voice triggers or photos ever uploaded to a server?',
      faq2_a:
        'Never. Both the clap / "Hey!" acoustic detector and photo/video processing run 100% locally on your device. No account sign-up is required and your camera roll never leaves your phone.',
      faq3_q: 'Is TimerCamera+ a monthly subscription?',
      faq3_a:
        'No subscription traps. Core self-timer shooting, free QR remote viewfinder, standard bursts, and classic date stamps are free to use, with an optional one-time Lifetime Pro upgrade that unlocks all master film stamps, unlimited voice/burst modes, and 2K Ultra HD forever.',
      faq4_q: 'Which devices are supported?',
      faq4_a:
        'TimerCamera+ is available worldwide for both iPhone / iPad on the Apple App Store and Android devices on Google Play, keeping feature parity across platforms.',
      apps_kicker: 'STUDIO PORTFOLIO',
      apps_h2: 'More from Muxixi Studios',
      apps_sub:
        'Purposeful utilities and tactile indie games crafted by a solo developer with respect for your time and privacy.',
      app1_pill: 'PHYSICS PUZZLER',
      app1_tagline: 'Tactile Physics-Based Destruction',
      app1_desc:
        'A meditative yet challenging physics puzzler built around realistic shatter mechanics, crisp audio-visual feedback, and chained explosive crystal combos.',
      app1_status: 'iOS · Coming soon',
      app2_pill: 'BRAIN TRAINER',
      app2_tagline: 'Progressive Mental Arithmetic Trainer',
      app2_desc:
        'Sharpen your cognitive agility through clean, high-speed calculation drills designed for fast daily mental maintenance on both iOS and Android.',
      app3_pill: 'IN DEVELOPMENT · UNITY',
      app3_tagline: 'Chrono-Historical Narrative Adventure',
      app3_desc:
        "Explore Shanghai's living transformation across lost eras — from misty Shikumen alleyways to bustling riverside docks — meeting eccentric characters and uncovering hidden stories.",
      app3_status: 'iOS & Android · In Active Development',
      for_crystal_smash: 'for Crystal Smash',
      for_qmm: 'for Quick Math Master',
      cta_band_h2: 'Ready for sharper solo & group shots?',
      cta_band_sub: 'Try TimerCamera+ free today on iOS or Android — zero account required.',
      cta_band_ios: 'Download TimerCamera+ for iOS',
      cta_band_android: 'Download TimerCamera+ for Android',
      privacy_kicker: 'PRIVACY & LEGAL',
      privacy_h2: 'Privacy by design, per product',
      privacy_sub:
        'Muxixi Studios does not operate user-data tracking servers. Each product publishes a dedicated, transparent policy and clear data-deletion guidance.',
      legal_tc_privacy: 'TimerCamera+ Privacy Policy',
      legal_eula: 'Apple Standard EULA',
      legal_tc_deletion: 'TimerCamera+ Data Deletion',
      legal_cs_privacy: 'Crystal Smash Privacy Policy',
      legal_qmm_privacy: 'Quick Math Master Privacy Policy',
      legal_qmm_deletion: 'Quick Math Master Data Deletion',
      footer_copy: '© 2026 Muxixi Studios. Crafted with independence and care.',
    },
    html: {
      hero_h1: 'Hands-free selfies with your <span class="accent-text">rear camera.</span>',
      hero_lead:
        'Stop sprinting to beat the 10-second timer — or handing your phone to strangers. Clap twice or say <strong>"Hey!"</strong> offline, turn <em>any</em> second phone\'s browser into a free live QR viewfinder, and burst-shoot until you nail the smile.',
      feat2_desc:
        'Scan a local Wi-Fi QR code on <em>any</em> friend\'s iPhone or Android to preview your rear camera live in Safari or Chrome — adjust 0.5x/1x/2x zoom, timer, and shoot with zero app install on phone #2.',
      footer_note:
        'Independent mobile studio crafting lightweight camera tools &amp; tactile games. Feedback or press inquiries: <a href="mailto:muxixisoft@gmail.com">muxixisoft@gmail.com</a>',
    },
    aria: {
      brand_home_aria: 'Muxixi Studios home',
      nav_primary_aria: 'Primary',
      nav_social_aria: 'Social',
      lang_switch_aria: 'Language',
      lightbox_close_aria: 'Close screenshot preview',
    },
    screens: [
      {
        caption: 'Hands-Free Selfies: Clap twice or say Hey offline with 5s, 15s, 30s, or 60s countdown.',
        aria: 'Inspect full screenshot: Hands-Free Selfies with Voice and Clap Shutter',
        alt: 'TimerCamera+ hands-free selfies screen showing 3-second countdown and offline clap or voice shutter prompt',
      },
      {
        caption: 'Free QR Wireless Viewfinder: Scan on any second phone to preview the rear camera live in Safari or Chrome and shoot remotely.',
        aria: 'Inspect full screenshot: Free QR Browser Remote Viewfinder',
        alt: 'TimerCamera+ QR remote viewfinder screen showing live rear-camera preview synced to a second phone browser with zoom and shutter controls',
      },
      {
        caption: 'Retro Date Stamps & Live Location Tags: Classic 90s film date, Tokyo 1995, Kodak Gold, and live weather badges.',
        aria: 'Inspect full screenshot: Retro Film Date Stamps and Live Location Tags',
        alt: 'TimerCamera+ retro film timestamp overlay displaying Tokyo 1995 glowing orange date stamp and Yoyogi Park location badge',
      },
      {
        caption: 'Timer Burst Mode: Shoot 3, 5, 9, or infinite frames automatically and pick the best smile in one tap.',
        aria: 'Inspect full screenshot: High-Speed Timer Burst and Best Smile Picker',
        alt: 'TimerCamera+ high-speed burst picker highlighting the best smile frame among sequential cafe group shots',
      },
      {
        caption: 'Time Slice Collage: Blend morning and evening shots into a single split or mirror layout in one tap.',
        aria: 'Inspect full screenshot: Time Slice Before and After Split Collage',
        alt: 'TimerCamera+ Time Slice editor combining a morning and evening golden-hour cafe photo into a split collage',
      },
      {
        caption: 'Chronicle Growth & Milestone Tags: Track baby days, fitness streaks, or travel journals with custom date tags.',
        aria: 'Inspect full screenshot: Milestone Day Counter and Custom Photo Tags',
        alt: 'TimerCamera+ milestone tag stamp displaying Baby Day 415 with custom hashtag badges on a sunset outdoor portrait',
      },
    ],
  },

  de: {
    title: 'TimerCamera+ & Indie-Apps | Muxixi Studios',
    metaDesc:
      'Muxixi Studios entwickelt TimerCamera+ — freihändiger Selbstauslöser mit Klatsch- & Sprachsteuerung, kostenlosem QR-Browser-Sucher ohne zweite App, 3/5/9/∞ Serienbild und Retro-Datumsstempeln für iOS & Android.',
    iosUrl: 'https://apps.apple.com/app/apple-store/id6768857092?pt=128292627&ct=website_home_de&mt=8',
    video: {
      poster: 'assets/img/video-poster-de.jpg',
      webm: 'assets/video/timercamera-promo-de.webm',
      mp4: 'assets/video/timercamera-promo-de.mp4',
      vtt: 'assets/video/timercamera-promo-de.vtt',
      vttLang: 'de',
      vttLabel: 'Deutsch',
      autoCaptions: false,
    },
    imgPrefix: 'assets/img/de/',
    text: {
      skip_link: 'Zum Hauptinhalt springen',
      brand_sub: 'Indie-App-Studio',
      nav_features: 'Funktionen',
      nav_showcase: 'Vorschau',
      nav_faq: 'FAQ',
      nav_apps: 'Mehr Apps',
      nav_privacy: 'Datenschutz',
      header_cta: 'TimerCamera+ laden',
      cta_ios: 'Im App Store laden',
      cta_android: 'Bei Google Play laden',
      video_caption: '18-Sekunden-Demo · Ton einschalten für Klatsch- & Auslöser-Signale',
      features_kicker: 'WARUM TIMERCAMERA+',
      features_h2: 'Gemacht für Alleinreisende, Paare & Gruppenfotos',
      features_sub:
        'Kein Social-Media-Ballast. Jedes Detail hilft dir, gestochen scharfe Rückkamera-Fotos ganz ohne fremde Hilfe zu machen.',
      feat1_badge: 'AKUSTISCHER AUSLÖSER',
      feat1_title: 'Zweimal klatschen oder „Hey!“ sagen',
      feat1_desc:
        'Starte einen 3–60 s Countdown aus bis zu 3 Metern Entfernung — 100 % offline mit 500-ms-Signalton kurz vor dem Auslösen für perfektes Timing.',
      feat2_badge: 'NEU IN v1.11 · 100 % KOSTENLOS',
      feat2_title: 'QR-Live-Sucher im Browser',
      feat3_badge: 'HIGH-SPEED-SERIENBILD',
      feat3_title: '3 / 5 / 9 / ∞ Serienbild & Best-Smile-Auswahl',
      feat3_desc:
        'Nimmt nach dem Countdown automatisch eine schnelle Bildfolge auf — vergleiche alle Frames sofort, behalte das beste Lächeln und lösche den Rest mit einem Tipp.',
      feat4_badge: 'FILM-ÄSTHETIK',
      feat4_title: 'Retro-Datumsstempel & Live-Ort',
      feat4_desc:
        'Authentische 90er-Filmstempel (Retro 90s, Kodak Gold, Cyber Neon, Tokyo 1995), Wetter- & Orts-Tags, Meilenstein-Zähler sowie 16 animierte GPU-Sticker.',
      feat5_badge: 'KREATIVE COLLAGE',
      feat5_title: 'Time-Slice Vorher & Nachher',
      feat5_desc:
        'Verbinde zwei Momente aus verschiedenen Tageszeiten in einem sauberen Split- oder Spiegel-Layout — ideal für Reisen, Workouts und Tagebücher.',
      feat6_badge: 'ULTRALEICHT & PRIVAT',
      feat6_title: 'Volle Sensor-Schärfe, null Cloud',
      feat6_desc:
        'Unter 10 MB mit nativer iPad-Unterstützung & 2K Ultra-HD-Export. Spracherkennung, Serienbilder und QR-Vorschau bleiben lokal auf deinem Gerät oder im WLAN.',
      showcase_kicker: 'EINBLICK IN DIE KAMERA',
      showcase_h2: 'Alle Funktionen vor dem Download ansehen',
      showcase_sub: 'Wische durch die aktuellen v1.11.1 Screens — tippe für die Vollbildansicht.',
      faq_kicker: 'HÄUFIGE FRAGEN',
      faq_h2: 'Kurze Antworten vor dem ersten Foto',
      faq1_q: 'Muss auf dem zweiten Handy eine App für den QR-Sucher installiert werden?',
      faq1_a:
        'Nein. Scanne einfach den QR-Code auf dem Aufnahme-Handy mit einem beliebigen iPhone oder Android-Smartphone. Die Live-Vorschau öffnet sich kostenlos direkt in Safari oder Chrome über lokales WLAN oder persönlichen Hotspot — ohne zweite App.',
      faq2_q: 'Werden Sprachaufnahmen oder Fotos jemals auf einen Server hochgeladen?',
      faq2_a:
        'Niemals. Sowohl die Klatsch-/„Hey!“-Erkennung als auch die Foto- und Videoverarbeitung laufen zu 100 % lokal auf deinem Gerät. Kein Konto erforderlich, kein Cloud-Upload.',
      faq3_q: 'Ist TimerCamera+ ein monatliches Abo?',
      faq3_a:
        'Keine Abo-Falle. Selbstauslöser, kostenloser QR-Fernauslöser, Standard-Serienbilder und klassische Datumsstempel sind frei nutzbar; optional gibt es ein einmaliges Lifetime-Pro-Upgrade ohne wiederkehrende Kosten.',
      faq4_q: 'Welche Geräte werden unterstützt?',
      faq4_a:
        'TimerCamera+ ist weltweit für iPhone & iPad im Apple App Store sowie für Android-Geräte bei Google Play verfügbar.',
      apps_kicker: 'STUDIO-PORTFOLIO',
      apps_h2: 'Mehr von Muxixi Studios',
      apps_sub:
        'Durchdachte Werkzeuge und Indie-Spiele von einem unabhängigen Entwickler — leichtgewichtig und datenschutzfreundlich.',
      app1_pill: 'PHYSIK-PUZZLE',
      app1_tagline: 'Taktile Kristall-Physik',
      app1_desc:
        'Ein meditatives, aber forderndes Physik-Puzzle rund um realistische Splittereffekte, klares Audio-Feedback und explosive Kettenreaktionen.',
      app1_status: 'iOS · Demnächst',
      app2_pill: 'GEHIRNTRAINING',
      app2_tagline: 'Kopfrechnen mit System',
      app2_desc:
        'Trainiere deine geistige Schnelligkeit mit klaren, kompakten Rechen-Übungen für den Alltag auf iOS und Android.',
      app3_pill: 'IN ENTWICKLUNG · UNITY',
      app3_tagline: 'Zeitreise-Abenteuer in Shanghai',
      app3_desc:
        'Erlebe Shanghais Wandel über vergangene Epochen — von nebligen Shikumen-Gassen bis zu historischen Hafenpiers voller Geschichten.',
      app3_status: 'iOS & Android · In aktiver Entwicklung',
      for_crystal_smash: 'für Crystal Smash',
      for_qmm: 'für Quick Math Master',
      cta_band_h2: 'Bereit für schärfere Solo- & Gruppenfotos?',
      cta_band_sub: 'Teste TimerCamera+ heute kostenlos auf iOS oder Android — ohne Registrierung.',
      cta_band_ios: 'TimerCamera+ für iOS laden',
      cta_band_android: 'TimerCamera+ für Android laden',
      privacy_kicker: 'DATENSCHUTZ & RECHTLICHES',
      privacy_h2: 'Datenschutz ab Werk, je Produkt',
      privacy_sub:
        'Muxixi Studios betreibt keine Tracking-Server für Nutzerdaten. Jede App besitzt eine eigene, transparente Datenschutzerklärung.',
      legal_tc_privacy: 'TimerCamera+ Datenschutz',
      legal_eula: 'Apple Standard-EULA',
      legal_tc_deletion: 'TimerCamera+ Datenlöschung',
      legal_cs_privacy: 'Crystal Smash Datenschutz',
      legal_qmm_privacy: 'Quick Math Master Datenschutz',
      legal_qmm_deletion: 'Quick Math Master Datenlöschung',
      footer_copy: '© 2026 Muxixi Studios. Unabhängig und mit Sorgfalt entwickelt.',
    },
    html: {
      hero_h1: 'Freihändige Selfies mit deiner <span class="accent-text">Rückkamera.</span>',
      hero_lead:
        'Schluss mit dem Sprint gegen den 10-Sekunden-Timer – und fremden Händen am Handy. Klatsche zweimal oder sag <strong>„Hey!“</strong> komplett offline, verwandle den Browser <em>jedes</em> Zweithandys kostenlos in einen QR-Live-Sucher und wähle aus Serienbildern das beste Lächeln.',
      feat2_desc:
        'Scanne einen lokalen WLAN-QR-Code mit <em>jedem</em> iPhone oder Android-Handy, um deine Rückkamera live in Safari oder Chrome zu sehen — 0.5x/1x/2x Zoom und Fernauslöser ganz ohne zweite App.',
      footer_note:
        'Unabhängiges Mobile-Studio für schlanke Kamera-Tools &amp; Indie-Games. Feedback oder Presseanfragen: <a href="mailto:muxixisoft@gmail.com">muxixisoft@gmail.com</a>',
    },
    aria: {
      brand_home_aria: 'Muxixi Studios Startseite',
      nav_primary_aria: 'Hauptnavigation',
      nav_social_aria: 'Soziale Kanäle',
      lang_switch_aria: 'Sprache',
      lightbox_close_aria: 'Vorschau schließen',
    },
    screens: [
      {
        caption: 'Freihändige Selfies: Zweimal klatschen oder „Hey!“ offline mit 5s, 15s, 30s oder 60s Timer.',
        aria: 'Vollbild-Screenshot ansehen: Freihändige Selfies mit Sprachauslöser',
        alt: 'TimerCamera+ Bildschirm für freihändige Selfies mit 3-Sekunden-Countdown und Klatsch- oder Sprachauslöser',
      },
      {
        caption: 'Kostenloser QR-Live-Sucher: Auf jedem Zweithandy scannen, Rückkamera live im Browser sehen und aus der Ferne auslösen.',
        aria: 'Vollbild-Screenshot ansehen: Kostenloser QR-Browser-Sucher',
        alt: 'TimerCamera+ QR-Fernauslöser mit Live-Vorschau der Rückkamera im Browser eines zweiten Handys',
      },
      {
        caption: 'Retro-Datumsstempel & Live-Ort: Klassische 90er-Filmstempel, Tokyo 1995, Kodak Gold und Wetter-Tags.',
        aria: 'Vollbild-Screenshot ansehen: Retro-Datumsstempel und Orts-Tags',
        alt: 'TimerCamera+ Retro-Filmstempel mit leuchtendem Tokyo-1995-Datum und Yoyogi-Park-Ortsangabe',
      },
      {
        caption: 'Timer-Serienbild: 3, 5, 9 oder ∞ Bilder automatisch aufnehmen und mit einem Tipp das beste Lächeln wählen.',
        aria: 'Vollbild-Screenshot ansehen: High-Speed-Serienbild und Best-Smile-Auswahl',
        alt: 'TimerCamera+ Serienbild-Auswahl mit hervorgehobenem bestem Lächeln bei einer Café-Gruppenaufnahme',
      },
      {
        caption: 'Time-Slice-Collage: Morgen- und Abendaufnahmen mit einem Tipp im Split- oder Spiegel-Layout verbinden.',
        aria: 'Vollbild-Screenshot ansehen: Time-Slice Vorher-Nachher-Collage',
        alt: 'TimerCamera+ Time-Slice-Editor mit Split-Collage aus Morgen- und Abendaufnahme',
      },
      {
        caption: 'Meilensteine & Tageszähler: Baby-Tage, Fitness-Streaks oder Reisetagebücher mit eigenen Tags festhalten.',
        aria: 'Vollbild-Screenshot ansehen: Meilenstein-Zähler und Foto-Tags',
        alt: 'TimerCamera+ Meilenstein-Stempel mit Tageszähler und Hashtag-Tags auf einem Outdoor-Porträt',
      },
    ],
  },

  ja: {
    title: 'TimerCamera+ ＆ インディーアプリ | Muxixi Studios',
    metaDesc:
      'Muxixi Studios のセルフタイマーカメラ「TimerCamera+」。拍手＆声シャッター、2台目アプリ不要の無料QR遠隔ライブファインダー、高速連写、レトロ日付スタンプをiOS＆Androidで。',
    iosUrl: 'https://apps.apple.com/app/apple-store/id6768857092?pt=128292627&ct=website_home_ja&mt=8',
    video: {
      poster: 'assets/img/video-poster.jpg',
      webm: 'assets/video/timercamera-promo-en.webm',
      mp4: 'assets/video/timercamera-promo-en.mp4',
      vtt: 'assets/video/timercamera-promo-ja.vtt',
      vttLang: 'ja',
      vttLabel: '日本語',
      autoCaptions: true,
    },
    imgPrefix: 'assets/img/ja/',
    text: {
      skip_link: 'メインコンテンツへスキップ',
      brand_sub: 'インディーアプリ開発',
      nav_features: '機能',
      nav_showcase: '画面紹介',
      nav_faq: 'よくある質問',
      nav_apps: 'その他のアプリ',
      nav_privacy: 'プライバシー',
      header_cta: 'アプリを入手',
      cta_ios: 'App Store でダウンロード',
      cta_android: 'Google Play で手に入れよう',
      video_caption: '18秒デモ動画（日本語字幕対応）· 音をオンにすると拍手・シャッター音も確認できます',
      features_kicker: 'TIMERCAMERA+ が選ばれる理由',
      features_h2: '一人旅、カップル、集合写真のために設計',
      features_sub:
        'SNS風の余計な機能は一切なし。高画質な背面カメラで思い通りの一枚を撮るための機能だけを磨き上げました。',
      feat1_badge: '音声＆拍手シャッター',
      feat1_title: '2回拍手、または「Hey!」で撮影',
      feat1_desc:
        '最大3m離れた場所から100%オフラインで3〜60秒タイマーを起動。シャッター500ms前のビープ音で、画面を見なくても完璧なポーズを決められます。',
      feat2_badge: 'v1.11 新機能 · 完全無料',
      feat2_title: 'アプリ不要・QRブラウザ遠隔ファインダー',
      feat3_badge: '高速タイマー連写',
      feat3_title: '3 / 5 / 9 / ∞ 連写＆ベスト笑顔セレクト',
      feat3_desc:
        'タイマー後に連続撮影して一覧比較。一番いい笑顔だけを残し、不要なカットはワンタップでまとめて削除できます。',
      feat4_badge: 'フィルム美学',
      feat4_title: 'レトロ日付スタンプ＆位置情報タグ',
      feat4_desc:
        '90年代フィルム風の日付（Retro 90s / Kodak Gold / Cyber Neon / Tokyo 1995）、天気・場所バッジ、記念日カウンター、16種のGPUステッカーを搭載。',
      feat5_badge: 'クリエイティブコラージュ',
      feat5_title: 'タイムスライス（Before & After）',
      feat5_desc:
        '朝と夕暮れ、トレーニング前後など2つの瞬間を1枚の分割・ミラー構図に美しく合成できます。',
      feat6_badge: '超軽量＆完全プライベート',
      feat6_title: 'フル画質そのまま、クラウド送信ゼロ',
      feat6_desc:
        '10 MB 未満の高速起動・iPadネイティブ＆2K超高画質対応。音声認識・連写処理・QRライブ映像はすべて端末内またはローカルWi-Fiのみで完結します。',
      showcase_kicker: 'アプリ画面プレビュー',
      showcase_h2: 'ダウンロード前にすべての機能をチェック',
      showcase_sub: '最新の v1.11.1 スクリーンショットをスワイプ — タップで拡大表示できます。',
      faq_kicker: 'よくある質問',
      faq_h2: '撮影前のちょっとした疑問に回答',
      faq1_q: 'QR遠隔ファインダーを使う際、2台目のスマホにもアプリを入れる必要がありますか？',
      faq1_a:
        'いいえ、不要です。撮影用スマホに表示されたQRコードを別のiPhoneやAndroidカメラで読み取るだけで、SafariやChrome上にリアルタイムの背面カメラ映像が無料で表示されます（ローカルWi-Fiまたはテザリング対応）。',
      faq2_q: '音声データや撮影した写真がサーバーに送信されることはありますか？',
      faq2_a:
        '一切ありません。拍手・音声検知も写真・動画処理も100%端末内で完結します。アカウント登録も不要で、カメラロールが外部へ送信されることはありません。',
      faq3_q: 'TimerCamera+ は月額サブスクリプション制ですか？',
      faq3_a:
        '基本のタイマー撮影、無料QR遠隔ファインダー、標準連写、定番日付スタンプは無料でお使いいただけます。さらに全マスターフィルム演出・無制限連写・2K出力を永久解放する「買い切り Lifetime Pro」オプションをご用意しています。',
      faq4_q: '対応機種を教えてください。',
      faq4_a:
        'Apple App Store（iPhone / iPad）および Google Play（Android）の両方で世界中に配信しています。',
      apps_kicker: 'スタジオ作品一覧',
      apps_h2: 'Muxixi Studios のその他のアプリ',
      apps_sub:
        '時間とプライバシーを大切にする個人開発者が手がけた、軽快なツール＆インディーゲームです。',
      app1_pill: '物理パズル',
      app1_tagline: '爽快な物理破壊パズル',
      app1_desc:
        'リアルな破砕物理と心地よい音響フィードバックで、クリスタル構造を連鎖爆破して解き明かす物理パズル。',
      app1_status: 'iOS · 近日公開',
      app2_pill: '脳トレ',
      app2_tagline: '段階式・暗算トレーニング',
      app2_desc:
        '毎日のすき間時間に計算スピードと集中力を鍛えられる、シンプルで高速な暗算ドリル（iOS / Android対応）。',
      app3_pill: '開発中 · UNITY',
      app3_tagline: '上海タイムトラベル物語',
      app3_desc:
        '霧の石庫門から賑わう川辺の桟橋まで、失われた時代の上海を旅しながら個性豊かな人物と物語を紐解くアドベンチャー。',
      app3_status: 'iOS & Android · 鋭意開発中',
      for_crystal_smash: '（Crystal Smash）',
      for_qmm: '（Quick Math Master）',
      cta_band_h2: 'もっと鮮明な自撮り・集合写真を始めませんか？',
      cta_band_sub: 'アカウント登録不要。iOS・Android で今すぐ無料体験できます。',
      cta_band_ios: 'iOS 版をダウンロード',
      cta_band_android: 'Android 版をダウンロード',
      privacy_kicker: 'プライバシー＆法務情報',
      privacy_h2: 'プロダクトごとの明確なプライバシー保護',
      privacy_sub:
        'Muxixi Studios はユーザー行動を追跡する独自サーバーを運用していません。各アプリごとに透明なポリシーとデータ削除案内を公開しています。',
      legal_tc_privacy: 'TimerCamera+ プライバシーポリシー',
      legal_eula: 'Apple 標準利用規約 (EULA)',
      legal_tc_deletion: 'TimerCamera+ データ削除案内',
      legal_cs_privacy: 'Crystal Smash プライバシーポリシー',
      legal_qmm_privacy: 'Quick Math Master プライバシーポリシー',
      legal_qmm_deletion: 'Quick Math Master データ削除案内',
      footer_copy: '© 2026 Muxixi Studios. 独立開発・丁寧なものづくり。',
    },
    html: {
      hero_h1: '背面カメラで撮る、<span class="accent-text">ハンズフリー自撮り。</span>',
      hero_lead:
        '10秒タイマーに慌てて走るのも、見知らぬ人にスマホを預けるのも、もう終わり。オフラインで拍手や<strong>「Hey!」</strong>と声をかけるだけで撮影開始。<em>どんな</em>2台目のスマホでもブラウザから無料QRライブ確認＆高速連写でベストな笑顔を残せます。',
      feat2_desc:
        'ローカルWi-FiのQRコードを<em>どんな</em>iPhoneやAndroidで読み取るだけで、Safari・Chrome上に背面カメラ映像をリアルタイム表示。0.5x/1x/2xズームやシャッターも2台目アプリ不要で操作できます。',
      footer_note:
        '軽量カメラツール＆インディーゲームを手がける個人開発スタジオです。ご意見・お問い合わせ：<a href="mailto:muxixisoft@gmail.com">muxixisoft@gmail.com</a>',
    },
    aria: {
      brand_home_aria: 'Muxixi Studios ホーム',
      nav_primary_aria: 'メインナビゲーション',
      nav_social_aria: '公式SNS',
      lang_switch_aria: '言語切替',
      lightbox_close_aria: 'スクリーンショット拡大表示を閉じる',
    },
    screens: [
      {
        caption: 'ハンズフリー自撮り：拍手2回または「Hey!」でオフライン起動（5秒・15秒・30秒・60秒タイマー）。',
        aria: '拡大表示：拍手＆声シャッターのハンズフリー自撮り画面',
        alt: 'TimerCamera+ の3秒カウントダウンとオフライン拍手・声シャッター案内画面',
      },
      {
        caption: '無料QR遠隔ファインダー：2台目のスマホでQRを読み取るだけでブラウザから背面カメラ確認＆遠隔撮影。',
        aria: '拡大表示：アプリ不要の無料QRブラウザ遠隔ファインダー画面',
        alt: 'TimerCamera+ のQR遠隔ライブファインダーで2台目のブラウザからズーム・撮影操作する画面',
      },
      {
        caption: 'レトロ日付スタンプ＆位置情報タグ：90年代フィルム日付、Tokyo 1995、Kodak Gold、天気タグに対応。',
        aria: '拡大表示：レトロフィルム日付スタンプと位置情報タグ画面',
        alt: 'TimerCamera+ のTokyo 1995レトロ日付スタンプと代々木公園の位置タグ表示画面',
      },
      {
        caption: 'タイマー高速連写：3・5・9・∞枚を自動連写して、最高の笑顔をワンタップでセレクト。',
        aria: '拡大表示：高速タイマー連写とベスト笑顔セレクト画面',
        alt: 'TimerCamera+ の高速連写セレクターでカフェの集合写真から最高の笑顔を選ぶ画面',
      },
      {
        caption: 'タイムスライス合成：朝と夕方など2つの瞬間をワンタップで分割・ミラーコラージュ。',
        aria: '拡大表示：タイムスライス Before & After 分割コラージュ画面',
        alt: 'TimerCamera+ のタイムスライス編集画面で朝と夕方の写真を上下分割合成した例',
      },
      {
        caption: '成長記録＆マイルストーンタグ：育児日数やトレーニング継続日数をカスタムタグ付きで記録。',
        aria: '拡大表示：マイルストーン日数カウンターとカスタムタグ画面',
        alt: 'TimerCamera+ の育児日数スタンプとハッシュタグ付きポートレート撮影画面',
      },
    ],
  },
};

function normalizeLang(raw) {
  if (!raw) return null;
  const code = String(raw).toLowerCase().trim();
  if (code.startsWith('de')) return 'de';
  if (code.startsWith('ja')) return 'ja';
  if (code.startsWith('en')) return 'en';
  return null;
}

function detectInitialLang() {
  const params = new URLSearchParams(window.location.search);
  const queryLang = normalizeLang(params.get('lang'));
  if (queryLang) return queryLang;

  try {
    const saved = normalizeLang(window.localStorage.getItem(STORAGE_KEY));
    if (saved) return saved;
  } catch {
    // Ignore storage restriction in private browsing
  }

  const browserLangs = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language];
  for (const candidate of browserLangs) {
    const matched = normalizeLang(candidate);
    if (matched) return matched;
  }
  return 'en';
}

function updateVideoLocale(videoConfig, langChanged) {
  const video = document.getElementById('hero-video');
  const srcWebm = document.getElementById('hero-video-webm');
  const srcMp4 = document.getElementById('hero-video-mp4');
  const track = document.getElementById('hero-video-track');
  if (!video || !srcWebm || !srcMp4 || !track) return;

  const currentMp4 = srcMp4.getAttribute('src');
  const mediaChanged = currentMp4 !== videoConfig.mp4;

  video.poster = videoConfig.poster;
  track.setAttribute('src', videoConfig.vtt);
  track.setAttribute('srclang', videoConfig.vttLang);
  track.setAttribute('label', videoConfig.vttLabel);

  if (mediaChanged) {
    const wasPlaying = !video.paused && !video.ended;
    srcWebm.setAttribute('src', videoConfig.webm);
    srcMp4.setAttribute('src', videoConfig.mp4);
    video.load();
    if (wasPlaying) {
      video.play().catch(() => {});
    }
  } else if (langChanged) {
    // Refresh caption track cleanly when switching between EN and JA on shared EN video
    video.load();
  }

  // Enable Japanese captions by default when Japanese locale is active
  const syncCaptions = () => {
    if (video.textTracks && video.textTracks.length > 0) {
      video.textTracks[0].mode = videoConfig.autoCaptions ? 'showing' : 'disabled';
    }
  };
  syncCaptions();
  video.addEventListener('loadedmetadata', syncCaptions, { once: true });
}

let activeLang = 'en';

function applyLanguage(lang, { persist = false, syncUrl = false } = {}) {
  const targetLang = SUPPORTED_LANGS.includes(lang) ? lang : 'en';
  const bundle = TRANSLATIONS[targetLang];
  const langChanged = targetLang !== activeLang;
  activeLang = targetLang;

  document.documentElement.lang = targetLang;
  document.title = bundle.title;

  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.setAttribute('content', bundle.metaDesc);

  for (const el of document.querySelectorAll('[data-i18n]')) {
    const key = el.dataset.i18n;
    if (Object.hasOwn(bundle.text, key)) {
      el.textContent = bundle.text[key];
    }
  }

  for (const el of document.querySelectorAll('[data-i18n-html]')) {
    const key = el.dataset.i18nHtml;
    if (Object.hasOwn(bundle.html, key)) {
      el.innerHTML = bundle.html[key];
    }
  }

  for (const el of document.querySelectorAll('[data-i18n-aria]')) {
    const key = el.dataset.i18nAria;
    if (Object.hasOwn(bundle.aria, key)) {
      el.setAttribute('aria-label', bundle.aria[key]);
    }
  }

  for (const link of document.querySelectorAll('[data-ios-cta]')) {
    link.setAttribute('href', bundle.iosUrl);
  }

  // Update 6 V2 showcase posters + localized captions
  for (const trigger of document.querySelectorAll('.poster-trigger[data-screen-idx]')) {
    const idx = Number(trigger.dataset.screenIdx);
    const slug = SCREEN_SLUGS[idx];
    const meta = bundle.screens[idx];
    if (!slug || !meta) continue;

    const fullSrc = `${bundle.imgPrefix}${slug}-640w.jpg`;
    const smallSrc = `${bundle.imgPrefix}${slug}-420w.jpg`;
    trigger.dataset.fullSrc = fullSrc;
    trigger.dataset.caption = meta.caption;
    trigger.setAttribute('aria-label', meta.aria);

    const img = trigger.querySelector('img');
    if (img) {
      img.setAttribute('src', fullSrc);
      img.setAttribute('srcset', `${smallSrc} 420w, ${fullSrc} 640w`);
      img.setAttribute('alt', meta.alt);
    }
  }

  updateVideoLocale(bundle.video, langChanged);

  for (const btn of document.querySelectorAll('.lang-btn[data-lang]')) {
    btn.setAttribute('aria-pressed', btn.dataset.lang === targetLang ? 'true' : 'false');
  }

  if (persist) {
    try {
      window.localStorage.setItem(STORAGE_KEY, targetLang);
    } catch {
      // Ignore storage restriction
    }
  }

  if (syncUrl && window.history && typeof window.history.replaceState === 'function') {
    const url = new URL(window.location.href);
    if (targetLang === 'en') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', targetLang);
    }
    window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
  }
}

// Language switcher buttons
for (const btn of document.querySelectorAll('.lang-btn[data-lang]')) {
  btn.addEventListener('click', () => {
    applyLanguage(btn.dataset.lang, { persist: true, syncUrl: true });
  });
}

// Initialize language on load
const initialLang = detectInitialLang();
if (initialLang !== 'en') {
  applyLanguage(initialLang, { persist: false, syncUrl: false });
}

// Native modal dialog lightbox for V2 posters
const dialog = document.getElementById('poster-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');

if (dialog && lightboxImage && lightboxCaption) {
  const triggers = document.querySelectorAll('.poster-trigger');

  for (const trigger of triggers) {
    trigger.addEventListener('click', () => {
      const fullSrc = trigger.dataset.fullSrc;
      const caption = trigger.dataset.caption || '';
      const thumbImg = trigger.querySelector('img');

      if (fullSrc) {
        lightboxImage.src = fullSrc;
      }
      lightboxImage.alt = thumbImg ? thumbImg.alt : caption;
      lightboxCaption.textContent = caption;
      dialog.showModal();
    });
  }

  // Light-dismiss backdrop fallback for browsers that do not yet support closedby="any"
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  }
}
