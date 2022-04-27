console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let randomNum = Math.floor(Math.random() * 11);

let userInput = prompt('Please enter a number from 1-10');

if(userInput < randomNum) {
    alert('Too low');
}
else if(userInput > randomNum){
    alert('Too high');
}
else{
    alert('Congratulations you guessed it!!!');
}
// Exercise 2
let userInput2 = prompt('What is the airspeed velocity of an unlade sparrow');
console.log(userInput2);

switch(userInput2.toLowerCase()){
    case "african or european":
        alert('I don't know...Aggghhhh!!!');
        break;
    case "where'd you get the coconuts":
        alert('Are you suggesting coconuts migrate?');
        break;
    case "i don't know":
        alert('Witch!!!');
        break;
    case "blue":
        alert( No Yellooooooooooowww...'');
        break;   
    case "ni":
        alert('We no longer say "Ni"');
        break;
    default:
        alert('A 5oz bird could NOT carry a 1lb coconut');         
}