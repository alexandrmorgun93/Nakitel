;
(() => {
    'use strict';

    /*variables*/
    /*BEGIN SLIDER*/
    let slider = document.querySelectorAll('.slider');
    let dotsWrap = document.querySelector('.control_dot');
    let arrDote =[];
    let yak = 0;
    let timer = null;
    let interv =null;

    function lastElem (arr,int,boll){
      if(boll){
        return (arr[int+1])?int+1:0;
      }else{
        return (arr[int - 1])?int -1:arr.length-1;
      }
    }

    for(let i =0; i<slider.length;i++){
      let dots =document.createElement('i');
      dots.className = 'dots';
      dots.addEventListener('click',()=>{
        clearInterval(timer);
        autoSlider(true,i);
        defult();
      });
      dotsWrap.appendChild(dots);
    }
    arrDote = dotsWrap.querySelectorAll('i');

    function autoSlider(boll,int) {
      for(let i =0; i < slider.length; i++){
        slider[i].classList.remove('active');
        arrDote[i].classList.remove('active');
      }
      if(arguments.length<2){
        yak = lastElem(slider,yak,boll);
        slider[yak].classList.add('active');
        arrDote[yak].classList.add('active');
      }
      else{
        yak = int;
        slider[int].classList.add('active');
        arrDote[int].classList.add('active');
      }
    }


    function defult(){
      timer = setInterval(()=>{
        autoSlider(true);
      }, 5000);
    }

    slider[0].classList.add('active');
    arrDote[0].classList.add('active');

    defult();





    /* document.addEventListener('click', function () {
         for (let i = 0; i < dots.length; i++) {
             count++;
             clearInterval(timer);
         }
     });*/


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


})();
