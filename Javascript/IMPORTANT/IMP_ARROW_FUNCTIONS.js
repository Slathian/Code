// Same function written as function declaration
function fullName (fName, lName) { 
    console.log(`${lName}, ${fName}`);
  }
  fullName('Tiffany', 'Hudgens');
  
  // Same function written as function expression
  fullName = (fName, lName) => { 
    console.log(`${lName}, ${fName}`);
  }
  fullName('Kristine', 'Hudgens');
  
  // Basic arrow function
  helloWorld = () => { console.log("Hi there"); }
  helloWorld();
  
  // Arrow function with shorthand function argument for single arguments
  firstName = fname => {
    console.log(fname.toUpperCase()); 
}
  firstName('Jordan');
  
  // Arrow function with multiple arguments
  fullName = (fName, lName) => {
    console.log(`${lName}, ${fName}`); 
}
  fullName('Kristine', 'Hudgens');

//   REMEBER ARROW DOES NOT HAVE TO BE 1 LINE OF CODE