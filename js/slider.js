(function(){
    const sliders = [...document.querySelectorAll(`.testimony__body`)];
    const buttonsnext = document.querySelector(`#next`);
    const buttonbefore = document.querySelector(`#before`);
    let value;


    buttonsnext.addEventListener('click', () =>{
        changeposition(1);
    });

    buttonbefore.addEventListener('click', () =>{
        changeposition(-1);
    });

    const changeposition = (add) =>{
        const currenttestimony = document.querySelector(`.testimony__body--show`).dataset.id;
        value = Number(currenttestimony);
        value+= add;
        sliders[Number(currenttestimony)-1].classList.remove(`testimony__body--show`);
        if (value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  :1;
        }
        

        sliders [value-1].classList.add(`testimony__body--show`);


        }
   })();
   


   