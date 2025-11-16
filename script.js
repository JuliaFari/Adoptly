  (function () {
    'use strict';

    const byId = id => document.getElementById(id);

    document.addEventListener('DOMContentLoaded', () => {
      const scrollBtn = byId('scrollTopBtn');
      const menuToggle = byId('menuToggle');
      const menuList = byId('menuList');
      const btnAdotar = byId('btnAdotar');

      function updateScrollBtn() {
        if (!scrollBtn) return;
        if (window.scrollY > 200) scrollBtn.classList.add('show');
        else scrollBtn.classList.remove('show');
      }

      updateScrollBtn();
      window.addEventListener('scroll', updateScrollBtn);

      if (scrollBtn) {
        scrollBtn.addEventListener('click', e => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      if (menuToggle && menuList) {
        menuToggle.addEventListener('click', () => {
          menuToggle.classList.toggle('active');
          menuList.classList.toggle('show');
        });
      }

      if (btnAdotar) {
        btnAdotar.addEventListener('click', e => {
          e.preventDefault();
          window.location.href = 'adotar.html';
        });
      }
    });
  })();
