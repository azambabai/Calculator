let display = document.getElementById('display')
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click' , (e)  =>{
     switch(e.target.innerText){

         case 'c':
             display.innerText = '';
             break;
         case '←':
             display.innerText = display.innerText.slice( 0 , -1);
         break;
         case '=':
             display.innerText = eval(display.innerText);
        break;
    default:
        display.innerText += e.target.innerText;


     }
function eval(fn) {
  return new Function('return ' + fn)();
  console.log( eval('12/5*9+9.4*2') ); 
}
    });
});