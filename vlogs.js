// Sample Article Data
const articlesData = [
    {
        id: 1,
        title: "Top 5 Smart Home Security Systems for 2026",
        excerpt: "Discover the best smart home security systems that offer advanced features, reliable protection, and seamless integration.",
        category: "Security",
        date: "Feb 15, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FEaV74R2rMwk%2Fhqdefault.jpg&w=3840&q=75",
        duration: "12:45",
        content: "In today's digital age, protecting your home has never been more important. Smart home security systems offer advanced features that go beyond traditional alarm systems. Our comprehensive review covers the top 5 security systems for 2026, including detailed analysis of their features, pricing, and integration capabilities.\n\nKey features to consider:\n• 24/7 Professional monitoring\n• Mobile app control and notifications\n• Video surveillance with cloud storage\n• Smart home integration (Alexa, Google Home)\n• Motion detection and smart alerts\n\nWe tested each system extensively to bring you honest reviews and recommendations based on real-world performance, ease of installation, and overall value for money."
    },
    {
        id: 2,
        title: "Complete Guide to Kitchen Remodeling",
        excerpt: "Transform your kitchen with expert tips on layout, materials, and budget planning for your dream renovation.",
        category: "Renovation",
        date: "Feb 14, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FQJR-IVC6vXs%2Fhqdefault.jpg&w=3840&q=75",
        duration: "15:30",
        content: "Kitchen remodeling is one of the most rewarding home improvement projects you can undertake. This comprehensive guide walks you through every step of the process, from initial planning to final touches.\n\nPlanning Your Kitchen Remodel:\n• Assess your needs and lifestyle\n• Set a realistic budget (typically $12,000-$35,000)\n• Choose the right layout (L-shaped, U-shaped, galley, or island)\n• Select durable materials and finishes\n• Plan for proper lighting and ventilation\n\nWe cover everything from cabinet selection to countertop materials, appliance upgrades, and working with contractors. Learn how to maximize your space, increase functionality, and create the kitchen of your dreams while staying within budget."
    },
    {
        id: 3,
        title: "Solar Panel Installation: What You Need to Know",
        excerpt: "Everything about solar panel installation, costs, benefits, and how to choose the right system for your home.",
        category: "Energy",
        date: "Feb 13, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FyjAU5mflg7E%2Fhqdefault.jpg&w=3840&q=75",
        duration: "18:22",
        content: "Solar energy is becoming increasingly affordable and accessible for homeowners. This guide covers everything you need to know about installing solar panels on your home.\n\nWhat You'll Learn:\n• Understanding solar panel technology and efficiency ratings\n• Average installation costs ($15,000-$25,000 before incentives)\n• Federal tax credits and state rebates (up to 30% savings)\n• Roof requirements and orientation considerations\n• Expected ROI and payback period (typically 6-10 years)\n• Maintenance requirements and warranty coverage\n\nDiscover how to evaluate your home's solar potential, choose the right system size, select a reputable installer, and maximize your energy savings while reducing your carbon footprint."
    },
    {
        id: 4,
        title: "DIY Home Maintenance Checklist for Every Season",
        excerpt: "Keep your home in top condition with this comprehensive seasonal maintenance checklist for homeowners.",
        category: "Maintenance",
        date: "Feb 12, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FM2Sh1IRC7Gs%2Fhqdefault.jpg&w=3840&q=75",
        duration: "10:15",
        content: "Regular home maintenance prevents costly repairs and keeps your property in top condition year-round. Our seasonal checklist makes it easy to stay on top of essential tasks.\n\nSpring Tasks:\n• Inspect roof and gutters\n• Service HVAC system\n• Check exterior paint and siding\n• Clean windows and screens\n\nSummer Tasks:\n• Inspect and clean deck/patio\n• Check irrigation system\n• Service air conditioning\n\nFall Tasks:\n• Clean gutters and downspouts\n• Winterize outdoor faucets\n• Check weatherstripping\n• Inspect heating system\n\nWinter Tasks:\n• Monitor for ice dams\n• Check insulation\n• Test smoke/CO detectors\n• Maintain indoor humidity levels\n\nFollow this guide to protect your investment and avoid unexpected repairs."
    },
    {
        id: 5,
        title: "Beautiful Bathroom Vanity!!😍",
        excerpt: "Transform your bathroom with stunning vanity designs. Explore modern styles, storage solutions, and installation tips.",
        category: "Home Improvement",
        date: "Feb 11, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fa4XKLHQNCag%2Fhqdefault.jpg&w=3840&q=75",
        duration: "14:08",
        content: "A beautiful bathroom vanity can completely transform your bathroom space, combining functionality with stunning design. Discover the latest trends and practical tips for choosing and installing the perfect vanity.\n\nKey Considerations:\n• Size and layout to fit your space\n• Single vs. double sink options\n• Modern, traditional, or rustic styles\n• Storage solutions (drawers, cabinets, open shelving)\n• Countertop materials (quartz, marble, granite)\n• Integrated lighting and mirrors\n• Plumbing and installation requirements\n\nWhether you're doing a complete bathroom remodel or just updating your vanity, we'll show you beautiful options that combine style and practicality to create a bathroom you'll love."
    },
    {
        id: 6,
        title: "Beautiful Before & After Kitchen Remodel!!!",
        excerpt: "See stunning kitchen transformations! From outdated spaces to modern dream kitchens with incredible results.",
        category: "Renovation",
        date: "Feb 10, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FknAyEr5FRIc%2Fhqdefault.jpg&w=3840&q=75",
        duration: "11:55",
        content: "Witness the incredible transformation of a dated kitchen into a stunning modern space. This before and after showcase demonstrates the power of thoughtful design and quality craftsmanship.\n\nKey Features of the Transformation:\n• Complete cabinet replacement with custom cabinetry\n• Modern quartz countertops replacing old laminate\n• New stainless steel appliance package\n• Open concept layout for better flow\n• Contemporary lighting fixtures and pendants\n• Luxury vinyl plank flooring\n• Fresh subway tile backsplash\n• Upgraded plumbing fixtures and hardware\n\nThis remodel shows how strategic updates can completely transform your kitchen's functionality and aesthetic appeal. From demolition to final reveal, see every step of creating a kitchen that's both beautiful and practical for modern living."
    },
    {
        id: 7,
        title: "My AHS Story Ramon & Alex (:60) | American Home Shield®",
        excerpt: "Discover how Ramon and Alex found peace of mind with American Home Shield's home warranty coverage.",
        category: "Home Maintenance",
        date: "Feb 9, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FnJ_HrrTsO8U%2Fhqdefault.jpg&w=3840&q=75",
        duration: "13:40",
        content: "Ramon and Alex share their story about the significance of having a reliable home warranty service. As homeowners who frequently host gatherings, their stove and appliances are integral to their daily routines.\n\nKey Benefits of Home Warranties:\n• Avoid high replacement costs for appliances\n• Smooth and efficient scheduling via app-based tools\n• Quick service intervention when needed\n• Peace of mind for unexpected repairs\n• Regular inspection and maintenance support\n• Professional service ensures safety compliance\n\n'It's only a matter of time before you're going to need it,' says Ramon. When their stove and AC unit needed repairs, having AHS coverage was invaluable. Don't worry. Be warranty."
    },
    {
        id: 8,
        title: "Remodel Regrets: Don't Make These Design Mistakes!",
        excerpt: "Avoid common remodeling pitfalls with expert planning tips. Save time, money, and regret with thoughtful guidance.",
        category: "Home Improvement",
        date: "Feb 8, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FV2ZxtQc7bMg%2Fhqdefault.jpg&w=3840&q=75",
        duration: "9:33",
        content: "Remodeling your home can be exciting but challenging. Thoughtful planning and expert guidance can save you time, money, and regret in the long run.\n\nCommon Mistakes to Avoid:\n• Jumping into renovations without a detailed plan\n• Skipping professional contractor consultations\n• Failing to optimize living spaces\n• Ignoring long-term design implications\n• DIY-ing electrical, plumbing, or structural work\n• Not adhering to local building codes\n• Forgetting to consider functionality alongside aesthetics\n\nKey Success Factors:\n• Proper planning evaluating layout, functionality, and aesthetics\n• Professional involvement for major structural changes\n• Regular inspections against initial designs\n• Licensed contractors for technical work\n\n'The last thing you want is a remodel that needs redoing because it wasn't done right the first time.'"
    },
    {
        id: 9,
        title: "Smart Lighting Systems: A Buyer's Guide",
        excerpt: "Illuminate your home intelligently with the best smart lighting systems that offer convenience and energy savings.",
        category: "Smart Home",
        date: "Feb 7, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FrhImhkHUNSc%2Fhqdefault.jpg&w=3840&q=75",
        duration: "16:20",
        content: "Smart lighting transforms your home with convenience, ambiance, and energy savings. Our comprehensive buyer's guide helps you choose the perfect smart lighting system for your needs.\n\nSmart Lighting Benefits:\n• Control lights from anywhere via smartphone\n• Voice control with Alexa, Google Assistant, or Siri\n• Create custom schedules and automation\n• Adjust brightness and color temperature\n• Energy monitoring and savings\n• Enhanced home security with away modes\n\nWe compare top brands including Philips Hue, LIFX, Wyze, and Sengled, evaluating ease of setup, app functionality, compatibility, and overall value. Learn about different bulb types, hub requirements, and how to design a smart lighting system that fits your home and lifestyle."
    },
    {
        id: 10,
        title: "Basement Finishing Ideas on a Budget",
        excerpt: "Transform your basement into a functional living space with these creative and budget-friendly finishing ideas.",
        category: "Renovation",
        date: "Feb 6, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FM0VdrqELhS4%2Fhqdefault.jpg&w=3840&q=75",
        duration: "20:12",
        content: "Maximize your home's square footage by finishing your basement on a budget. Discover creative ideas that add value without breaking the bank.\n\nBudget-Friendly Ideas:\n• Paint concrete floors instead of expensive flooring ($200-$500)\n• Use moisture-resistant drywall for walls\n• Install drop ceiling with removable tiles for easy access\n• Add recessed lighting for modern look\n• Create a multi-purpose space (home office, gym, playroom)\n• Use area rugs to define spaces\n• DIY built-in shelving for storage\n\nAverage Cost Breakdown:\n• Basic finish: $10,000-$20,000\n• Mid-range: $20,000-$40,000\n• High-end: $40,000+\n\nLearn how to prioritize essential tasks, tackle projects yourself to save money, and create a comfortable living space that increases your home's value and livable square footage."
    },
    {
        id: 11,
        title: "Outdoor Security Camera Installation Tips",
        excerpt: "Position and install outdoor security cameras effectively to maximize coverage and protect your property.",
        category: "Security",
        date: "Feb 5, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FAC_qrwiYXHE%2Fhqdefault.jpg&w=3840&q=75",
        duration: "8:45",
        content: "Proper outdoor security camera placement and installation is crucial for effective home protection. Follow our expert tips to maximize coverage and deterrence.\n\nKey Installation Locations:\n• Front door and entrance areas\n• Driveway and garage\n• Backyard and side yards\n• Windows on ground level\n\nInstallation Best Practices:\n• Mount cameras 8-10 feet high to prevent tampering\n• Angle cameras to cover entry points\n• Ensure cameras have clear line of sight\n• Consider lighting conditions and glare\n• Protect cameras from weather exposure\n• Use weatherproof cables and connections\n• Connect to reliable Wi-Fi or hardwire for stability\n\nLearn about wireless vs. wired cameras, power options, storage solutions, and how to integrate outdoor cameras with your overall home security system for comprehensive protection."
    },
    {
        id: 12,
        title: "HVAC Maintenance: Keep Your System Running",
        excerpt: "Essential HVAC maintenance tips to ensure optimal performance, efficiency, and longevity of your system.",
        category: "Maintenance",
        date: "Feb 4, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8nkUOp6GGys%2Fhqdefault.jpg&w=3840&q=75",
        duration: "12:18",
        content: "Regular HVAC maintenance extends system life, improves efficiency, and prevents costly breakdowns. Our guide covers essential maintenance tasks homeowners can do themselves and when to call a professional.\n\nMonthly Tasks:\n• Check and change air filters (every 1-3 months)\n• Inspect thermostat operation\n• Clear debris around outdoor unit\n\nSeasonal Maintenance:\n• Clean outdoor condenser coils\n• Check refrigerant levels\n• Inspect ductwork for leaks\n• Test system performance\n• Lubricate moving parts\n• Check electrical connections\n\nAnnual Professional Service:\n• Comprehensive system inspection\n• Clean burners and flame sensors\n• Test safety controls\n• Optimize system performance\n\nProper maintenance can reduce energy bills by 15%, extend equipment life by 5-15 years, and prevent emergency repairs. Learn what to do yourself and when to schedule professional service."
    },
    {
        id: 13,
        title: "Smart Thermostat Installation Guide",
        excerpt: "Learn how to install and program a smart thermostat to optimize your home's climate control and save energy.",
        category: "Smart Home",
        date: "Feb 3, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FpZhluVOhiG8%2Fhqdefault.jpg&w=3840&q=75",
        duration: "11:30",
        content: "Smart thermostats can save you money while improving comfort. Our step-by-step guide makes installation and programming simple for any homeowner.\n\nInstallation Steps:\n1. Turn off power at breaker\n2. Remove old thermostat and label wires\n3. Install mounting plate\n4. Connect wires to new thermostat\n5. Attach display and restore power\n6. Connect to Wi-Fi and configure app\n\nSmart Features to Program:\n• Custom schedules for weekdays/weekends\n• Home/Away settings for automatic adjustment\n• Geofencing to detect when you're arriving\n• Energy usage reports and insights\n• Remote control via smartphone\n• Voice control integration\n\nPopular Models:\n• Nest Learning Thermostat ($249)\n• Ecobee SmartThermostat ($249)\n• Honeywell Home T9 ($199)\n\nAverage savings: $145/year on energy bills. Most installations take 30-60 minutes and require only a screwdriver."
    },
    {
        id: 14,
        title: "Garage Door Repair and Maintenance",
        excerpt: "Keep your garage door operating smoothly with these essential repair tips and maintenance schedules.",
        category: "Maintenance",
        date: "Feb 2, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJ8efDwkhKGc%2Fhqdefault.jpg&w=3840&q=75",
        duration: "14:25",
        content: "Your garage door is one of the most-used entry points in your home. Regular maintenance prevents problems and extends its lifespan.\n\nCommon Issues & Fixes:\n• Door won't open: Check remote batteries, power source, and manual lock\n• Noisy operation: Lubricate hinges, rollers, and tracks\n• Door reverses before closing: Adjust force settings or clean photo eyes\n• Uneven closing: Check spring tension (call professional for spring replacement)\n• Remote not working: Reprogram or replace battery\n\nMaintenance Schedule:\nMonthly:\n• Visual inspection of hardware\n• Test auto-reverse safety feature\n\nQuarterly:\n• Lubricate moving parts\n• Clean tracks\n• Tighten hardware\n\nAnnually:\n• Professional inspection\n• Balance testing\n• Spring adjustment\n\nSafety Warning: Never attempt to repair or replace garage door springs yourself—they're under extreme tension and can cause serious injury. Always hire a professional for spring work."
    },
    {
        id: 15,
        title: "Home Office Design Ideas",
        excerpt: "Create a productive and stylish home office space with these innovative design ideas and organization tips.",
        category: "Renovation",
        date: "Feb 1, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FEaV74R2rMwk%2Fhqdefault.jpg&w=3840&q=75",
        duration: "17:10",
        content: "With remote work becoming more common, a well-designed home office is essential for productivity and work-life balance. Discover ideas for creating an inspiring workspace.\n\nEssential Elements:\n• Ergonomic desk and chair (invest in quality)\n• Proper lighting (natural light + task lighting)\n• Organized storage solutions\n• Technology setup (monitor, keyboard, cables)\n• Soundproofing or noise reduction\n• Personal touches and decor\n\nLayout Ideas:\n• Dedicated room with door for privacy\n• Corner office in bedroom or living room\n• Converted closet office (\"cloffice\")\n• Basement or attic office space\n• Dual-purpose guest room/office\n\nProductivity Enhancers:\n• Plants for air quality and mood\n• Whiteboard or bulletin board\n• Cable management solutions\n• Adjustable standing desk\n• Quality webcam and microphone for video calls\n\nBudget Range: $500-$5,000+ depending on furniture, technology, and renovation needs. Learn how to maximize your space and create a professional environment at home."
    },
    {
        id: 16,
        title: "Water Heater Installation and Troubleshooting",
        excerpt: "Everything you need to know about water heater types, installation, and common troubleshooting solutions.",
        category: "Maintenance",
        date: "Jan 31, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FQJR-IVC6vXs%2Fhqdefault.jpg&w=3840&q=75",
        duration: "19:05",
        content: "Water heaters are essential for daily comfort. Understand the different types, installation process, and how to troubleshoot common problems.\n\nWater Heater Types:\n• Tank Storage (40-80 gallons): $400-$1,200\n• Tankless/On-Demand: $1,000-$3,000\n• Heat Pump: $1,200-$3,500\n• Solar: $2,000-$5,000\n\nCommon Problems & Solutions:\n• No hot water: Check pilot light or circuit breaker\n• Insufficient hot water: Adjust temperature or flush tank\n• Rusty water: Check anode rod, may need replacement\n• Strange noises: Flush sediment from tank\n• Leaking: Check connections or replace tank if corroded\n\nMaintenance Tips:\n• Flush tank annually to remove sediment\n• Test temperature/pressure relief valve yearly\n• Inspect anode rod every 3-5 years\n• Set temperature to 120°F for efficiency and safety\n\nAverage lifespan: Tank (8-12 years), Tankless (15-20 years). Learn when to repair vs. replace, and how to choose the right water heater for your household size and needs."
    },
    {
        id: 17,
        title: "Home Automation Systems Explained",
        excerpt: "Discover how home automation systems work and which smart devices are essential for modern living.",
        category: "Smart Home",
        date: "Jan 30, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FyjAU5mflg7E%2Fhqdefault.jpg&w=3840&q=75",
        duration: "16:45",
        content: "Home automation makes your house smarter, more efficient, and more secure. Our comprehensive guide explains how these systems work and which devices you need.\n\nCore Components:\n• Smart hub or controller (central command)\n• Smart speakers (Alexa, Google Home, Siri)\n• Smartphone app for remote control\n• Wi-Fi network (strong and reliable)\n\nEssential Smart Devices:\n• Smart thermostat (save energy, improve comfort)\n• Smart lighting (convenience and ambiance)\n• Smart locks (keyless entry and security)\n• Smart security cameras (monitor your property)\n• Smart doorbell (see and speak with visitors)\n• Smart plugs (control any device remotely)\n• Smart smoke/CO detectors (safety alerts)\n\nAutomation Ideas:\n• \"Good Morning\" routine: Adjust thermostat, turn on lights, start coffee\n• \"Leaving Home\" routine: Lock doors, arm security, adjust temperature\n• \"Movie Time\" routine: Dim lights, close blinds\n\nGetting Started Budget: $500-$2,000\nFull Home Automation: $5,000-$15,000+\n\nLearn how to start small and expand your smart home system over time for maximum convenience and value."
    },
    {
        id: 18,
        title: "Roof Inspection and Repair Guide",
        excerpt: "Protect your home with regular roof inspections and learn how to identify and fix common roofing issues.",
        category: "Maintenance",
        date: "Jan 29, 2026",
        image: "https://home-services.wellnessinbox.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FM2Sh1IRC7Gs%2Fhqdefault.jpg&w=3840&q=75",
        duration: "15:20",
        content: "Your roof is your home's first line of defense against the elements. Regular inspections and timely repairs prevent costly damage and extend roof life.\n\nInspection Checklist:\n• Missing, cracked, or curling shingles\n• Damaged flashing around chimneys and vents\n• Sagging areas or uneven surfaces\n• Moss, algae, or debris buildup\n• Gutter condition and drainage\n• Attic inspection for leaks or water stains\n• Ventilation adequacy\n\nCommon Repairs:\n• Replace damaged shingles: $100-$300\n• Repair flashing: $200-$500\n• Fix minor leaks: $150-$400\n• Clean and maintain: $150-$400\n\nWhen to Replace:\n• Age exceeds 20-25 years (asphalt shingles)\n• Extensive damage covering large areas\n• Multiple leaks throughout\n• Visible daylight through roof boards\n\nInspection Schedule:\n• Biannual inspections (spring and fall)\n• After major storms\n• Professional inspection every 3 years\n\nAverage roof replacement cost: $5,500-$11,000. Learn how to spot problems early and maintain your roof to maximize its lifespan."
    }
];

// State
let displayedArticles = 8;
let currentArticles = [];

// Theme Management
function initializeTheme() {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    
    // Only initialize articles if on main page
    if (document.getElementById('articlesGrid')) {
        initializeArticles();
    }
    
    setupEventListeners();
    setupNavigation();
});

// Initialize Articles
function initializeArticles() {
    currentArticles = [...articlesData];
    loadArticles();
}

// Load Articles
function loadArticles() {
    const articlesGrid = document.getElementById('articlesGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (!articlesGrid || !loadMoreBtn) return;
    
    // Clear grid
    articlesGrid.innerHTML = '';
    
    // Load displayed articles
    const articlesToShow = currentArticles.slice(0, displayedArticles);
    
    articlesToShow.forEach((article, index) => {
        const articleCard = createArticleCard(article);
        articleCard.style.animationDelay = `${index * 0.1}s`;
        articlesGrid.appendChild(articleCard);
    });
    
    // Show/hide load more button
    if (displayedArticles >= currentArticles.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Create Article Card
function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card';
    
    card.innerHTML = `
        <div class="article-thumbnail">
            <img src="${article.image}" alt="${article.title}" class="thumbnail-image">
            <div class="video-overlay">
                <div class="play-button"></div>
            </div>
            <div class="video-duration">${article.duration}</div>
        </div>
        <div class="article-content">
            <h3 class="article-title">${article.title}</h3>
            <p class="article-excerpt">${article.excerpt}</p>
            <div class="article-meta">
                <a href="#" class="read-more">Read article</a>
            </div>
        </div>
    `;
    
    // Check if article has dedicated blog page
    if (article.id === 1) {
        // Redirect to security cameras blog page
        card.querySelector('.read-more').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'blog-security-cameras.html';
        });
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.read-more')) {
                window.location.href = 'blog-security-cameras.html';
            }
        });
    } else if (article.id === 2) {
        // Redirect to kitchen remodeling blog page
        card.querySelector('.read-more').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'blog-kitchen-remodeling.html';
        });
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.read-more')) {
                window.location.href = 'blog-kitchen-remodeling.html';
            }
        });
    } else if (article.id === 3) {
        // Redirect to solar panel / UI Security blog page
        card.querySelector('.read-more').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'blog-solar-panel.html';
        });
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.read-more')) {
                window.location.href = 'blog-solar-panel.html';
            }
        });
    } else if (article.id === 4) {
        // Redirect to home maintenance / Ring Doorbell blog page
        card.querySelector('.read-more').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'blog-home-maintenance.html';
        });
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.read-more')) {
                window.location.href = 'blog-home-maintenance.html';
            }
        });
    } else if (article.id === 5) {
        // Redirect to bathroom vanity blog page
        card.querySelector('.read-more').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'blog-bathroom-vanity.html';
        });
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.read-more')) {
                window.location.href = 'blog-bathroom-vanity.html';
            }
        });
    } else if (article.id === 6) {
        // Redirect to kitchen storage and lighting blog page
        card.querySelector('.read-more').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'blog-kitchen-storage.html';
        });
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.read-more')) {
                window.location.href = 'blog-kitchen-storage.html';
            }
        });
    } else if (article.id === 7) {
        // Redirect to AHS story blog page
        card.querySelector('.read-more').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'blog-ahs-story.html';
        });
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.read-more')) {
                window.location.href = 'blog-ahs-story.html';
            }
        });
    } else if (article.id === 8) {
        // Redirect to remodel regrets blog page
        card.querySelector('.read-more').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'blog-remodel-regrets.html';
        });
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.read-more')) {
                window.location.href = 'blog-remodel-regrets.html';
            }
        });
    } else if (article.id === 9) {
        // Redirect to smart lighting blog page
        card.querySelector('.read-more').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'blog-smart-lighting.html';
        });
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.read-more')) {
                window.location.href = 'blog-smart-lighting.html';
            }
        });
    } else if (article.id === 10) {
        // Redirect to basement finishing blog page
        card.querySelector('.read-more').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'blog-basement-finishing.html';
        });
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.read-more')) {
                window.location.href = 'blog-basement-finishing.html';
            }
        });
    } else if (article.id === 11) {
        // Redirect to outdoor security camera blog page
        card.querySelector('.read-more').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'blog-outdoor-security.html';
        });
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.read-more')) {
                window.location.href = 'blog-outdoor-security.html';
            }
        });
    } else if (article.id === 12) {
        // Redirect to HVAC maintenance blog page
        card.querySelector('.read-more').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'blog-hvac-maintenance.html';
        });
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.read-more')) {
                window.location.href = 'blog-hvac-maintenance.html';
            }
        });
    } else if (article.id === 13) {
        // Redirect to smart thermostat blog page
        card.querySelector('.read-more').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'blog-smart-thermostat.html';
        });
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.read-more')) {
                window.location.href = 'blog-smart-thermostat.html';
            }
        });
    } else if (article.id === 14) {
        // Redirect to garage door blog page
        card.querySelector('.read-more').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'blog-garage-door.html';
        });
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.read-more')) {
                window.location.href = 'blog-garage-door.html';
            }
        });
    } else {
        // For other articles, use the modal
        card.querySelector('.read-more').addEventListener('click', (e) => {
            e.preventDefault();
            openArticleModal(article);
        });
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.read-more')) {
                openArticleModal(article);
            }
        });
    }
    
    return card;
}

// Setup Event Listeners
function setupEventListeners() {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Newsletter Form (Hero)
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Footer Newsletter Form
    const footerNewsletterForm = document.getElementById('footerNewsletterForm');
    if (footerNewsletterForm) {
        footerNewsletterForm.addEventListener('submit', handleFooterNewsletterSubmit);
    }
    
    // Load More Button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', handleLoadMore);
    }
    
    // Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Category Cards
    const categoryCards = document.querySelectorAll('.category-card');
    if (categoryCards.length > 0) {
        categoryCards.forEach(card => {
            card.addEventListener('click', handleCategoryClick);
        });
    }
}

// Handle Newsletter Submit
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();
    
    if (email) {
        // Simulate API call
        setTimeout(() => {
            showToast('🎉 Successfully subscribed! Welcome to Home Services Hub.', 'success');
            emailInput.value = '';
        }, 500);
    }
}

// Handle Footer Newsletter Submit
function handleFooterNewsletterSubmit(e) {
    e.preventDefault();
    const emailInput = e.target.querySelector('.footer-email-input');
    const email = emailInput.value.trim();
    
    if (email) {
        // Simulate API call
        setTimeout(() => {
            showToast('✅ Thank you for subscribing! Check your inbox for updates.', 'success');
            emailInput.value = '';
        }, 500);
    }
}

// Handle Load More
function handleLoadMore() {
    displayedArticles += 6;
    loadArticles();
    
    // Smooth scroll to new articles
    setTimeout(() => {
        const articles = document.querySelectorAll('.article-card');
        if (articles.length > displayedArticles - 6) {
            articles[displayedArticles - 6].scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    }, 100);
}

// Handle Category Click
function handleCategoryClick(e) {
    const clickedCard = e.currentTarget;
    const categoryName = clickedCard.querySelector('h3').textContent;
    
    // Remove active class from all category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => card.classList.remove('active'));
    
    // Add active class to clicked card
    clickedCard.classList.add('active');
    
    // Filter articles by category
    if (categoryName.includes('Security')) {
        currentArticles = articlesData.filter(a => a.category === 'Security');
    } else if (categoryName.includes('Improvement')) {
        currentArticles = articlesData.filter(a => a.category === 'Renovation');
    } else if (categoryName.includes('Energy')) {
        currentArticles = articlesData.filter(a => a.category === 'Energy');
    } else if (categoryName.includes('Maintenance')) {
        currentArticles = articlesData.filter(a => a.category === 'Maintenance');
    } else {
        currentArticles = [...articlesData];
    }
    
    displayedArticles = 8;
    loadArticles();
    
    // Scroll to articles section
    document.getElementById('articles').scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    showToast(`Showing ${categoryName} articles`, 'success');
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Setup Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Get target section
            const target = link.getAttribute('href');
            
            // Scroll to section
            if (target && target !== '#') {
                const section = document.querySelector(target);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
            // Close mobile menu
            const navLinksContainer = document.querySelector('.nav-links');
            navLinksContainer.classList.remove('active');
        });
    });
    
    // Highlight active section on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Open Article Modal
function openArticleModal(article) {
    const modal = document.getElementById('articleModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDate = document.getElementById('modalDate');
    const modalDuration = document.getElementById('modalDuration');
    const modalText = document.getElementById('modalText');
    
    // Populate modal with article data
    modalImage.src = article.image;
    modalImage.alt = article.title;
    modalTitle.textContent = article.title;
    modalCategory.textContent = article.category;
    modalDate.textContent = article.date;
    modalDuration.textContent = article.duration;
    modalText.textContent = article.content;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close Article Modal
function closeArticleModal() {
    const modal = document.getElementById('articleModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Setup Modal Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('articleModal');
    const modalClose = document.getElementById('modalClose');
    
    if (modal && modalClose) {
        // Close button
        modalClose.addEventListener('click', closeArticleModal);
        
        // Click outside modal to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeArticleModal();
            }
        });
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeArticleModal();
            }
        });
    }
});

// Show Toast Notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Footer social links reload page
document.querySelectorAll('.footer-social-reload').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        location.reload();
    });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Skip if it's a footer social reload link
        if (this.classList.contains('footer-social-reload')) {
            return;
        }
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

