export const starMe = (stars) => {

    var i = 0;
    for(var x = 0; x < 3; x++){
        
        const markup1 = `<span class="fas fa-hand-rock"></span> `;
        const markup2 = `<span class="fas fa-hand-rock" style="color:gold; animation: pulsing 1.5s infinite"></span> `;
        let temp = document.querySelector('.difficulty');

        if(x < stars){
            temp.insertAdjacentHTML('afterend', markup2);
        }else{
            temp.insertAdjacentHTML('afterend', markup1);
        }
          
    }


}

export const Cardio = (card) => {

    if(card){
        const markup = `</br>Tak jest!</br>`;
        document.querySelector('.kardio').insertAdjacentHTML('afterend', markup);
    }else{

        const markup = `</br>Nie :/</br>`;
        document.querySelector('.kardio').insertAdjacentHTML('afterend', markup);
    }
}

export const HamburgerMe = () => {

    const hamb = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    
    const handleClick = () => {

        //$('.hamburger').classList.toggle('hamburger-active');
        hamb.classList.toggle('hamburger-active');
        nav.classList.toggle('nav-active');
    }

   document.querySelectorAll('ul li').forEach((el) => {

    el.addEventListener('click', () => {

        hamb.classList.toggle('hamburger-active');
        nav.classList.toggle('nav-active');
    });

   })



    //$('.hamburger').click(handleClick);
    hamb.addEventListener('click', handleClick);


}