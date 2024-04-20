(function(html) {

    'use strict';

    /* preloader */
    const ssPreloader = function() {

        const siteBody = document.querySelector('body');
        
        window.addEventListener('load', function() {
          siteBody.classList.add('ss-show');
        });

    };


    /* mobile menu  */ 
    const ssMobileMenu = function() {

        const toggleButton = document.querySelector('.nav-header__menu-toggle');
        const mainNavWrap = document.querySelector('.nav-header__nav');
        const siteBody = document.querySelector('body');

        if (!(toggleButton && mainNavWrap)) return;

        toggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            toggleButton.classList.toggle('is-clicked');
            siteBody.classList.toggle('menu-is-open');
        });

        mainNavWrap.querySelectorAll('.nav-header__nav a').forEach(function(link) {

            link.addEventListener("click", function(event) {

                // at 900px and below
                if (window.matchMedia('(max-width: 900px)').matches) {
                    toggleButton.classList.toggle('is-clicked');
                    siteBody.classList.toggle('menu-is-open');
                }
            });
        });

        window.addEventListener('resize', function() {

            // above 900px
            if (window.matchMedia('(min-width: 901px)').matches) {
                if (siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
                if (toggleButton.classList.contains('is-clicked')) toggleButton.classList.remove('is-clicked');
            }
        });

    };

    (function ssInit() {
        ssPreloader();
        ssMobileMenu();
    })();

})(document.documentElement);
