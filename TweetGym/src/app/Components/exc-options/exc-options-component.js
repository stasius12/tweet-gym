/******************DISPLAY ARROW**************/

export const checkedNum = () => {

const checkBoxes = document.querySelectorAll('ul li');
var i = 0;
checkBoxes.forEach(el => {

    let temp = el.childNodes[0].childNodes[0].checked;
if(temp) ++i;

});

return i;

}

export const displayArr = () => {

    const checkBoxes = document.querySelectorAll('ul li');
    document.querySelector('#specArr').style.display = 'none';
    console.log(document.querySelector('#specArr').style.display);
    //document.querySelector('.glyphicon glyphicon-arrow-right').style.display = 'none';
    
    checkBoxes.forEach(el => {

        el.addEventListener('click', () => {

            
            var i = checkedNum();
           // console.log(el.childNodes[0]);
           const temp = el.childNodes[0].childNodes[1].childNodes[1];
            //console.log(temp);
            console.log(i);
            var tyBo = document.querySelector('#specArr');
         
            
            let checkMe = el.childNodes[0].childNodes[0].checked;

            if(checkMe){
                
                tyBo.style.display = 'inline-block';
                
               
            }else if( i == 0)
            {
               tyBo.style.display = 'none';    
            }

        });

    });
};






