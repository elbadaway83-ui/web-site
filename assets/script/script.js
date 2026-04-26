/* =====================================================
   وسيطي - script.js
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ===== Hamburger / Mobile Menu ===== */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      const icon = hamburger.querySelector('i');
      if (mobileMenu.classList.contains('open')) {
        icon.className = 'bi bi-x-lg';
      } else {
        icon.className = 'bi bi-list';
      }
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.querySelector('i').className = 'bi bi-list';
      }
    });
  }

  /* ===== Sticky Navbar Shadow ===== */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 4px 24px rgba(30,41,59,0.12)';
    } else {
      nav.style.boxShadow = '0 2px 12px rgba(30,41,59,0.06)';
    }
  });

  /* ===== Scroll Reveal (Intersection Observer) ===== */
  const revealEls = document.querySelectorAll(
    '.listing-card, .cat-card, .trust-card, .flow-step, .role-card, .stat-item'
  );

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(function (el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease ' + (i * 0.05) + 's, transform 0.5s ease ' + (i * 0.05) + 's';
    revealObserver.observe(el);
  });

  /* ===== Active Mobile Nav on Scroll ===== */
  const mobLinks = document.querySelectorAll('.mob-link');
  mobLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mobLinks.forEach(function (l) { l.classList.remove('active'); });
      this.classList.add('active');
    });
  });

  /* ===== Search Input Focus Effect ===== */
  const searchInput = document.querySelector('.nav-search input');
  if (searchInput) {
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        searchInput.blur();
        searchInput.value = '';
      }
    });
  }

  /* ===== Button Ripple Effect ===== */
  const btns = document.querySelectorAll('.btn-card, .btn-hero, .btn-cta-white, .btn-cta-outline, .btn-primary');
  btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = [
        'position:absolute',
        'border-radius:50%',
        'pointer-events:none',
        'background:rgba(255,255,255,0.3)',
        'width:' + size + 'px',
        'height:' + size + 'px',
        'left:' + x + 'px',
        'top:' + y + 'px',
        'transform:scale(0)',
        'animation:ripple-anim 0.5s linear',
        'opacity:0'
      ].join(';');

      if (getComputedStyle(btn).position === 'static') {
        btn.style.position = 'relative';
      }
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      setTimeout(function () { ripple.remove(); }, 600);
    });
  });

  // Inject ripple keyframe
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = '@keyframes ripple-anim { to { transform: scale(3); opacity: 0; } }';
    document.head.appendChild(style);
  }

  /* ===== Smooth Counter Animation (hero stats) ===== */
  function animateCounter(el, target, duration) {
    const isArabicNum = /[٠-٩]/.test(target);
    if (!isArabicNum) return; // only animate arabic numerals

    const numericVal = target.replace(/[٠-٩]/g, function (d) {
      return '٠١٢٣٤٥٦٧٨٩'.indexOf(d);
    });
    const num = parseFloat(numericVal.replace(/[^0-9.]/g, ''));
    const suffix = target.replace(/[٠-٩]/g, '').replace(/\d/g, '');
    if (isNaN(num)) return;

    const start = 0;
    const startTime = performance.now();

    function toArabicNum(n) {
      return n.toString().replace(/\d/g, function (d) {
        return '٠١٢٣٤٥٦٧٨٩'[parseInt(d)];
      });
    }

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (num - start) * eased);
      el.textContent = toArabicNum(current) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const statsObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const numEl = entry.target.querySelector('.stat-num');
          if (numEl && !numEl.dataset.animated) {
            numEl.dataset.animated = 'true';
            animateCounter(numEl, numEl.textContent, 1500);
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.stat-item').forEach(function (el) {
    statsObserver.observe(el);
  });

  /* ===== Category Card Hover Sound (subtle visual pulse) ===== */
  document.querySelectorAll('.cat-card').forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      const icon = card.querySelector('.cat-icon');
      if (icon) {
        icon.style.transition = 'transform 0.15s ease';
        icon.style.transform = 'scale(1.15) rotate(-3deg)';
        setTimeout(function () {
          icon.style.transform = 'scale(1.1)';
        }, 150);
      }
    });
    card.addEventListener('mouseleave', function () {
      const icon = card.querySelector('.cat-icon');
      if (icon) icon.style.transform = '';
    });
  });

  /* ===== Toast Notification on CTA click ===== */
  function showToast(msg) {
    let toast = document.querySelector('.ws-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'ws-toast';
      toast.style.cssText = [
        'position:fixed', 'bottom:90px', 'left:50%', 'transform:translateX(-50%) translateY(20px)',
        'background:#1e293b', 'color:#fff', 'padding:12px 24px', 'border-radius:40px',
        'font-family:Cairo,sans-serif', 'font-size:.88rem', 'font-weight:700',
        'box-shadow:0 8px 32px rgba(0,0,0,.25)', 'z-index:9999',
        'opacity:0', 'transition:all 0.3s ease', 'white-space:nowrap',
        'display:flex', 'align-items:center', 'gap:8px'
      ].join(';');
      document.body.appendChild(toast);
    }
    toast.innerHTML = '<i class="bi bi-check-circle-fill" style="color:#86efac"></i> ' + msg;
    requestAnimationFrame(function () {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
    }, 3000);
  }

  document.querySelectorAll('.btn-card-primary').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const text = btn.textContent.trim();
      if (text.includes('وساطة')) {
        showToast('تم إرسال طلب الوساطة بنجاح!');
      } else if (text.includes('التفاصيل')) {
        showToast('جاري تحميل تفاصيل الإعلان...');
      }
    });
  });

});