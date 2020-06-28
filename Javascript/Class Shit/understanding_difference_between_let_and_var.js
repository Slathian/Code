var age = '20';
console.log(age);

var age = '21';
console.log(age);
//  this type of thing works, because var can be redifined

let name = 'Lucy';
console.log(name);

// let name = 'lucifer'; this will not work due to the fact that let does not let you redifine variables



// VARIABLES ARE HOISTED. Any variables called will be hoisted to the top of the code! 

// name = blah;
// console.log(name);
// var name;
// ^^^ THIS WORKS! The variable that was declared has been pre loaded at the very top. It is viewed as follows


// var name;
// name = blah;
// console.log(name);

// only works with declarations, not assignments. aka the var name, age, sex, ect. EXAMPLE:

// console.log(age);
// var age = 15;
// THIS IS VIEWED DIFFERENTLY! THIS IS NOT ALLOWED! IT WILL NOT GET HOISTED TO THE TOP
// DONT BE A DUMMY LOL ASSIGN VARIABLES BEFORE HAND LIKE A NORMAL HUMAN BEING!