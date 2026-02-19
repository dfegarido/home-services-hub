// Sample Article Data
var articlesData = [
    {
        id: 1,
        title: "Top 5 Smart Home Security Systems for 2026",
        excerpt: "Discover the best smart home security systems that offer advanced features, reliable protection, and seamless integration.",
        category: "Security",
        date: "Feb 15, 2026",
        image: "https://i.ytimg.com/vi/EaV74R2rMwk/hqdefault.jpg",
        duration: "12:45",
        content: "In today's digital age, protecting your home has never been more important. Smart home security systems offer advanced features that go beyond traditional alarm systems. Our comprehensive review covers the top 5 security systems for 2026.\n\nKey features to consider:\n- 24/7 Professional monitoring\n- Mobile app control and notifications\n- Video surveillance with cloud storage\n- Smart home integration\n- Motion detection and smart alerts"
    },
    {
        id: 2,
        title: "Complete Guide to Kitchen Remodeling",
        excerpt: "Transform your kitchen with expert tips on layout, materials, and budget planning for your dream renovation.",
        category: "Renovation",
        date: "Feb 14, 2026",
        image: "https://i.ytimg.com/vi/QJR-IVC6vXs/hqdefault.jpg",
        duration: "15:30",
        content: "Kitchen remodeling is one of the most rewarding home improvement projects you can undertake. This comprehensive guide walks you through every step of the process.\n\nPlanning Your Kitchen Remodel:\n- Assess your needs and lifestyle\n- Set a realistic budget\n- Choose the right layout\n- Select durable materials and finishes\n- Plan for proper lighting and ventilation"
    },
    {
        id: 3,
        title: "Solar Panel Installation: What You Need to Know",
        excerpt: "Everything about solar panel installation, costs, benefits, and how to choose the right system for your home.",
        category: "Energy",
        date: "Feb 13, 2026",
        image: "https://i.ytimg.com/vi/yjAU5mflg7E/hqdefault.jpg",
        duration: "18:22",
        content: "Solar energy is becoming increasingly affordable and accessible for homeowners. This guide covers everything you need to know about installing solar panels on your home.\n\nWhat You will Learn:\n- Understanding solar panel technology and efficiency ratings\n- Average installation costs before incentives\n- Federal tax credits and state rebates\n- Roof requirements and orientation considerations\n- Expected ROI and payback period"
    },
    {
        id: 4,
        title: "DIY Home Maintenance Checklist for Every Season",
        excerpt: "Keep your home in top condition with this comprehensive seasonal maintenance checklist for homeowners.",
        category: "Maintenance",
        date: "Feb 12, 2026",
        image: "https://i.ytimg.com/vi/M2Sh1IRC7Gs/hqdefault.jpg",
        duration: "10:15",
        content: "Regular home maintenance prevents costly repairs and keeps your property in top condition year-round. Our seasonal checklist makes it easy to stay on top of essential tasks.\n\nSpring Tasks:\n- Inspect roof and gutters\n- Service HVAC system\n- Check exterior paint and siding\n\nSummer Tasks:\n- Inspect and clean deck/patio\n- Check irrigation system\n\nFall Tasks:\n- Clean gutters and downspouts\n- Winterize outdoor faucets\n- Check weatherstripping\n\nWinter Tasks:\n- Monitor for ice dams\n- Check insulation\n- Test smoke and CO detectors"
    },
    {
        id: 5,
        title: "Beautiful Bathroom Vanity",
        excerpt: "Transform your bathroom with stunning vanity designs. Explore modern styles, storage solutions, and installation tips.",
        category: "Home Improvement",
        date: "Feb 11, 2026",
        image: "https://i.ytimg.com/vi/a4XKLHQNCag/hqdefault.jpg",
        duration: "14:08",
        content: "A beautiful bathroom vanity can completely transform your bathroom space. Discover the latest trends and practical tips for choosing and installing the perfect vanity.\n\nKey Considerations:\n- Size and layout to fit your space\n- Single vs double sink options\n- Modern, traditional, or rustic styles\n- Storage solutions\n- Countertop materials\n- Integrated lighting and mirrors"
    },
    {
        id: 6,
        title: "Beautiful Before and After Kitchen Remodel",
        excerpt: "See stunning kitchen transformations! From outdated spaces to modern dream kitchens with incredible results.",
        category: "Renovation",
        date: "Feb 10, 2026",
        image: "https://i.ytimg.com/vi/knAyEr5FRIc/hqdefault.jpg",
        duration: "11:55",
        content: "Witness the incredible transformation of a dated kitchen into a stunning modern space. This before and after showcase demonstrates the power of thoughtful design.\n\nKey Features of the Transformation:\n- Complete cabinet replacement\n- Modern quartz countertops\n- New stainless steel appliance package\n- Open concept layout for better flow\n- Contemporary lighting fixtures"
    },
    {
        id: 7,
        title: "My AHS Story Ramon and Alex | American Home Shield",
        excerpt: "Discover how Ramon and Alex found peace of mind with American Home Shield's home warranty coverage.",
        category: "Home Maintenance",
        date: "Feb 9, 2026",
        image: "https://i.ytimg.com/vi/nJ_HrrTsO8U/hqdefault.jpg",
        duration: "13:40",
        content: "Ramon and Alex share their story about the significance of having a reliable home warranty service.\n\nKey Benefits of Home Warranties:\n- Avoid high replacement costs for appliances\n- Smooth and efficient scheduling via app-based tools\n- Quick service intervention when needed\n- Peace of mind for unexpected repairs\n- Regular inspection and maintenance support"
    },
    {
        id: 8,
        title: "Remodel Regrets: Avoid These Design Mistakes",
        excerpt: "Avoid common remodeling pitfalls with expert planning tips. Save time, money, and regret with thoughtful guidance.",
        category: "Home Improvement",
        date: "Feb 8, 2026",
        image: "https://i.ytimg.com/vi/V2ZxtQc7bMg/hqdefault.jpg",
        duration: "9:33",
        content: "Remodeling your home can be exciting but challenging. Thoughtful planning and expert guidance can save you time, money, and regret.\n\nCommon Mistakes to Avoid:\n- Jumping into renovations without a detailed plan\n- Skipping professional contractor consultations\n- Failing to optimize living spaces\n- Ignoring long-term design implications\n- DIY-ing electrical, plumbing, or structural work"
    },
    {
        id: 9,
        title: "Smart Lighting Systems: A Buyer Guide",
        excerpt: "Illuminate your home intelligently with the best smart lighting systems that offer convenience and energy savings.",
        category: "Smart Home",
        date: "Feb 7, 2026",
        image: "https://i.ytimg.com/vi/rhImhkHUNSc/hqdefault.jpg",
        duration: "16:20",
        content: "Smart lighting transforms your home with convenience, ambiance, and energy savings. Our comprehensive buyer guide helps you choose the perfect smart lighting system.\n\nSmart Lighting Benefits:\n- Control lights from anywhere via smartphone\n- Voice control with Alexa, Google Assistant, or Siri\n- Create custom schedules and automation\n- Adjust brightness and color temperature\n- Energy monitoring and savings"
    },
    {
        id: 10,
        title: "Basement Finishing Ideas on a Budget",
        excerpt: "Transform your basement into a functional living space with these creative and budget-friendly finishing ideas.",
        category: "Renovation",
        date: "Feb 6, 2026",
        image: "https://i.ytimg.com/vi/M0VdrqELhS4/hqdefault.jpg",
        duration: "20:12",
        content: "Maximize your home square footage by finishing your basement on a budget. Discover creative ideas that add value without breaking the bank.\n\nBudget-Friendly Ideas:\n- Paint concrete floors instead of expensive flooring\n- Use moisture-resistant drywall for walls\n- Install drop ceiling with removable tiles\n- Add recessed lighting for modern look\n- Create a multi-purpose space"
    },
    {
        id: 11,
        title: "Outdoor Security Camera Installation Tips",
        excerpt: "Position and install outdoor security cameras effectively to maximize coverage and protect your property.",
        category: "Security",
        date: "Feb 5, 2026",
        image: "https://i.ytimg.com/vi/AC_qrwiYXHE/hqdefault.jpg",
        duration: "8:45",
        content: "Proper outdoor security camera placement and installation is crucial for effective home protection. Follow our expert tips to maximize coverage.\n\nKey Installation Locations:\n- Front door and entrance areas\n- Driveway and garage\n- Backyard and side yards\n- Windows on ground level\n\nInstallation Best Practices:\n- Mount cameras 8-10 feet high\n- Angle cameras to cover entry points\n- Ensure cameras have clear line of sight"
    },
    {
        id: 12,
        title: "HVAC Maintenance: Keep Your System Running",
        excerpt: "Essential HVAC maintenance tips to ensure optimal performance, efficiency, and longevity of your system.",
        category: "Maintenance",
        date: "Feb 4, 2026",
        image: "https://i.ytimg.com/vi/8nkUOp6GGys/hqdefault.jpg",
        duration: "12:18",
        content: "Regular HVAC maintenance extends system life, improves efficiency, and prevents costly breakdowns.\n\nMonthly Tasks:\n- Check and change air filters\n- Inspect thermostat operation\n- Clear debris around outdoor unit\n\nSeasonal Maintenance:\n- Clean outdoor condenser coils\n- Check refrigerant levels\n- Inspect ductwork for leaks\n- Test system performance"
    },
    {
        id: 13,
        title: "Smart Thermostat Installation Guide",
        excerpt: "Learn how to install and program a smart thermostat to optimize your home's climate control and save energy.",
        category: "Smart Home",
        date: "Feb 3, 2026",
        image: "https://i.ytimg.com/vi/pZhluVOhiG8/hqdefault.jpg",
        duration: "11:30",
        content: "Smart thermostats can save you money while improving comfort. Our step-by-step guide makes installation and programming simple.\n\nInstallation Steps:\n1. Turn off power at breaker\n2. Remove old thermostat and label wires\n3. Install mounting plate\n4. Connect wires to new thermostat\n5. Attach display and restore power\n6. Connect to Wi-Fi and configure app"
    },
    {
        id: 14,
        title: "Garage Door Repair and Maintenance",
        excerpt: "Keep your garage door operating smoothly with these essential repair tips and maintenance schedules.",
        category: "Maintenance",
        date: "Feb 2, 2026",
        image: "https://i.ytimg.com/vi/J8efDwkhKGc/hqdefault.jpg",
        duration: "14:25",
        content: "Your garage door is one of the most-used entry points in your home. Regular maintenance prevents problems and extends its lifespan.\n\nCommon Issues and Fixes:\n- Door will not open: Check remote batteries, power source\n- Noisy operation: Lubricate hinges, rollers, and tracks\n- Door reverses before closing: Adjust force settings\n- Uneven closing: Check spring tension\n\nSafety Note: Never attempt to repair garage door springs yourself."
    },
    {
        id: 15,
        title: "Home Office Design Ideas",
        excerpt: "Create a productive and stylish home office space with these innovative design ideas and organization tips.",
        category: "Renovation",
        date: "Feb 1, 2026",
        image: "https://i.ytimg.com/vi/EaV74R2rMwk/hqdefault.jpg",
        duration: "17:10",
        content: "With remote work becoming more common, a well-designed home office is essential for productivity and work-life balance.\n\nEssential Elements:\n- Ergonomic desk and chair\n- Proper lighting\n- Organized storage solutions\n- Technology setup\n- Soundproofing or noise reduction\n\nLayout Ideas:\n- Dedicated room with door for privacy\n- Corner office in bedroom or living room\n- Converted closet office"
    },
    {
        id: 16,
        title: "Water Heater Installation and Troubleshooting",
        excerpt: "Everything you need to know about water heater types, installation, and common troubleshooting solutions.",
        category: "Maintenance",
        date: "Jan 31, 2026",
        image: "https://i.ytimg.com/vi/QJR-IVC6vXs/hqdefault.jpg",
        duration: "19:05",
        content: "Water heaters are essential for daily comfort. Understand the different types, installation process, and how to troubleshoot common problems.\n\nWater Heater Types:\n- Tank Storage: Most affordable option\n- Tankless On-Demand: Energy efficient\n- Heat Pump: Very efficient\n- Solar: Eco-friendly\n\nCommon Problems and Solutions:\n- No hot water: Check pilot light or circuit breaker\n- Insufficient hot water: Adjust temperature or flush tank"
    },
    {
        id: 17,
        title: "Home Automation Systems Explained",
        excerpt: "Discover how home automation systems work and which smart devices are essential for modern living.",
        category: "Smart Home",
        date: "Jan 30, 2026",
        image: "https://i.ytimg.com/vi/yjAU5mflg7E/hqdefault.jpg",
        duration: "16:45",
        content: "Home automation makes your house smarter, more efficient, and more secure. Our comprehensive guide explains how these systems work.\n\nCore Components:\n- Smart hub or controller\n- Smart speakers\n- Smartphone app for remote control\n- Wi-Fi network\n\nEssential Smart Devices:\n- Smart thermostat\n- Smart lighting\n- Smart locks\n- Smart security cameras\n- Smart doorbell"
    },
    {
        id: 18,
        title: "Roof Inspection and Repair Guide",
        excerpt: "Protect your home with regular roof inspections and learn how to identify and fix common roofing issues.",
        category: "Maintenance",
        date: "Jan 29, 2026",
        image: "https://i.ytimg.com/vi/M2Sh1IRC7Gs/hqdefault.jpg",
        duration: "15:20",
        content: "Your roof is your home first line of defense against the elements. Regular inspections and timely repairs prevent costly damage.\n\nInspection Checklist:\n- Missing, cracked, or curling shingles\n- Damaged flashing around chimneys\n- Sagging areas or uneven surfaces\n- Moss, algae, or debris buildup\n- Gutter condition and drainage\n\nInspection Schedule:\n- Biannual inspections in spring and fall\n- After major storms\n- Professional inspection every 3 years"
    }
];

// State
var displayedArticles = 8;
var currentArticles = [];

// Theme Management
function initializeTheme() {
    var savedTheme = 'light';
    try { savedTheme = localStorage.getItem('theme') || 'light'; } catch(err) {}
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    var currentTheme = document.documentElement.getAttribute('data-theme');
    var newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    try { localStorage.setItem('theme', newTheme); } catch(err) {}
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();

    if (document.getElementById('articlesGrid')) {
        initializeArticles();
    }

    setupEventListeners();
    setupNavigation();
});

// Initialize Articles
function initializeArticles() {
    currentArticles = articlesData.slice();
    loadArticles();
}

// Load Articles
function loadArticles() {
    var articlesGrid = document.getElementById('articlesGrid');
    var loadMoreBtn = document.getElementById('loadMoreBtn');
    var buttonContainer = document.getElementById('load-more-container');
    
    if (!articlesGrid || !loadMoreBtn) return;
    
    // Clear grid
    articlesGrid.innerHTML = '';
    
    // Load displayed articles
    var articlesToShow = currentArticles.slice(0, displayedArticles);
    
    articlesToShow.forEach(function(article, index) {
        var articleCard = createArticleCard(article);
        articleCard.style.animationDelay = (index * 0.1) + 's';
        articlesGrid.appendChild(articleCard);
    });
    
    // Show/hide load more button - force visibility with !important
    if (displayedArticles >= currentArticles.length) {
        loadMoreBtn.style.display = 'none';
        if (buttonContainer) buttonContainer.style.display = 'none';
    } else {
        loadMoreBtn.style.setProperty('display', 'inline-block', 'important');
        loadMoreBtn.style.setProperty('visibility', 'visible', 'important');
        loadMoreBtn.style.setProperty('opacity', '1', 'important');
        if (buttonContainer) {
            buttonContainer.style.setProperty('display', 'block', 'important');
            buttonContainer.style.setProperty('visibility', 'visible', 'important');
        }
    }
}

// Create Article Card
function createArticleCard(article) {
    var card = document.createElement('div');
    card.className = 'article-card';
    
    // Build thumbnail section using DOM methods (avoids innerHTML HTML patterns)
    var thumbnail = document.createElement('div');
    thumbnail.className = 'article-thumbnail';

    var img = document.createElement('img');
    img.src = article.image;
    img.alt = article.title;
    img.className = 'thumbnail-image';

    var overlay = document.createElement('div');
    overlay.className = 'video-overlay';

    var playBtn = document.createElement('div');
    playBtn.className = 'play-button';
    overlay.appendChild(playBtn);

    var durationEl = document.createElement('div');
    durationEl.className = 'video-duration';
    durationEl.textContent = article.duration;

    thumbnail.appendChild(img);
    thumbnail.appendChild(overlay);
    thumbnail.appendChild(durationEl);

    // Build content section
    var content = document.createElement('div');
    content.className = 'article-content';

    var titleEl = document.createElement('h3');
    titleEl.className = 'article-title';
    titleEl.textContent = article.title;

    var excerptEl = document.createElement('p');
    excerptEl.className = 'article-excerpt';
    excerptEl.textContent = article.excerpt;

    var meta = document.createElement('div');
    meta.className = 'article-meta';

    var readMore = document.createElement('a');
    readMore.href = '#';
    readMore.className = 'read-more';
    readMore.textContent = 'Read article';

    meta.appendChild(readMore);
    content.appendChild(titleEl);
    content.appendChild(excerptEl);
    content.appendChild(meta);

    card.appendChild(thumbnail);
    card.appendChild(content);
    
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
    var themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    var newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    var footerNewsletterForm = document.getElementById('footerNewsletterForm');
    if (footerNewsletterForm) {
        footerNewsletterForm.addEventListener('submit', handleFooterNewsletterSubmit);
    }

    var loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', handleLoadMore);
    }

    var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    var categoryCards = document.querySelectorAll('.category-card');
    if (categoryCards.length > 0) {
        categoryCards.forEach(function(card) {
            card.addEventListener('click', handleCategoryClick);
        });
    }
}

// Handle Newsletter Submit
function handleNewsletterSubmit(e) {
    e.preventDefault();
    var emailInput = document.getElementById('emailInput');
    if (!emailInput) { return; }
    var email = emailInput.value.trim();
    if (email) {
        setTimeout(function() {
            showToast('Successfully subscribed! Welcome to Home Services Hub.', 'success');
            emailInput.value = '';
        }, 500);
    }
}

// Handle Footer Newsletter Submit
function handleFooterNewsletterSubmit(e) {
    e.preventDefault();
    var emailInput = e.target.querySelector('.footer-email-input');
    if (!emailInput) { return; }
    var email = emailInput.value.trim();
    if (email) {
        setTimeout(function() {
            showToast('Thank you for subscribing! Check your inbox for updates.', 'success');
            emailInput.value = '';
        }, 500);
    }
}

// Handle Load More
function handleLoadMore() {
    displayedArticles += 6;
    loadArticles();
    setTimeout(function() {
        var articles = document.querySelectorAll('.article-card');
        if (articles.length > displayedArticles - 6) {
            articles[displayedArticles - 6].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
}

// Handle Category Click
function handleCategoryClick(e) {
    var clickedCard = e.currentTarget;
    var h3 = clickedCard.querySelector('h3');
    var categoryName = h3 ? h3.textContent : '';

    var categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(function(card) { card.classList.remove('active'); });
    clickedCard.classList.add('active');

    if (categoryName.indexOf('Security') !== -1) {
        currentArticles = articlesData.filter(function(a) { return a.category === 'Security'; });
    } else if (categoryName.indexOf('Improvement') !== -1) {
        currentArticles = articlesData.filter(function(a) { return a.category === 'Renovation'; });
    } else if (categoryName.indexOf('Energy') !== -1) {
        currentArticles = articlesData.filter(function(a) { return a.category === 'Energy'; });
    } else if (categoryName.indexOf('Maintenance') !== -1) {
        currentArticles = articlesData.filter(function(a) { return a.category === 'Maintenance'; });
    } else {
        currentArticles = articlesData.slice();
    }

    displayedArticles = 8;
    loadArticles();

    var articlesSection = document.getElementById('articles');
    if (articlesSection) {
        articlesSection.scrollIntoView({ behavior: 'smooth' });
    }
    showToast('Showing ' + categoryName + ' articles', 'success');
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    var navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Setup Navigation
function setupNavigation() {
    var navLinks = document.querySelectorAll('.nav-link');
    if (!navLinks.length) { return; }

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            navLinks.forEach(function(l) { l.classList.remove('active'); });
            link.classList.add('active');

            var target = link.getAttribute('href');
            if (target && target !== '#') {
                var section = document.querySelector(target);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }

            var navLinksContainer = document.querySelector('.nav-links');
            if (navLinksContainer) {
                navLinksContainer.classList.remove('active');
            }
        });
    });

    window.addEventListener('scroll', function() {
        var current = '';
        var sections = document.querySelectorAll('section[id]');

        sections.forEach(function(section) {
            if (window.pageYOffset >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Open Article Modal
function openArticleModal(article) {
    var modal = document.getElementById('articleModal');
    var modalImage = document.getElementById('modalImage');
    var modalTitle = document.getElementById('modalTitle');
    var modalCategory = document.getElementById('modalCategory');
    var modalDate = document.getElementById('modalDate');
    var modalDuration = document.getElementById('modalDuration');
    var modalText = document.getElementById('modalText');

    if (!modal || !modalImage || !modalTitle) { return; }

    modalImage.src = article.image;
    modalImage.alt = article.title;
    modalTitle.textContent = article.title;
    if (modalCategory) { modalCategory.textContent = article.category; }
    if (modalDate) { modalDate.textContent = article.date; }
    if (modalDuration) { modalDuration.textContent = article.duration; }
    if (modalText) { modalText.textContent = article.content; }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Article Modal
function closeArticleModal() {
    var modal = document.getElementById('articleModal');
    if (!modal) { return; }
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Setup Modal Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('articleModal');
    var modalClose = document.getElementById('modalClose');

    if (modal && modalClose) {
        modalClose.addEventListener('click', closeArticleModal);

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeArticleModal();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeArticleModal();
            }
        });
    }
});

// Show Toast Notification
function showToast(message, type) {
    if (!type) { type = 'success'; }
    var toast = document.getElementById('toast');
    if (!toast) { return; }
    toast.textContent = message;
    toast.className = 'toast ' + type + ' show';
    setTimeout(function() {
        toast.classList.remove('show');
    }, 3000);
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    var navLinks = document.querySelector('.nav-links');
    var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (navLinks && mobileMenuBtn) {
    if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
        }
    }
});

// Footer social links reload page and smooth scroll - run after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.footer-social-reload').forEach(function(link) {
        link.addEventListener('click', function(e) {
        e.preventDefault();
        location.reload();
    });
});

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
        if (this.classList.contains('footer-social-reload')) {
            return;
        }
            if (href && href !== '#' && document.querySelector(href)) {
            e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
            });
    });
});

