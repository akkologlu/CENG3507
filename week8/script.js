function hello() { 
    console.log('Hello!'); 
    console.log('Welcome to JavaScript'); 
    } 
hello(); 
hello();

function printMessage(message, times) {
     for (var i = 0; i < times; i++) { 
        console.log(message); 
    }
    console.log("value of i is "+ i) ;
    }

printMessage("hello",3);

var x = 10; 
if (x > 0) { 
    var y = 10; 
} 
console.log('Value of y is ' + y);

function onClick(){
    console.log("clicked")
}
const button = document.querySelector("button");
button.addEventListener("click",onClick);