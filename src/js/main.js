;
(() => {
    'use strict';

    /*variables*/
    /*BEGIN SLIDER*/
    window.onload = function () {
        autoSlider();
    }
    let slider = document.querySelectorAll('.slider');
    let dots = document.querySelectorAll('.dots');
    let count = 0;

    let timer = setInterval(autoSlider, 5000);

    function autoSlider() {
        for (let i = 0; i < slider.length; i++) {
            slider[i].classList.add('active');
        }
        count++;
        if (count > slider.length) {
            count = 1;
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slider[count - 1].classList.remove('active');
        dots[count - 1].className += " active";

    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function () {
            dotsSlider();
        });
    }

    function dotsSlider(n) {
        if (n > slider.length) {
            count = 1
        }
        if (n < 1) {
            count = slider.length
        }
        for (let i = 0; i < slider.length; i++) {
            slider[i].classList.add('active');
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slider[count - 1].classList.remove('active');
        dots[count - 1].className += " active";
    }

    /* document.addEventListener('click', function () {
        ) for (let i = 0; i < dots.length; i++ {
             count++;
             clearInterval(timer);
         }
     })*/

    /*END SLIDER*/
    /*BEGIN MOBILE MENU*/
    const btn = document.querySelector('.btn_mobile');
    const nav = document.querySelector('.mobile_nav ');

    function menuNav(btn, nav) {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        })
    }

    menuNav(btn, nav);

    /*END MOBILE MENU*/
    let a = 2;
    let b = 4;
    let c;

    function doble(a, b) {

        for (let i = 0; i < arguments.length; i++) {
            arguments.length * 2;
            return arguments[i];
        }
    }

    console.log(doble(a, b));
    doble(a, b);


})();
