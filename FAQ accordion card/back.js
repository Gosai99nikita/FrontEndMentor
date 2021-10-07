const arroww= document.querySelectorAll('.arrow');
const para = document.querySelectorAll('.ques');
const ans = document.querySelectorAll('.ans');

for (let i = 0; i < para.length; i++) {
    para[i].addEventListener('click',function(e){
        arroww[i].classList.toggle('arrowAfter');
        para[i].classList.toggle('paraAfter');
        if(ans[i].style.visibility=="visible")
        {
            ans[i].style.visibility = 'hidden';  
            ans[i].style.position = 'absolute';  
        }
        else   
        {
            ans[i].style.visibility = 'visible';
            ans[i].style.position = 'relative';  
        }
        
    });
}
