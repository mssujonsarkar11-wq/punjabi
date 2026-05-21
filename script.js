/* =============================================
   রাজকীয় পাঞ্জাবি — Main Script
   ============================================= */

'use strict';

// =============================================
// CONFIGURATION — Replace with real values
// =============================================
const CONFIG = {
  TELEGRAM_BOT_TOKEN: 'YOUR_BOT_TOKEN',
  TELEGRAM_CHAT_ID:   'YOUR_CHAT_ID',
  GOOGLE_FORM_ACTION: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse',
  GOOGLE_FORM_FIELDS: {
    productName: 'entry.XXXXXXXXX',
    color:       'entry.XXXXXXXXX',
    size:        'entry.XXXXXXXXX',
    quantity:    'entry.XXXXXXXXX',
    custName:    'entry.XXXXXXXXX',
    phone:       'entry.XXXXXXXXX',
    address:     'entry.XXXXXXXXX',
    district:    'entry.XXXXXXXXX',
    deliveryArea:'entry.XXXXXXXXX',
    totalPrice:  'entry.XXXXXXXXX',
  }
};

// =============================================
// PRODUCT DATA
// =============================================
const PRODUCTS = [
  {
    id: 1,
    name: 'রাজকীয় সিল্ক পাঞ্জাবি',
    category: 'প্রিমিয়াম সিল্ক',
    price: 1490,
    oldPrice: 2200,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4b4f8b?w=600&q=80',
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
    ],
    colors: [
      { name: 'সাদা',    hex: '#f5f5f5' },
      { name: 'কালো',   hex: '#1a1a1a' },
      { name: 'ক্রিম',   hex: '#f5deb3' },
      { name: 'নেভি',    hex: '#1e3a5f' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 13,
    badge: 'হট সেল',
    isFeatured: true,
  },
  {
    id: 2,
    name: 'ঈদ স্পেশাল কটন পাঞ্জাবি',
    category: 'ঈদ কালেকশন',
    price: 990,
    oldPrice: 1500,
    images: [
      'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=600&q=80',
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80',
    ],
    colors: [
      { name: 'আকাশী', hex: '#87ceeb' },
      { name: 'সবুজ',  hex: '#2d6a4f' },
      { name: 'সাদা',  hex: '#f5f5f5' },
      { name: 'ধূসর',  hex: '#9e9e9e' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    stock: 24,
    badge: 'নতুন',
    isFeatured: false,
  },
  {
    id: 3,
    name: 'লাক্সারি এমব্রয়ডারি পাঞ্জাবি',
    category: 'লাক্সারি',
    price: 1890,
    oldPrice: 2800,
    images: [
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
      'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=600&q=80',
    ],
    colors: [
      { name: 'অফ-হোয়াইট', hex: '#f8f4e3' },
      { name: 'মেরুন',      hex: '#800020' },
      { name: 'জলপাই',      hex: '#556b2f' },
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 7,
    badge: 'শেষ হচ্ছে',
    isFeatured: true,
  },
  {
    id: 4,
    name: 'ক্লাসিক লিনেন পাঞ্জাবি',
    category: 'ক্লাসিক',
    price: 850,
    oldPrice: 1200,
    images: [
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80',
    ],
    colors: [
      { name: 'বেইজ',   hex: '#c8b89a' },
      { name: 'সাদা',   hex: '#f5f5f5' },
      { name: 'নীল',    hex: '#4a90d9' },
      { name: 'চকলেট', hex: '#7b4f2e' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 31,
    badge: null,
    isFeatured: false,
  },
  {
    id: 5,
    name: 'নাইট কালেকশন প্রিমিয়াম',
    category: 'নাইট কালেকশন',
    price: 1290,
    oldPrice: 1800,
    images: [
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80',
      'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=600&q=80',
    ],
    colors: [
      { name: 'গাঢ় নীল',  hex: '#0d1b2a' },
      { name: 'কালো',     hex: '#1a1a1a' },
      { name: 'বোতল সবুজ', hex: '#006400' },
    ],
    sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
    stock: 18,
    badge: 'বেস্টসেলার',
    isFeatured: true,
  },
  {
    id: 6,
    name: 'পাতলা গ্রীষ্মকালীন পাঞ্জাবি',
    category: 'সামার কালেকশন',
    price: 750,
    oldPrice: 1100,
    images: [
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4b4f8b?w=600&q=80',
    ],
    colors: [
      { name: 'হালকা নীল',  hex: '#add8e6' },
      { name: 'পেস্তা',     hex: '#98fb98' },
      { name: 'ক্রিম',      hex: '#fffdd0' },
      { name: 'লেভেন্ডার', hex: '#e6e6fa' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 42,
    badge: null,
    isFeatured: false,
  },
];

// =============================================
// REVIEWS DATA
// =============================================
const REVIEWS = [
  {
    name: 'রাফি আহমেদ',
    location: 'ঢাকা',
    stars: 5,
    text: 'অসাধারণ মানের পাঞ্জাবি! কাপড়টা খুবই নরম এবং সেলাই খুব সুন্দর। দেখতেও অনেক সুন্দর। ঈদে পরেছি, সবাই প্রশংসা করেছে।',
    product: 'রাজকীয় সিল্ক পাঞ্জাবি',
    date: '১৫ এপ্রিল ২০২৫',
    initials: 'রা',
  },
  {
    name: 'সাকিব হোসেন',
    location: 'চট্টগ্রাম',
    stars: 5,
    text: 'খুব ভালো পাঞ্জাবি, দাম অনুযায়ী মান অনেক ভালো। ডেলিভারি খুব দ্রুত পেয়েছি। পরের বার আরও অর্ডার করবো।',
    product: 'ঈদ স্পেশাল কটন পাঞ্জাবি',
    date: '২ মে ২০২৫',
    initials: 'সা',
  },
  {
    name: 'নাফিস রহমান',
    location: 'সিলেট',
    stars: 5,
    text: 'প্রথমে অনলাইনে কিনতে ভয় পাচ্ছিলাম, কিন্তু COD সুবিধা থাকায় অর্ডার করলাম। পণ্য হাতে পেয়ে অনেক খুশি হয়েছি।',
    product: 'লাক্সারি এমব্রয়ডারি পাঞ্জাবি',
    date: '৮ মে ২০২৫',
    initials: 'না',
  },
  {
    name: 'তানভীর ইসলাম',
    location: 'রাজশাহী',
    stars: 5,
    text: 'এমব্রয়ডারির কাজ অনেক সুন্দর এবং যত্নশীল। সাইজও একদম পারফেক্ট। ধন্যবাদ রাজকীয় পাঞ্জাবিকে।',
    product: 'লাক্সারি এমব্রয়ডারি পাঞ্জাবি',
    date: '১০ মে ২০২৫',
    initials: 'তা',
  },
  {
    name: 'মেহেদী হাসান',
    location: 'খুলনা',
    stars: 5,
    text: 'অনলাইনে এই মানের পাঞ্জাবি এত সস্তায় পাওয়া সত্যিই অবাক করা। আমার পরিবারের সবার জন্য কিনেছি।',
    product: 'ক্লাসিক লিনেন পাঞ্জাবি',
    date: '১২ মে ২০২৫',
    initials: 'মে',
  },
  {
    name: 'ফারহান আহমেদ',
    location: 'বরিশাল',
    stars: 4,
    text: 'কাপড়ের মান খুব ভালো। শুধু ডেলিভারি একটু বেশি সময় নিয়েছে। তবে পণ্যে কোনো সমস্যা নেই। পরের বার আবার কিনবো।',
    product: 'ক্লাসিক লিনেন পাঞ্জাবি',
    date: '১৫ মে ২০২৫',
    initials: 'ফা',
  },
];

// =============================================
// FAQ DATA
// =============================================
const FAQS = [
  {
    q: 'ডেলিভারি কতদিনে পাবো?',
    a: 'ঢাকার ভিতরে ১-২ কার্যদিবস এবং ঢাকার বাইরে ২-৪ কার্যদিবসের মধ্যে হোম ডেলিভারি পাবেন।',
  },
  {
    q: 'ডেলিভারি চার্জ কত?',
    a: 'ঢাকার ভিতরে মাত্র ৯০ টাকা এবং সারা বাংলাদেশে ১৩০ টাকা ডেলিভারি চার্জ।',
  },
  {
    q: 'পণ্য ফেরত দিতে পারবো?',
    a: 'হ্যাঁ, পণ্য পাওয়ার ৭ দিনের মধ্যে ফেরত দেওয়া যাবে যদি পণ্যে কোনো ত্রুটি থাকে।',
  },
  {
    q: 'ক্যাশ অন ডেলিভারি কি?',
    a: 'পণ্য হাতে পেয়ে ডেলিভারিম্যানকে টাকা দিন। কোনো অগ্রিম পেমেন্টের প্রয়োজন নেই।',
  },
  {
    q: 'সাইজ না মিললে কি করবো?',
    a: 'সাইজ না মিললে আমাদের সাথে যোগাযোগ করুন, আমরা বিনামূল্যে পরিবর্তন করে দেবো।',
  },
  {
    q: 'অর্ডার করার পর কি পরিবর্তন করা যাবে?',
    a: 'অর্ডার করার ২ ঘণ্টার মধ্যে আমাদের হোয়াটসঅ্যাপে যোগাযোগ করলে পরিবর্তন সম্ভব।',
  },
  {
    q: 'কোথায় থেকে কিনতে পারি?',
    a: 'আমাদের ওয়েবসাইট থেকে সরাসরি অর্ডার করুন বা ফেসবুক পেজে ম্যাসেজ দিন।',
  },
];

// =============================================
// DISTRICTS
// =============================================
const DISTRICTS = [
  'ঢাকা','চট্টগ্রাম','সিলেট','রাজশাহী','খুলনা','বরিশাল','ময়মনসিংহ','রংপুর',
  'কুমিল্লা','গাজীপুর','নারায়ণগঞ্জ','নরসিংদী','মানিকগঞ্জ','মুন্সীগঞ্জ','টাঙ্গাইল',
  'কিশোরগঞ্জ','নেত্রকোণা','জামালপুর','শেরপুর','ময়মনসিংহ','ফরিদপুর','গোপালগঞ্জ',
  'মাদারীপুর','শরীয়তপুর','রাজবাড়ী','পাবনা','সিরাজগঞ্জ','বগুড়া','নাটোর','চাঁপাইনবাবগঞ্জ',
  'নওগাঁ','জয়পুরহাট','কুষ্টিয়া','মেহেরপুর','চুয়াডাঙ্গা','ঝিনাইদহ','মাগুরা','নড়াইল',
  'সাতক্ষীরা','বাগেরহাট','যশোর','পটুয়াখালী','পিরোজপুর','ঝালকাঠি','ভোলা','বরগুনা',
  'কক্সবাজার','ব্রাহ্মণবাড়িয়া','চাঁদপুর','নোয়াখালী','ফেনী','লক্ষ্মীপুর','হবিগঞ্জ',
  'মৌলভীবাজার','সুনামগঞ্জ','দিনাজপুর','নীলফামারী','লালমনিরহাট','কুড়িগ্রাম','গাইবান্ধা',
  'ঠাকুরগাঁও','পঞ্চগড়'
];

// =============================================
// LIVE NOTIFICATIONS
// =============================================
const NOTIFICATIONS = [
  'রাফি আহমেদ (ঢাকা) রাজকীয় সিল্ক পাঞ্জাবি অর্ডার করেছেন ✅',
  'সাকিব হোসেন (চট্টগ্রাম) ঈদ স্পেশাল পাঞ্জাবি অর্ডার করেছেন ✅',
  'তানভীর (রাজশাহী) লাক্সারি পাঞ্জাবি ★★★★★ রেটিং দিয়েছেন',
  'মেহেদী (খুলনা) ৩টি পাঞ্জাবি একসাথে অর্ডার করেছেন ✅',
  'নাফিস (সিলেট) নাইট কালেকশন অর্ডার করেছেন ✅',
  'ফারহান (বরিশাল) ক্লাসিক লিনেন পাঞ্জাবি অর্ডার করেছেন ✅',
  'রিয়াজ (কুমিল্লা) প্রিমিয়াম সিল্ক পাঞ্জাবি অর্ডার করেছেন ✅',
  'আশিক (ময়মনসিংহ) ঈদ স্পেশাল পাঞ্জাবি রিভিউ দিয়েছেন ★★★★★',
];

// =============================================
// STATE
// =============================================
const state = {
  currentProduct: null,
  selectedColor: null,
  selectedSize: null,
  modalQty: 1,
  pdQty: 1,
  pdProduct: null,
  pdColorIndex: 0,
  pdSizeIndex: 0,
  cardQty: {},   // { productId: qty }
  cardColor: {}, // { productId: colorIndex }
  wishlist: new Set(),
};

// =============================================
// LOADING SCREEN
// =============================================
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loadingScreen').classList.add('hidden');
    document.body.style.overflow = '';
    // Fire Meta Pixel PageView
    safePixel('track', 'PageView');
  }, 2400);
});
document.body.style.overflow = 'hidden'; // freeze scroll during load

// =============================================
// NAVBAR
// =============================================
const navbar    = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
    document.getElementById('stickyOrder').classList.add('show');
  } else {
    navbar.classList.remove('scrolled');
    document.getElementById('stickyOrder').classList.remove('show');
  }
}, { passive: true });

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// =============================================
// COUNTDOWN TIMER (12 hours rolling)
// =============================================
function initCountdown() {
  // Store end time in session so it resets each session
  if (!sessionStorage.getItem('cdEnd')) {
    const end = Date.now() + 12 * 60 * 60 * 1000;
    sessionStorage.setItem('cdEnd', end);
  }
  const endTime = parseInt(sessionStorage.getItem('cdEnd'));

  function tick() {
    const now  = Date.now();
    const diff = Math.max(0, endTime - now);
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const pad = n => String(n).padStart(2, '0');
    const el = id => document.getElementById(id);
    el('countHours').textContent = pad(h);
    el('countMins').textContent  = pad(m);
    el('countSecs').textContent  = pad(s);
    if (diff <= 0) {
      sessionStorage.removeItem('cdEnd');
      initCountdown();
    }
  }
  tick();
  setInterval(tick, 1000);
}
initCountdown();

// =============================================
// VIEWER COUNT (fake, fluctuating)
// =============================================
function updateViewers() {
  const base = Math.floor(Math.random() * 8) + 3;
  const el = document.getElementById('viewerCount');
  if (el) el.textContent = base;
}
updateViewers();
setInterval(updateViewers, 8000);

// =============================================
// HERO STOCK (fake decrement)
// =============================================
let heroStockVal = 13;
setInterval(() => {
  if (Math.random() < 0.3 && heroStockVal > 4) {
    heroStockVal--;
    const el = document.getElementById('heroStock');
    if (el) el.textContent = heroStockVal;
  }
}, 25000);

// =============================================
// RENDER PRODUCTS
// =============================================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(p => {
    const disc = Math.round((1 - p.price / p.oldPrice) * 100);
    const stockPct = Math.min(100, Math.round((p.stock / 50) * 100));
    const colorDotsHtml = p.colors.map((c, i) =>
      `<div class="color-dot ${i === 0 ? 'active' : ''}"
            style="background:${c.hex}"
            title="${c.name}"
            onclick="selectCardColor(event,${p.id},${i})"
            data-pid="${p.id}" data-ci="${i}"></div>`
    ).join('');

    const badgeHtml = p.badge
      ? `<span class="badge-${p.badge === 'বেস্টসেলার' ? 'sold' : p.badge === 'নতুন' ? 'hot' : 'discount'}">${p.badge}</span>`
      : '';

    return `
      <div class="product-card reveal-up" data-pid="${p.id}">
        <div class="product-img-wrap" onclick="openProductModal(${p.id})">
          <img src="${p.images[0]}" alt="${p.name}" class="product-img" loading="lazy" />
          <div class="product-badges">
            <span class="badge-discount">-${disc}%</span>
            ${badgeHtml}
          </div>
          <button class="wishlist-btn" onclick="toggleWishlist(event,${p.id})" aria-label="উইশলিস্ট" data-wid="${p.id}">
            ♡
          </button>
          <div class="quick-view-btn" onclick="openProductModal(${p.id})">দ্রুত দেখুন →</div>
        </div>
        <div class="product-body">
          <p class="product-category">${p.category}</p>
          <h3 class="product-name">${p.name}</h3>
          <div class="color-dots" id="cdots-${p.id}">${colorDotsHtml}</div>
          <div class="product-price-row">
            <span class="product-price">৳${p.price.toLocaleString('bn-BD')}</span>
            <span class="product-old-price">৳${p.oldPrice.toLocaleString('bn-BD')}</span>
            <span class="product-discount">-${disc}%</span>
          </div>
          <div class="product-stock-bar">
            <p class="stock-label">স্টক: ${p.stock <= 10 ? `<span style="color:#ef4444">মাত্র ${p.stock}টি বাকি!</span>` : `${p.stock}টি পাওয়া যাচ্ছে`}</p>
            <div class="stock-track"><div class="stock-fill" style="width:${stockPct}%"></div></div>
          </div>
          <div class="product-actions">
            <div class="qty-wrap">
              <button class="qty-btn-sm" onclick="changeCardQty(event,${p.id},-1)">−</button>
              <span class="qty-num" id="cqty-${p.id}">১</span>
              <button class="qty-btn-sm" onclick="changeCardQty(event,${p.id},1)">+</button>
            </div>
            <button class="order-btn" onclick="openCheckoutFromCard(${p.id})">🛒 অর্ডার করুন</button>
          </div>
        </div>
      </div>`;
  }).join('');

  // Initialize state
  PRODUCTS.forEach(p => {
    state.cardQty[p.id]   = 1;
    state.cardColor[p.id] = 0;
  });

  // Observe for reveal
  observeReveal();
}

function selectCardColor(e, pid, ci) {
  e.stopPropagation();
  state.cardColor[pid] = ci;
  const wrap = document.getElementById(`cdots-${pid}`);
  if (!wrap) return;
  wrap.querySelectorAll('.color-dot').forEach((d, i) => d.classList.toggle('active', i === ci));
}

function changeCardQty(e, pid, delta) {
  e.stopPropagation();
  state.cardQty[pid] = Math.max(1, (state.cardQty[pid] || 1) + delta);
  const el = document.getElementById(`cqty-${pid}`);
  if (el) el.textContent = toBengaliNum(state.cardQty[pid]);
}

function toggleWishlist(e, pid) {
  e.stopPropagation();
  const btn = e.currentTarget;
  if (state.wishlist.has(pid)) {
    state.wishlist.delete(pid);
    btn.textContent = '♡';
    btn.classList.remove('active');
  } else {
    state.wishlist.add(pid);
    btn.textContent = '♥';
    btn.classList.add('active');
  }
}

// =============================================
// RENDER REVIEWS
// =============================================
function renderReviews() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;
  grid.innerHTML = REVIEWS.map((r, i) => `
    <div class="review-card reveal-up" style="--d:${i*0.08}s">
      <div class="review-header">
        <div class="review-avatar">${r.initials}</div>
        <div>
          <p class="review-name">${r.name}</p>
          <p class="review-location">📍 ${r.location}</p>
        </div>
      </div>
      <div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
      <p class="review-text">${r.text}</p>
      <p class="review-product">পণ্য: ${r.product}</p>
      <p class="review-date">📅 ${r.date}</p>
      <span class="review-verified">✅ যাচাইকৃত কেনাকাটা</span>
    </div>`
  ).join('');
}

// =============================================
// RENDER FAQS
// =============================================
function renderFAQs() {
  const list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item reveal-up" style="--d:${i*0.05}s">
      <div class="faq-question" onclick="toggleFAQ(this.parentElement)">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer">
        <div class="faq-answer-inner">${f.a}</div>
      </div>
    </div>`
  ).join('');
}

function toggleFAQ(item) {
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// =============================================
// DISTRICTS DROPDOWN
// =============================================
function populateDistricts() {
  const sel = document.getElementById('custDistrict');
  if (!sel) return;
  DISTRICTS.forEach(d => {
    const opt = document.createElement('option');
    opt.value = d;
    opt.textContent = d;
    sel.appendChild(opt);
  });
  sel.addEventListener('change', autoDetectArea);
}

function autoDetectArea() {
  const district = document.getElementById('custDistrict').value;
  const isDhaka   = district === 'ঢাকা' || district === 'গাজীপুর' || district === 'নারায়ণগঞ্জ';
  const radios    = document.querySelectorAll('input[name="deliveryArea"]');
  radios.forEach(r => {
    if ((r.value === 'dhaka' && isDhaka) || (r.value === 'outside' && !isDhaka)) {
      r.checked = true;
    }
  });
  updateOrderSummary();
}

// =============================================
// PRODUCT MODAL
// =============================================
function openProductModal(pid) {
  const p = PRODUCTS.find(x => x.id === pid);
  if (!p) return;
  state.pdProduct  = p;
  state.pdQty      = 1;
  state.pdColorIndex = 0;
  state.pdSizeIndex  = 0;

  document.getElementById('pdCategory').textContent = p.category;
  document.getElementById('pdName').textContent     = p.name;
  const disc = Math.round((1 - p.price / p.oldPrice) * 100);
  document.getElementById('pdPrice').textContent    = `৳${p.price.toLocaleString()}`;
  document.getElementById('pdOldPrice').textContent = `৳${p.oldPrice.toLocaleString()}`;
  document.getElementById('pdDiscount').textContent = `-${disc}%`;
  document.getElementById('pdStock').textContent    = `✅ ${p.stock}টি পাওয়া যাচ্ছে`;
  document.getElementById('pdQtyDisplay').textContent = '১';

  // Main image
  document.getElementById('pdMainImg').src = p.images[0];

  // Thumbs
  const thumbsEl = document.getElementById('pdThumbs');
  thumbsEl.innerHTML = p.images.map((img, i) =>
    `<img src="${img}" alt="${p.name} ${i+1}" class="pd-thumb ${i===0?'active':''}" loading="lazy"
          onclick="setPdImage('${img}', this)" />`
  ).join('');

  // Colors
  document.getElementById('pdColors').innerHTML = p.colors.map((c, i) =>
    `<div class="color-opt ${i===0?'selected':''}" style="background:${c.hex}" title="${c.name}"
          onclick="selectPdColor(this,${i})"></div>`
  ).join('');

  // Sizes
  document.getElementById('pdSizes').innerHTML = p.sizes.map((s, i) =>
    `<div class="size-opt ${i===0?'selected':''}" onclick="selectPdSize(this,${i})">${s}</div>`
  ).join('');

  safePixel('track', 'ViewContent', { content_name: p.name, value: p.price, currency: 'BDT' });
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

function setPdImage(src, el) {
  document.getElementById('pdMainImg').src = src;
  document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function selectPdColor(el, ci) {
  document.querySelectorAll('#pdColors .color-opt').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  state.pdColorIndex = ci;
}

function selectPdSize(el, si) {
  document.querySelectorAll('#pdSizes .size-opt').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  state.pdSizeIndex = si;
}

function changePdQty(delta) {
  state.pdQty = Math.max(1, state.pdQty + delta);
  document.getElementById('pdQtyDisplay').textContent = toBengaliNum(state.pdQty);
}

function orderFromPD() {
  const p = state.pdProduct;
  if (!p) return;
  closeProductModal();
  openCheckoutWithProduct(p, state.pdQty, state.pdColorIndex, state.pdSizeIndex);
}

// =============================================
// CHECKOUT MODAL
// =============================================
function openCheckout(source) {
  // Default to first product if called from hero/sticky
  const p = PRODUCTS[0];
  openCheckoutWithProduct(p, state.cardQty[p.id] || 1, state.cardColor[p.id] || 0, 0);
}

function openCheckoutFromCard(pid) {
  const p = PRODUCTS.find(x => x.id === pid);
  if (!p) return;
  openCheckoutWithProduct(p, state.cardQty[pid] || 1, state.cardColor[pid] || 0, 0);
}

function openCheckoutWithProduct(p, qty, colorIdx, sizeIdx) {
  state.currentProduct = p;
  state.modalQty       = qty;
  state.selectedColor  = p.colors[colorIdx]?.name || p.colors[0]?.name;
  state.selectedSize   = p.sizes[sizeIdx]  || p.sizes[0];

  // Fill product preview
  document.getElementById('modalProductImg').src       = p.images[0];
  document.getElementById('modalProductImg').alt       = p.name;
  document.getElementById('modalProductName').textContent = p.name;
  document.getElementById('modalProductPrice').textContent = `৳${p.price.toLocaleString()}`;
  document.getElementById('modalProductOldPrice').textContent = `৳${p.oldPrice.toLocaleString()}`;
  document.getElementById('modalQtyDisplay').textContent = toBengaliNum(qty);

  // Colors
  document.getElementById('modalColors').innerHTML = p.colors.map((c, i) =>
    `<div class="color-opt ${i===colorIdx?'selected':''}" style="background:${c.hex}" title="${c.name}"
          onclick="selectModalColor(this,'${c.name}')"></div>`
  ).join('');

  // Sizes
  document.getElementById('modalSizes').innerHTML = p.sizes.map((s, i) =>
    `<div class="size-opt ${i===sizeIdx?'selected':''}" onclick="selectModalSize(this,'${s}')">${s}</div>`
  ).join('');

  updateOrderSummary();
  safePixel('track', 'InitiateCheckout', { content_name: p.name, value: p.price, currency: 'BDT' });

  document.getElementById('checkoutModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('open');
  document.body.style.overflow = '';
}

function selectModalColor(el, name) {
  document.querySelectorAll('#modalColors .color-opt').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  state.selectedColor = name;
}

function selectModalSize(el, size) {
  document.querySelectorAll('#modalSizes .size-opt').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  state.selectedSize = size;
}

function changeModalQty(delta) {
  state.modalQty = Math.max(1, state.modalQty + delta);
  document.getElementById('modalQtyDisplay').textContent = toBengaliNum(state.modalQty);
  updateOrderSummary();
}

function updateOrderSummary() {
  const p = state.currentProduct;
  if (!p) return;
  const radios       = document.querySelectorAll('input[name="deliveryArea"]');
  let deliveryArea   = 'outside';
  radios.forEach(r => { if (r.checked) deliveryArea = r.value; });
  const deliveryFee  = deliveryArea === 'dhaka' ? 90 : 130;
  const productTotal = p.price * state.modalQty;
  const grandTotal   = productTotal + deliveryFee;

  document.getElementById('sumProductPrice').textContent = `৳${productTotal.toLocaleString()}`;
  document.getElementById('sumDelivery').textContent     = `৳${deliveryFee}`;
  document.getElementById('sumTotal').textContent        = `৳${grandTotal.toLocaleString()}`;
}

// Listen to delivery area change
document.addEventListener('change', e => {
  if (e.target.name === 'deliveryArea') updateOrderSummary();
});

// =============================================
// PHONE VALIDATION
// =============================================
const phoneInput = document.getElementById('custPhone');
if (phoneInput) {
  phoneInput.addEventListener('input', () => {
    const val   = phoneInput.value.replace(/\D/g, '');
    const hint  = document.getElementById('phoneHint');
    const valid = /^01[3-9]\d{8}$/.test(val);
    phoneInput.value = val;
    hint.textContent = val.length === 0 ? '' : valid ? '✅ সঠিক নম্বর' : '❌ সঠিক বাংলাদেশী মোবাইল নম্বর দিন';
    hint.className   = `form-hint ${val.length === 0 ? '' : valid ? 'success' : 'error'}`;
  });
}

// =============================================
// CONFIRM ORDER
// =============================================
async function confirmOrder() {
  const p        = state.currentProduct;
  const custName = document.getElementById('custName').value.trim();
  const phone    = document.getElementById('custPhone').value.trim();
  const address  = document.getElementById('custAddress').value.trim();
  const district = document.getElementById('custDistrict').value;
  const areaRadio = document.querySelector('input[name="deliveryArea"]:checked');

  // Validation
  if (!custName) { alert('অনুগ্রহ করে আপনার নাম লিখুন।'); return; }
  if (!/^01[3-9]\d{8}$/.test(phone)) { alert('সঠিক মোবাইল নম্বর দিন (যেমন: 01XXXXXXXXX)'); return; }
  if (!address) { alert('অনুগ্রহ করে আপনার ঠিকানা লিখুন।'); return; }
  if (!district) { alert('অনুগ্রহ করে আপনার জেলা বেছে নিন।'); return; }
  if (!areaRadio) { alert('অনুগ্রহ করে ডেলিভারি এলাকা বেছে নিন।'); return; }
  if (!state.selectedColor) { alert('অনুগ্রহ করে রঙ বেছে নিন।'); return; }
  if (!state.selectedSize)  { alert('অনুগ্রহ করে সাইজ বেছে নিন।'); return; }

  const deliveryArea = areaRadio.value;
  const deliveryFee  = deliveryArea === 'dhaka' ? 90 : 130;
  const deliveryLabel = deliveryArea === 'dhaka' ? 'ঢাকার ভিতরে (৯০ টাকা)' : 'ঢাকার বাইরে (১৩০ টাকা)';
  const productTotal = p.price * state.modalQty;
  const grandTotal   = productTotal + deliveryFee;
  const orderId      = generateOrderId();

  const orderData = {
    orderId,
    productName:  p.name,
    color:        state.selectedColor,
    size:         state.selectedSize,
    quantity:     state.modalQty,
    unitPrice:    p.price,
    productTotal,
    deliveryFee,
    grandTotal,
    custName,
    phone,
    address,
    district,
    deliveryArea: deliveryLabel,
    timestamp:    new Date().toLocaleString('bn-BD'),
  };

  // Disable button and show loading
  const btn = document.getElementById('confirmBtn');
  btn.disabled     = true;
  btn.textContent  = '⏳ অর্ডার পাঠানো হচ্ছে...';

  // Send to integrations (non-blocking)
  Promise.allSettled([
    sendToTelegram(orderData),
    sendToGoogleForm(orderData),
  ]);

  // Fire Meta Pixel Purchase
  safePixel('track', 'Purchase', { value: grandTotal, currency: 'BDT', content_name: p.name });

  // Short delay for UX
  await sleep(1500);

  // Close checkout, show success
  closeCheckout();
  showSuccess(orderId, phone);

  // Reset form
  resetCheckoutForm();
  btn.disabled    = false;
  btn.textContent = '✅ অর্ডার নিশ্চিত করুন';
}

function showSuccess(orderId, phone) {
  document.getElementById('generatedOrderId').textContent = orderId;
  document.getElementById('successPhone').textContent     = phone;
  document.getElementById('successModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSuccess() {
  document.getElementById('successModal').classList.remove('open');
  document.body.style.overflow = '';
}

function resetCheckoutForm() {
  ['custName','custPhone','custAddress'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const sel = document.getElementById('custDistrict');
  if (sel) sel.value = '';
  document.querySelectorAll('input[name="deliveryArea"]').forEach(r => r.checked = false);
  document.getElementById('phoneHint').textContent = '';
  state.modalQty = 1;
  document.getElementById('modalQtyDisplay').textContent = '১';
}

// =============================================
// TELEGRAM INTEGRATION
// =============================================
async function sendToTelegram(o) {
  if (!CONFIG.TELEGRAM_BOT_TOKEN || CONFIG.TELEGRAM_BOT_TOKEN === 'YOUR_BOT_TOKEN') return;
  const msg = `
🛒 *নতুন পাঞ্জাবি অর্ডার!*
🆔 অর্ডার আইডি: \`${o.orderId}\`

📦 *পণ্য:* ${o.productName}
🎨 *রঙ:* ${o.color}
📏 *সাইজ:* ${o.size}
🔢 *পরিমাণ:* ${o.quantity}
💰 *পণ্য মূল্য:* ৳${o.productTotal}

👤 *গ্রাহক:* ${o.custName}
📱 *ফোন:* ${o.phone}
📍 *ঠিকানা:* ${o.address}, ${o.district}

🚚 *ডেলিভারি:* ${o.deliveryArea}
💵 *ডেলিভারি চার্জ:* ৳${o.deliveryFee}
💵 *মোট পরিমাণ:* ৳${o.grandTotal}
💳 *পেমেন্ট:* ক্যাশ অন ডেলিভারি

🕐 ${o.timestamp}
  `.trim();

  await fetch(`https://api.telegram.org/bot${CONFIG.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CONFIG.TELEGRAM_CHAT_ID, text: msg, parse_mode: 'Markdown' }),
  });
}

// =============================================
// GOOGLE FORM INTEGRATION
// =============================================
async function sendToGoogleForm(o) {
  if (!CONFIG.GOOGLE_FORM_ACTION || CONFIG.GOOGLE_FORM_ACTION.includes('YOUR_FORM_ID')) return;
  const body = new URLSearchParams();
  const f = CONFIG.GOOGLE_FORM_FIELDS;
  body.append(f.productName,  o.productName);
  body.append(f.color,        o.color);
  body.append(f.size,         o.size);
  body.append(f.quantity,     o.quantity);
  body.append(f.custName,     o.custName);
  body.append(f.phone,        o.phone);
  body.append(f.address,      `${o.address}, ${o.district}`);
  body.append(f.district,     o.district);
  body.append(f.deliveryArea, o.deliveryArea);
  body.append(f.totalPrice,   o.grandTotal);

  // Use no-cors to avoid CORS errors with Google Forms
  await fetch(CONFIG.GOOGLE_FORM_ACTION, {
    method: 'POST',
    mode:   'no-cors',
    body,
  });
}

// =============================================
// META PIXEL HELPER
// =============================================
function safePixel(type, event, data) {
  try {
    if (window.fbq) fbq(type, event, data || {});
  } catch (e) { /* ignore */ }
}

// =============================================
// LIVE TOAST NOTIFICATIONS
// =============================================
function showLiveToast() {
  const toast = document.getElementById('liveToast');
  const msg   = NOTIFICATIONS[Math.floor(Math.random() * NOTIFICATIONS.length)];
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// Start toasts after 5s, then every 15-30s
setTimeout(() => {
  showLiveToast();
  setInterval(showLiveToast, randomBetween(15000, 30000));
}, 5000);

// =============================================
// SCROLL REVEAL
// =============================================
function observeReveal() {
  const els = document.querySelectorAll('.reveal-up, .reveal-right');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
  } else {
    els.forEach(el => el.classList.add('visible'));
  }
}

// =============================================
// CLOSE MODALS ON OVERLAY CLICK
// =============================================
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});

// =============================================
// VIDEO MODAL STUB
// =============================================
function playVideoModal(id) {
  // In production: open a video modal with the video URL
  alert('ভিডিও লোড হচ্ছে... আপনার ডিভাইসে ভিডিও চালু হবে।');
}

// =============================================
// UTILITIES
// =============================================
function generateOrderId() {
  const ts   = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `RP-${ts}-${rand}`;
}

function toBengaliNum(n) {
  const bn = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return String(n).replace(/[0-9]/g, d => bn[d]);
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// =============================================
// SMOOTH SCROLL FOR NAV LINKS
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderReviews();
  renderFAQs();
  populateDistricts();
  observeReveal();

  // Trigger AddToCart pixel on first order btn click
  document.addEventListener('click', e => {
    if (e.target.classList.contains('order-btn') || e.target.classList.contains('confirm-btn')) {
      const p = state.currentProduct || PRODUCTS[0];
      if (p) safePixel('track', 'AddToCart', { content_name: p.name, value: p.price, currency: 'BDT' });
    }
  }, { once: true });
});
