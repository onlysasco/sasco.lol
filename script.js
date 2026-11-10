const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const htmlEl = document.documentElement;

// 1. نظام تبديل الوضع (Night / Day)
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// 2. نظام الترجمة والتبديل الفوري بين العربية والإنجليزية
let currentLang = 'en';

const translations = {
    ar: {
        'nav-about': 'من أنا',
        'nav-expertise': 'الخبرات',
        'nav-projects': 'المشاريع',
        'nav-why-me': 'لماذا أنا',
        'status-text': 'متاح لتجهيز السيرفرات',
        'hero-title': 'مرحباً، أنا ساسكو',
        'hero-subtitle': 'مصمم ومطور سيرفرات ديسكورد',
        'hero-desc': 'أقوم ببناء مجتمعات ديسكورد احترافية، تصميم أنظمة رتب وصلاحيات متقدمة، وهيكلة خوادم متكاملة بمظهر بصري جذاب وأداء سلس.',
        'btn-join': 'انضم إلى ديسكورد',
        'btn-explore': 'استكشف مشاريعي',
        'counter-desc': 'مشروع تم إنجازه بنجاح',
        'about-tag': 'الملف الشخصي',
        'about-subtitle': 'مصمم سيرفرات ديسكورد محترف',
        'about-desc': 'أنا مصمم سيرفرات ديسكورد مخصص لبناء بيئات مجتمعية نظيفة وآمنة وقابلة للتوسع بالكامل. متفرغ لتصميم الصلاحيات الدقيقة والهيكليات المنظمة لضمان عمل خادمك بأعلى كفاءة واستقرار.',
        'exp-title': 'مجالات الخبرة والتميز',
        'exp-desc': 'المجالات الأساسية التي أقدم فيها خدمات احترافية وعالية الجودة.',
        'skill1-title': 'تصميم وهيكلة السيرفرات',
        'skill1-desc': 'بناء سيرفرات ديسكورد حديثة ومنظمة بالكامل مع تنسيق القنوات، القوائم المخصصة، وتوفير تجربة تصفح مريحة للأعضاء.',
        'skill2-title': 'الحماية المتقدمة والصلاحيات',
        'skill2-desc': 'أنظمة رتب محصنة ضد التخريب، توزيع صلاحيات دقيق للإدارة والمشرفين، وقفل قنوات السيرفر وتأمينها بالكامل.',
        'skill3-title': 'تهيئة وتحسين المجتمعات',
        'skill3-desc': 'إعداد أنظمة الترحيب والتحقق التلقائي للأعضاء الجدد، ضبط الفلاتر الآلية لحظر الروابط المزعجة وزيادة تفاعل السيرفر.',
        'proj-title': 'مشاريع مميزة',
        'proj-desc': 'حلول برمجية وهيكلية تم بناؤها بدقة عالية.',
        'proj1-title': 'قوالب وهياكل السيرفرات المجتمعية',
        'proj1-desc': 'سيرفرات متكاملة تم تصميمها لتعكس الهوية البصرية وشخصية الخادم مع تقسيم الفئات والقنوات بشكل متناسق.',
        'proj2-title': 'أنظمة صلاحيات ورتب متقدمة',
        'proj2-desc': 'بناء صلاحيات آمنة مخصصة لسيرفرات الألعاب وشبكات الأعمال تحتوي على لوحات تحكم وحماية ضد الهجمات والتخريب.',
        'why-title': 'لماذا تختارني؟',
        'why-desc': 'الالتزام التام بتقديم أفضل جودة وأعلى أداء لكل مشروع.',
        'why1-title': 'عمل متكامل ومثالي',
        'why1-desc': 'يتم إنجاز كل سيرفر على أكمل وجه مع اهتمام دقيق بالتفاصيل والتنسيق الأنيق.',
        'why2-title': 'سرعة استجابة فائقة',
        'why2-desc': 'ردود سريعة وتسليم فوري للسيرفرات طوال فترة التخطيط والتنفيذ.',
        'why3-title': 'سهولة في التواصل',
        'why3-desc': 'محادثات واضحة وودية لضمان تحويل رؤيتك وفكرتك إلى سيرفر حقيقي ملموس.',
        'contact-title': 'هل لديك مشروع في مخيلتك؟',
        'contact-desc': 'انضم إلى السيرفر الخاص بي وأخبرني بالتفاصيل التي تحتاجها لتبدأ فوراً.',
        'footer-text': 'ساسكو. مصمم ومطور سيرفرات ديسكورد محترف'
    },
    en: {
        'nav-about': 'About',
        'nav-expertise': 'Expertise',
        'nav-projects': 'Projects',
        'nav-why-me': 'Why Me',
        'status-text': 'Available for setups',
        'hero-title': "Hello, I'm Sasco",
        'hero-subtitle': 'Discord Server Setup Designer',
        'hero-desc': 'Crafting high-tier Discord communities, specialized permission architectures, and highly functional server structures with sleek visual aesthetics.',
        'btn-join': 'Join Discord',
        'btn-explore': 'Explore Projects',
        'counter-desc': 'Successful projects completed',
        'about-tag': 'About Me',
        'about-subtitle': 'Professional Discord Server Setup Designer',
        'about-desc': "I'm a dedicated Discord Server Setup Designer who builds clean, scalable, and fully optimized community environments. I specialize in designing advanced configurations, layout hierarchies, and precise permission systems to make sure every community performs at its best.",
        'exp-title': 'Core Expertise & Skills',
        'exp-desc': 'Focused areas where I deliver high-quality, professional results.',
        'skill1-title': 'Server Setup Designer',
        'skill1-desc': 'Modern, fully organized Discord servers with clean channel layouts, custom hierarchies, and tailored community configurations.',
        'skill2-title': 'Advanced Security & Permissions',
        'skill2-desc': 'Bulletproof roles structure, secure staff systems, anti-raid permission distribution, and professional channel locks.',
        'skill3-title': 'Community Optimization',
        'skill3-desc': 'Fine-tuning onboarding flows, welcoming systems, auto-moderation rules, and aesthetic formatting for maximum engagement.',
        'proj-title': 'Featured Projects',
        'proj-desc': 'High-impact solutions built with precision.',
        'proj1-title': 'Community Server Frameworks',
        'proj1-desc': "Complete professional servers designed to display a community's core identity, custom categories, and seamless layout structures.",
        'proj2-title': 'Advanced Role & Permission Systems',
        'proj2-desc': 'Highly secure layouts built for gaming and professional networks, featuring fully optimized staff panels and anti-raid setups.',
        'why-title': 'Why Choose Me?',
        'why-desc': 'Commitment to excellence in every project.',
        'why1-title': 'Perfect Work',
        'why1-desc': 'Every server structure is finished to the fullest, with close attention to details and clean layouts.',
        'why2-title': 'Fast Response',
        'why2-desc': 'Quick replies and fast setup delivery throughout the entire layout planning process.',
        'why3-title': 'Easy Communication',
        'why3-desc': 'Clear, friendly conversation so your exact vision comes to life.',
        'contact-title': 'Have Project In Mind?',
        'contact-desc': 'Join the Discord server and tell me what you need.',
        'footer-text': 'Sasco. Professional Discord Server Setup Designer'
    }
};

langToggle.addEventListener('click', () => {
    if (currentLang === 'en') {
        currentLang = 'ar';
        langToggle.textContent = 'EN';
        document.body.classList.add('rtl');
    } else {
        currentLang = 'en';
        langToggle.textContent = 'AR';
        document.body.classList.remove('rtl');
    }

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
});

// [حماية الموقع] حظر الضغط على كليك يمين
document.addEventListener('contextmenu', event => event.preventDefault());

// [حماية الموقع] حظر زر F12 وباقي أدوات المطورين
document.addEventListener('keydown', event => {
    if (
        event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J' || event.key === 'C')) || 
        (event.ctrlKey && (event.key === 'u' || event.key === 'U'))
    ) {
        event.preventDefault();
    }
});