/******************DISPLAY ARROW**************/

export const displayArr = () => {

    const checkBoxes = document.querySelectorAll('ul li');

    checkBoxes.forEach(el => {

        el.addEventListener('click', () => {

            var i = 0 ;
           // console.log(el.childNodes[0]);
           const temp = el.childNodes[0].childNodes[1].childNodes[1];
            //console.log(temp);
            
           
            temp.style.display = 'none';

            //console.log(el.childNodes[0].childNodes[0].checked);
            
            let checkMe = el.childNodes[0].childNodes[0].checked;

            if(checkMe){

                temp.style.display = 'inline-block';
               
            }else {
                temp.style.display = 'none';        
            }




        });

    });
};




