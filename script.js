// script.js
// --- Bilingual Dictionary ---
const translations = {
  en: {
    brand: "Green View",
    "nav.about": "About", "nav.rooms": "Rooms", "nav.services": "Services", "nav.events": "Events",
    "nav.reviews": "Reviews", "nav.contact": "Contact Us", "nav.book": "Book Now",
    "hero.title": "Green View Hotel", "hero.sub": "Halaba Kulito, Central Ethiopia",
    "hero.desc": "A sanctuary of comfort, nature, and warm Ethiopian hospitality.",
    "hero.btn1": "Reserve Your Stay", "hero.btn2": "Discover More",
    "about.title": "Welcome to Green View Hotel",
    "about.p1": "Located in the vibrant town of <strong>Halaba Kulito</strong>, Green View Hotel offers modern luxury surrounded by natural beauty.",
    "about.p2": "Exceptional service, comfortable rooms, and unforgettable experiences await you.",
    "about.wifi": "Free High-Speed WiFi", "about.parking": "Free Parking",
    "about.restaurant": "Restaurant", "about.fitness": "Fitness Center",
    "rooms.title": "Our Rooms & Suites", "rooms.deluxe": "Deluxe Room", "rooms.deluxe.price": "$85 / night",
    "rooms.suite": "Executive Suite", "rooms.suite.price": "$145 / night",
    "rooms.family": "Family Room", "rooms.family.price": "$110 / night",
    "rooms.book": "Book Now",
    "services.title": "Our Services", "services.sub": "Premium hospitality and unforgettable experiences in Halaba Kulito. From comfortable stays to exceptional events, we take care of everything.",
    "events.title": "Celebrations & Events", "events.sub": "Perfect venue for weddings, conferences, and cultural celebrations.", "events.btn": "Plan Your Event",
    "reviews.title": "What Our Guests Say", "reviews.sub": "Real stories from happy guests at Green View Hotel.",
    "book.title": "Book Your Stay", "book.sub": "Instant availability check • Best rates guaranteed",
    "book.checkin": "Check-in Date", "book.checkout": "Check-out Date", "book.room": "Room Type",
    "book.deluxe": "Deluxe Room - $85/night", "book.executive": "Executive Suite - $145/night", "book.family": "Family Room - $110/night",
    "book.adults": "Adults", "book.adults2": "2 Adults", "book.adults1": "1 Adult", "book.adults3": "3 Adults", "book.adults4": "4 Adults",
    "book.children": "Children", "book.children0": "0 Children", "book.children1": "1 Child", "book.children2": "2 Children",
    "book.btn": "Check Availability & Book",
    "contact.title": "Get In Touch", "contact.sub": "Ready to experience the best of Halaba Kulito? Contact us today and let us create your perfect stay.",
    "contact.addr": "Halaba Kulito, Central Ethiopia", "contact.addr2": "Behind Stadium Main Road, To Market",
    "contact.phone2": "Available 24/7", "contact.email2": "We reply within 2 hours",
    "contact.name": "Full Name *", "contact.email": "Email Address *", "contact.phone": "Phone Number",
    "contact.service": "Interested Service", "contact.select": "Select a service",
    "contact.hotel": "Luxury Hotels", "contact.restaurant": "Restaurant & Café", "contact.pension": "Pension & Guesthouse",
    "contact.wedding": "Wedding & Events", "contact.meeting": "Meeting & Conference",
    "contact.parking": "Parking & Transport", "contact.tour": "Guided Tours", "contact.other": "Other",
    "contact.message": "Message *", "contact.send": "Send Message", "contact.privacy": "We respect your privacy. Your information is safe with us.",
    "footer.contact": "Contact Us", "footer.addr": "Halaba Kulito, Central Ethiopia", "footer.addr2": "Behind Stadium Main Road, To Market",
    "footer.links": "Quick Links", "footer.find": "Find Us", "footer.copyright": "© 2026 Green View Hotel • Halaba Kulito, Central Ethiopia",
    "footer.dev": "Developed with ❤️ by GechMan",
    "modal.close": "Close", "modal.success": "Booking Request Received!", "modal.msg": "We will contact you shortly."
  },
  am: {
    brand: "ግሪን ቪው",
    "nav.about": "ስለእኛ", "nav.rooms": "ክፍሎች", "nav.services": "አገልግሎቶች", "nav.events": "ዝግጅቶች",
    "nav.reviews": "አስተያየቶች", "nav.contact": "ያግኙን", "nav.book": "አሁን ይያዙ",
    "hero.title": "ግሪን ቪው ሆቴል", "hero.sub": "ሃላባ ቁሊቶ፣ ማዕከላዊ ኢትዮጵያ",
    "hero.desc": "የመፅናኛ፣ የተፈጥሮ እና የኢትዮጵያ እንግዳ ተቀባይነት መሸሸጊያ።",
    "hero.btn1": "ቆይታ ይያዙ", "hero.btn2": "ተጨማሪ ያውቁ",
    "about.title": "ወደ ግሪን ቪው ሆቴል እንኳን ደህና መጡ",
    "about.p1": "በሃላባ ቁሊቶ ንቁ ከተማ ውስጥ የሚገኘው ግሪን ቪው ሆቴል በተፈጥሮ ውበት የተከበበ ዘመናዊ የቅንጦት ማረፊያ ነው።",
    "about.p2": "ልዩ አገልግሎት፣ ምቹ ክፍሎች እና የማይረሱ ተሞክሮዎች ይጠብቁዎታል።",
    "about.wifi": "ነጻ ፈጣን ዋይፋይ", "about.parking": "ነጻ መኪና ማቆሚያ",
    "about.restaurant": "ሬስቶራንት", "about.fitness": "የአካል ብቃት ማዕከል",
    "rooms.title": "ክፍሎቻችን እና ስዊቶች", "rooms.deluxe": "ዲሉክስ ክፍል", "rooms.deluxe.price": "$85 / ሌሊት",
    "rooms.suite": "ኤግዚክዩቲቭ ስዊት", "rooms.suite.price": "$145 / ሌሊት",
    "rooms.family": "ቤተሰብ ክፍል", "rooms.family.price": "$110 / ሌሊት",
    "rooms.book": "አሁን ይያዙ",
    "services.title": "አገልግሎቶቻችን", "services.sub": "በሃላባ ቁሊቶ ውስጥ ከፍተኛ እንግዳ ተቀባይነት እና የማይረሱ ተሞክሮዎች። ምቹ ቆይታ እስከ ልዩ ዝግጅቶች ድረስ ሁሉንም እንከባከባለን።",
    "events.title": "ክብረ በዓላት እና ዝግጅቶች", "events.sub": "ለሠርግ፣ ለኮንፈረንስ እና ለባህላዊ ክብረ በዓላት ፍጹም ቦታ።", "events.btn": "ዝግጅትዎን ያቅዱ",
    "reviews.title": "እንግዶቻችን ምን ይላሉ", "reviews.sub": "በግሪን ቪው ሆቴል ከደስተኛ እንግዶች እውነተኛ ታሪኮች።",
    "book.title": "ቆይታዎን ያስመዝግቡ", "book.sub": "ፈጣን መገኘት ማረጋገጫ • ምርጥ ዋጋ የተረጋገጠ",
    "book.checkin": "የመግቢያ ቀን", "book.checkout": "የመውጫ ቀን", "book.room": "የክፍል አይነት",
    "book.deluxe": "ዲሉክስ ክፍል - $85/ሌሊት", "book.executive": "ኤግዚክዩቲቭ ስዊት - $145/ሌሊት", "book.family": "ቤተሰብ ክፍል - $110/ሌሊት",
    "book.adults": "ጎልማሶች", "book.adults2": "2 ጎልማሶች", "book.adults1": "1 ጎልማሳ", "book.adults3": "3 ጎልማሶች", "book.adults4": "4 ጎልማሶች",
    "book.children": "ልጆች", "book.children0": "0 ልጆች", "book.children1": "1 ልጅ", "book.children2": "2 ልጆች",
    "book.btn": "መገኘት ያረጋግጡ እና ያስመዝግቡ",
    "contact.title": "ያግኙን", "contact.sub": "የሃላባ ቁሊቶን ምርጥ ልምድ ለመቀበል ዝግጁ ነዎት? ዛሬ ያግኙን እና ፍጹም ቆይታዎን እንፍጠርልዎት።",
    "contact.addr": "ሃላባ ቁሊቶ፣ማዕከላዊ ኢትዮጵያ", "contact.addr2": "ከ ስታድየም በስታጀርባ ወደ ገበያ ዋና መንገድ",
    "contact.phone2": "24/7 ይገኛል", "contact.email2": "በ2 ሰዓት ውስጥ እንመልሳለን",
    "contact.name": "ሙሉ ስም *", "contact.email": "ኢሜይል አድራሻ *", "contact.phone": "ስልክ ቁጥር",
    "contact.service": "የሚፈልጉት አገልግሎት", "contact.select": "አገልግሎት ይምረጡ",
    "contact.hotel": "የቅንጦት ሆቴሎች", "contact.restaurant": "ሬስቶራንት እና ካፌ", "contact.pension": "ፔንሽን እና ገስት ሃውስ",
    "contact.wedding": "ሠርግ እና ዝግጅቶች", "contact.meeting": "ስብሰባ እና ኮንፈረንስ",
    "contact.parking": "መኪና ማቆሚያ እና መጓጓዣ", "contact.tour": "መመሪያ ጉብኝቶች", "contact.other": "ሌላ",
    "contact.message": "መልእክት *", "contact.send": "መልእክት ላክ", "contact.privacy": "ግላዊነትዎን እናከብራለን። መረጃዎ ከእኛ ጋር ደህንነቱ የተጠበቀ ነው።",
    "footer.contact": "ያግኙን", "footer.addr": "ሃላባ ቁሊቶ፣ማዕከላዊ ኢትዮጵያ", "footer.addr2": "ከ ስታድየም በስታጀርባ ወደ ገበያ ዋና መንገድ",
    "footer.links": "ፈጣን አገናኞች", "footer.find": "ያግኙን", "footer.copyright": "© 2026 ግሪን ቪው ሆቴል • ሃላባ ቁሊቶ፣ማዕከላዊ ኢትዮጵያ",
    "footer.dev": "በጌችማን በፍቅር የተሰራ",
    "modal.close": "ዝጋ", "modal.success": "የቦኪንግ ጥያቄ ተቀብለናል!", "modal.msg": "በቅርቡ እናገኝዎታለን።"
  }
};

let currentLang = 'en';

// --- Core translation function ---
function setLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];
  
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (dict[key] !== undefined) {
      if (el.tagName === 'OPTION') {
        el.textContent = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  document.getElementById('langLabel').textContent = lang === 'en' ? '🇪🇹 አማርኛ' : '🇬🇧 English';
  document.getElementById('mobileLangLabel').textContent = lang === 'en' ? '🇪🇹 አማርኛ' : '🇬🇧 English';
  
  renderServices(lang);
  localStorage.setItem('gv_lang', lang);
}

function toggleLanguage() {
  const next = currentLang === 'en' ? 'am' : 'en';
  setLanguage(next);
}

// --- Slider ---
let slideIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.slider-dot');

function changeSlide(index) {
  slides.forEach((s, i) => s.classList.toggle('opacity-0', i !== index));
  dots.forEach((d, i) => d.classList.toggle('bg-white/50', i !== index));
  dots.forEach((d, i) => d.classList.toggle('bg-white', i === index));
  slideIndex = index;
}

function nextSlide() { changeSlide((slideIndex + 1) % slides.length); }
setInterval(nextSlide, 5000);

// --- Services data ---
const services = [
  { 
    id: 1,
    icon: 'fa-bed', 
    title_en: 'Luxury Accommodation', 
    desc_en: 'Comfortable rooms with modern amenities and stunning views.', 
    title_am: 'የቅንጦት ማረፊያ', 
    desc_am: 'ዘመናዊ መገልገያዎች እና አስደናቂ እይታዎች ያሉት ምቹ ክፍሎች።',
    features: ["King beds", "Mini bar", "Balcony", "24/7 Service"]
  },
  { 
    id: 2,
    icon: 'fa-utensils', 
    title_en: 'Restaurant & Bar', 
    desc_en: 'Local and international cuisine, freshly prepared every day.', 
    title_am: 'ሬስቶራንት እና ባር', 
    desc_am: 'የሀገር ውስጥ እና ዓለም አቀፍ ምግቦች፣ በየቀኑ ትኩስ የሚዘጋጁ።',
    features: ["Local specialties", "Vegetarian options", "Live music", "Private dining"]
  },
  { 
    id: 3,
    icon: 'fa-wifi', 
    title_en: 'Free High-Speed WiFi', 
    desc_en: 'Stay connected with complimentary high-speed internet.', 
    title_am: 'ነጻ ፈጣን ዋይፋይ', 
    desc_am: 'በነጻ ፈጣን የበይነመረብ አገልግሎት ይገናኙ።',
    features: ["High-speed internet", "Business center", "Smart TVs", "Tech support"]
  },
  { 
    id: 4,
    icon: 'fa-dumbbell', 
    title_en: 'Fitness Center', 
    desc_en: 'Modern gym with cardio and strength training equipment.', 
    title_am: 'የአካል ብቃት ማዕከል', 
    desc_am: 'ዘመናዊ ጂም ከካርዲዮ እና ጥንካሬ ስልጠና መሳሪያዎች ጋር።',
    features: ["Cardio machines", "Free weights", "Personal trainer", "Sauna"]
  },
  { 
    id: 5,
    icon: 'fa-spa', 
    title_en: 'Spa & Wellness', 
    desc_en: 'Relax and rejuvenate with our spa treatments.', 
    title_am: 'ስፓ እና ዌልነስ', 
    desc_am: 'በስፓ ህክምናዎቻችን ዘና ይበሉ እና ያድሱ።',
    features: ["Massage therapy", "Facial treatments", "Hydrotherapy", "Wellness programs"]
  },
  { 
    id: 6,
    icon: 'fa-car', 
    title_en: 'Free Parking', 
    desc_en: 'Safe and secure parking for all our guests.', 
    title_am: 'ነጻ መኪና ማቆሚያ', 
    desc_am: 'ለሁሉም እንግዶቻችን ደህንነቱ የተጠበቀ መኪና ማቆሚያ።',
    features: ["24/7 security", "EV charging", "Airport shuttle", "Car wash"]
  },
  { 
    id: 7,
    icon: 'fa-conference', 
    title_en: 'Conference Hall', 
    desc_en: 'Modern facilities for meetings and events.', 
    title_am: 'ኮንፈረንስ አዳራሽ', 
    desc_am: 'ለስብሰባ እና ዝግጅቶች ዘመናዊ መገልገያዎች።',
    features: ["AV equipment", "Catering", "Breakout rooms", "Whiteboard"]
  },
  { 
    id: 8,
    icon: 'fa-child', 
    title_en: 'Family Friendly', 
    desc_en: 'Special amenities for families with children.', 
    title_am: 'ለቤተሰብ ተስማሚ', 
    desc_am: 'ልጆች ላሏቸው ቤተሰቦች ልዩ መገልገያዎች።',
    features: ["Kids club", "Family rooms", "Childcare", "Playground"]
  }
];

function renderServices(lang) {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = '';
  
  services.forEach((s) => {
    const title = lang === 'en' ? s.title_en : s.title_am;
    const desc = lang === 'en' ? s.desc_en : s.desc_am;
    const card = document.createElement('div');
    card.className = 'service-card group cursor-pointer p-8';
    card.innerHTML = `
      <div class="service-icon text-6xl mb-6 transition-all"><i class="fa-solid ${s.icon}"></i></div>
      <h3 class="text-2xl font-semibold text-emerald-900 mb-3">${title}</h3>
      <p class="text-emerald-600 mb-6">${desc}</p>
      <div class="flex items-center justify-between text-sm">
        <span class="text-emerald-700 hover:text-emerald-800 font-medium flex items-center gap-2">
          Learn more
          <span class="text-lg leading-none">→</span>
        </span>
        <div class="w-9 h-9 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl">
          <i class="fa-solid ${s.icon}"></i>
        </div>
      </div>
    `;
    card.onclick = () => openModal(s.id);
    grid.appendChild(card);
  });
}

function openModal(id) {
  const s = services.find(service => service.id === id);
  if (!s) return;
  
  const lang = currentLang;
  const title = lang === 'en' ? s.title_en : s.title_am;
  const desc = lang === 'en' ? s.desc_en : s.desc_am;
  const features = s.features;
  
  document.getElementById('modal-content').innerHTML = `
    <div class="flex items-center gap-4 mb-6">
      <div class="text-6xl"><i class="fa-solid ${s.icon}"></i></div>
      <div>
        <h3 class="text-3xl font-bold text-emerald-900">${title}</h3>
        <p class="text-emerald-600">${desc}</p>
      </div>
    </div>
    <p class="text-gray-700 leading-relaxed mb-8">${desc}</p>
    <div class="bg-emerald-50 rounded-2xl p-6 mb-8">
      <h4 class="font-semibold text-emerald-800 mb-4">${lang === 'en' ? "What's Included:" : "የተካተቱ ነገሮች:"}</h4>
      <ul class="grid grid-cols-2 gap-3 text-sm">
        ${features.map(feature => `
          <li class="flex items-center gap-2">
            <span class="text-emerald-500">✓</span>
            <span>${feature}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
  document.getElementById('service-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('service-modal').classList.add('hidden');
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('gv_lang') || 'en';
  setLanguage(savedLang);

  // Event Listeners
  document.getElementById('langToggle').addEventListener('click', toggleLanguage);
  document.getElementById('mobileLangToggle').addEventListener('click', toggleLanguage);

  // Mobile menu toggle
  document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.toggle('hidden');
  });

  // Smooth scrolling
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('mobileMenu').classList.add('hidden');
      }
    });
  });

  // Scroll animations
  const fadeElements = document.querySelectorAll('.section-fade');
  function checkVisibility() {
    fadeElements.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', checkVisibility);
  checkVisibility();

  // Booking form
  document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('modalMessage').textContent = currentLang === 'en' ? 'We will contact you shortly.' : 'በቅርቡ እናገኝዎታለን።';
    document.getElementById('successModal').classList.remove('hidden');
    this.reset();
  });

  // Contact form
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert(currentLang === 'en' ? 'Thank you! We will get back to you soon.' : 'እናመሰግናለን! በቅርቡ እናገኝዎታለን።');
    this.reset();
  });

  // Close modals on backdrop click
  document.getElementById('service-modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  
  document.getElementById('successModal').addEventListener('click', function(e) {
    if (e.target === this) hideSuccessModal();
  });

  // Keyboard escape support
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      const modal = document.getElementById('service-modal');
      if (!modal.classList.contains('hidden')) closeModal();
    }
  });
});

function hideSuccessModal() {
  document.getElementById('successModal').classList.add('hidden');
}

// Make functions globally accessible
window.changeSlide = changeSlide;
window.closeModal = closeModal;
window.hideSuccessModal = hideSuccessModal;