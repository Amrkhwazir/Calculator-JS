var standard = document.querySelector('.standard')
console.log(standard)
var function1 = document.querySelector('.function')
console.log(function1)
var number = document.querySelector('.number')
console.log(number)
var equalToFunction = document.querySelector('.equal-to-function')
console.log(equalToFunction)
var output = document.querySelector('.output')

function clr(){
output.value = "";

}


function delt(){
    output.value = output.value.slice(0,-1);
    
    }

    
function finalAnswer(){
    output.value = eval(output.value)
    
    }

 function display(num){
    output.value += num;
        
}   
