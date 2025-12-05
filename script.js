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
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
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

      const modalCadastrar = document.getElementById('modalCadastrar');
    const btnCadastrar = document.getElementById('btnCadastrar');
    const closeModalCadastrar = modalCadastrar.querySelector('.close-modal');
    const btnFecharCadastrar = modalCadastrar.querySelector('.btn-fechar-modal');

    if (btnCadastrar) {
        btnCadastrar.addEventListener('click', function() {
            modalCadastrar.style.display = 'block';
        });
    }

    closeModalCadastrar.addEventListener('click', function() {
        modalCadastrar.style.display = 'none';
    });

    btnFecharCadastrar.addEventListener('click', function() {
        modalCadastrar.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modalCadastrar) {
            modalCadastrar.style.display = 'none';
        }
    });
