(function(){
    const openBUTTON = document.querySelector(`.nav__menu`);
    const menu = document.querySelector(`.nav__link`);
    const closeMENU = document.querySelector(`.nav__close`);


openBUTTON.addEventListener(`click`,() =>{
    menu.classList.add('nav__link--show');

});

closeMENU.addEventListener(`click`,() =>{
     menu.classList.remove('nav__link--show');
    });

})();