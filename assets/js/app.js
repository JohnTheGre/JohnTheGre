// Prove that JavaScript is working in your browser. You may delete this.
let person = window.prompt("Please enter your name", "Harry Potter");
let timer = window.prompt("please enter the time in mintes", "70");
let hours = Math.trunc(timer / 60);
let minutes = Math.trunc(timer % 60);

document.write( " hello " + person + " your input was " + timer);
document.write(" <br/>output: " + hours +" hours " +  minutes +" minutes ");