/* =====================================================
   وسيطي - components.js  (Shared Navbar + Footer)
   ===================================================== */

(function () {
  const PAGES = {
    home: 'index.html',
    store: 'store.html',
    escrow: 'escrow-center.html',
    postAd: 'post-ad.html',
    brokers: 'brokers.html',
    login: 'login.html',
    register: 'register.html',
    profile: 'profile.html',
    notifications: 'notifications.html',
    howItWorks: 'how-it-works.html',
    faq: 'faq.html',
    privacy: 'privacy.html',
    terms: 'terms.html',
    contact: 'contact.html',
    escrowRoom: 'escrow-room.html',
    listingDetails: 'listing-details.html',
  };

  function currentPage() {
    const p = location.pathname.split('/').pop() || 'index.html';
    return p;
  }

  function isActive(href) {
    return currentPage() === href ? 'active' : '';
  }

  /* ===== TICKER ===== */
  const tickerHTML = `
  <div class="ticker-bar">
    <div class="ticker-inner">
      <span><i class="bi bi-shield-check"></i> وساطة آمنة 100% لجميع المعاملات</span>
      <span><i class="bi bi-lightning-charge"></i> تفعيل فوري بعد اكتمال الوساطة</span>
      <span><i class="bi bi-headset"></i> دعم فني متاح 24/7</span>
      <span><i class="bi bi-people"></i> انضم لآلاف المستخدمين الموثوقين</span>
      <span><i class="bi bi-lock"></i> أموالك محمية حتى تأكيد الاستلام</span>
      <span><i class="bi bi-shield-check"></i> وساطة آمنة 100% لجميع المعاملات</span>
      <span><i class="bi bi-lightning-charge"></i> تفعيل فوري بعد اكتمال الوساطة</span>
      <span><i class="bi bi-headset"></i> دعم فني متاح 24/7</span>
      <span><i class="bi bi-people"></i> انضم لآلاف المستخدمين الموثوقين</span>
      <span><i class="bi bi-lock"></i> أموالك محمية حتى تأكيد الاستلام</span>
    </div>
  </div>`;

  /* ===== NAVBAR ===== */
  function buildNavbar() {
    const p = PAGES;
    return `
  <nav id="mainNav">
    <div class="nav-inner">
      <a class="logo" href="${p.home}">
        <div class="logo-icon"><i class="bi bi-shield-fill-check"></i></div>
        <div class="logo-text">وسيط<span>ي</span></div>
      </a>
      <div class="nav-search">
        <i class="bi bi-search"></i>
        <input type="text" placeholder="ابحث عن حسابات، صفحات، قنوات..." id="navSearchInput"/>
      </div>
      <div class="nav-links">
        <a href="${p.home}" class="${isActive(p.home)}"><i class="bi bi-house-door"></i> الرئيسية</a>
        <a href="${p.store}" class="${isActive(p.store)}"><i class="bi bi-shop"></i> المتجر</a>
        <a href="${p.escrow}" class="${isActive(p.escrow)}"><i class="bi bi-arrows-angle-contract"></i> الوساطة</a>
        <a href="${p.notifications}" class="${isActive(p.notifications)}"><i class="bi bi-bell"></i> الإشعارات</a>
      </div>
      <div class="nav-actions">
        <a href="${p.login}" class="btn-outline">تسجيل الدخول</a>
        <a href="${p.register}" class="btn-primary"><i class="bi bi-person-plus"></i> إنشاء حساب</a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="القائمة"><i class="bi bi-list"></i></button>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="${p.home}" class="${isActive(p.home)}"><i class="bi bi-house-door"></i> الرئيسية</a>
      <a href="${p.store}" class="${isActive(p.store)}"><i class="bi bi-shop"></i> المتجر</a>
      <a href="${p.escrow}" class="${isActive(p.escrow)}"><i class="bi bi-arrows-angle-contract"></i> الوساطة</a>
      <a href="${p.brokers}" class="${isActive(p.brokers)}"><i class="bi bi-person-badge"></i> الوسطاء</a>
      <a href="${p.notifications}" class="${isActive(p.notifications)}"><i class="bi bi-bell"></i> الإشعارات</a>
      <hr/>
      <a href="${p.login}" class="btn-outline" style="text-align:center;">تسجيل الدخول</a>
      <a href="${p.register}" class="btn-primary" style="text-align:center;"><i class="bi bi-person-plus"></i> إنشاء حساب</a>
    </div>
  </nav>`;
  }

  /* ===== FOOTER ===== */
  function buildFooter() {
    const p = PAGES;
    return `
  <footer>
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo" style="margin-bottom:4px;">
            <div class="logo-icon"><i class="bi bi-shield-fill-check"></i></div>
            <div class="logo-text">وسيط<span>ي</span></div>
          </div>
          <p>منصة الوساطة الرقمية الآمنة التي تجمع البائعين والمشترين بوسيط موثوق يضمن حق الجميع.</p>
          <div class="social-links">
            <a href="#" class="social-link"><i class="bi bi-twitter-x"></i></a>
            <a href="#" class="social-link"><i class="bi bi-instagram"></i></a>
            <a href="#" class="social-link"><i class="bi bi-telegram"></i></a>
            <a href="#" class="social-link"><i class="bi bi-whatsapp"></i></a>
            <a href="#" class="social-link"><i class="bi bi-tiktok"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>المنصة</h4>
          <ul>
            <li><a href="${p.home}">الرئيسية</a></li>
            <li><a href="${p.store}">المتجر</a></li>
            <li><a href="${p.escrow}">مركز الوساطة</a></li>
            <li><a href="${p.postAd}">رفع إعلان</a></li>
            <li><a href="${p.brokers}">الوسطاء</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>حسابي</h4>
          <ul>
            <li><a href="${p.login}">تسجيل الدخول</a></li>
            <li><a href="${p.register}">إنشاء حساب</a></li>
            <li><a href="${p.profile}">ملفي الشخصي</a></li>
            <li><a href="${p.notifications}">الإشعارات</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>الدعم</h4>
          <ul>
            <li><a href="${p.howItWorks}">كيف تعمل؟</a></li>
            <li><a href="${p.faq}">الأسئلة الشائعة</a></li>
            <li><a href="${p.privacy}">سياسة الخصوصية</a></li>
            <li><a href="${p.terms}">شروط الاستخدام</a></li>
            <li><a href="${p.contact}">تواصل معنا</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ٢٠٢٥ وسيطي. جميع الحقوق محفوظة.</span>
        <span>مصنوع بـ <i class="bi bi-heart-fill" style="color:#e53e3e;"></i> لتجارة رقمية آمنة</span>
      </div>
    </div>
  </footer>

  <nav class="mobile-nav">
    <div class="mobile-nav-inner">
      <a href="${p.home}" class="mob-link ${isActive(p.home)}"><i class="bi bi-house-door-fill"></i> الرئيسية</a>
      <a href="${p.store}" class="mob-link ${isActive(p.store)}"><i class="bi bi-shop"></i> المتجر</a>
      <a href="${p.escrow}" class="mob-link ${isActive(p.escrow)}"><i class="bi bi-arrows-angle-contract"></i> الوساطة</a>
      <a href="${p.notifications}" class="mob-link ${isActive(p.notifications)}"><i class="bi bi-bell"></i> الإشعارات</a>
      <a href="${p.profile}" class="mob-link ${isActive(p.profile)}"><i class="bi bi-person-circle"></i> حسابي</a>
    </div>
  </nav>`;
  }

  /* ===== INJECT ===== */
  document.addEventListener('DOMContentLoaded', function () {
    // Inject ticker + navbar before body first child
    const tickerEl = document.createElement('div');
    tickerEl.innerHTML = tickerHTML + buildNavbar();
    document.body.insertBefore(tickerEl, document.body.firstChild);

    // Inject footer at end of body
    const footerEl = document.createElement('div');
    footerEl.innerHTML = buildFooter();
    document.body.appendChild(footerEl);

    // Hamburger
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
        const icon = hamburger.querySelector('i');
        icon.className = mobileMenu.classList.contains('open') ? 'bi bi-x-lg' : 'bi bi-list';
      });
      document.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
          mobileMenu.classList.remove('open');
          hamburger.querySelector('i').className = 'bi bi-list';
        }
      });
    }

    // Sticky nav shadow
    const nav = document.getElementById('mainNav');
    if (nav) {
      window.addEventListener('scroll', function () {
        nav.style.boxShadow = window.scrollY > 10
          ? '0 4px 24px rgba(30,41,59,0.12)'
          : '0 2px 12px rgba(30,41,59,0.06)';
      });
    }

    // Mobile nav active
    document.querySelectorAll('.mob-link').forEach(function (link) {
      link.addEventListener('click', function () {
        document.querySelectorAll('.mob-link').forEach(function (l) { l.classList.remove('active'); });
        this.classList.add('active');
      });
    });

    // Search ESC
    const si = document.getElementById('navSearchInput');
    if (si) {
      si.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { si.blur(); si.value = ''; }
      });
    }

    // Scroll reveal
    const revealEls = document.querySelectorAll(
      '.listing-card, .cat-card, .flow-step, .role-card, .broker-card, .page-card, .faq-item, .stat-item'
    );
    const revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    revealEls.forEach(function (el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease ' + (i * 0.05) + 's, transform 0.5s ease ' + (i * 0.05) + 's';
      revealObs.observe(el);
    });

    // Ripple
    function addRipple(btn) {
      btn.addEventListener('click', function (e) {
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const ripple = document.createElement('span');
        ripple.style.cssText = 'position:absolute;border-radius:50%;pointer-events:none;background:rgba(255,255,255,0.3);width:' + size + 'px;height:' + size + 'px;left:' + (e.clientX - rect.left - size / 2) + 'px;top:' + (e.clientY - rect.top - size / 2) + 'px;transform:scale(0);animation:ripple-anim 0.5s linear;opacity:0';
        if (getComputedStyle(btn).position === 'static') btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        setTimeout(function () { ripple.remove(); }, 600);
      });
    }
    if (!document.getElementById('ripple-style')) {
      const s = document.createElement('style');
      s.id = 'ripple-style';
      s.textContent = '@keyframes ripple-anim{to{transform:scale(3);opacity:0}}';
      document.head.appendChild(s);
    }
    document.querySelectorAll('.btn-card,.btn-hero,.btn-primary,.btn-cta-white,.btn-cta-outline,.btn-solid').forEach(addRipple);
  });

  /* ===== TOAST ===== */
  window.showToast = function (msg, type) {
    let toast = document.querySelector('.ws-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'ws-toast';
      toast.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%) translateY(20px);background:#1e293b;color:#fff;padding:12px 24px;border-radius:40px;font-family:Cairo,sans-serif;font-size:.88rem;font-weight:700;box-shadow:0 8px 32px rgba(0,0,0,.25);z-index:9999;opacity:0;transition:all 0.3s ease;white-space:nowrap;display:flex;align-items:center;gap:8px;';
      document.body.appendChild(toast);
    }
    const color = type === 'error' ? '#fca5a5' : '#86efac';
    const icon = type === 'error' ? 'bi-x-circle-fill' : 'bi-check-circle-fill';
    toast.innerHTML = '<i class="bi ' + icon + '" style="color:' + color + '"></i> ' + msg;
    requestAnimationFrame(function () {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
    }, 3000);
  };

})();
