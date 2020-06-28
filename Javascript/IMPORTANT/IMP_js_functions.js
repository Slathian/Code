function hiThere () {
    console.log('Hi there');
    return 'Hi there'
}

hiThere(); //?

function hiThereTwo() {
    return 'Hi there again';
}

hiThereTwo(); // "Hi there again"

var storedText = hiThere(); // Hi there

storedText; //

var storedTextTwo = hiThereTwo();

storedTextTwo; //

// Variable scope ###########################################################################################################################################

// var userObj = {
// email: 'sample@example.com',
// fullName: 'Kristine Hudgens'
// }
// we don't want these in a global scope apparently

function dashboardGreeting() {
    // 'var' userObj = { by taking the var out of the function, this will create a global variable!!!!!!!!!!!!!!!!!!!!!!!!! 
    var userObj = {
        email: 'sample2@example.com',
        fullName: 'Jordan Hudgens'
    }
console.log("Hi there, ".concat(userObj.fullName));
}
  
dashboardGreeting();
console.log(userObj.fullName);
// honestly this was pretty confusing. Basically you can call a function and using the same thing with the scope or whatever. Just don't polute the global scope.



// Function expressions vs declarations ###########################################################################################################################################
var greeting = function () {
    return "Hi there!";
   };
   
var age = 4;

if (age <= 10) {
    // we can use these function EXPRESSIONS inside of conditionals. We use these to be created at any given point.
    var buildMenu = function () {
    return "Kids' Menu";
    };

    // this is a function declaration!!! we do not want to do this when we run inside of objects or conditionals. this is more of a standalone, something that should be pre defined and or run.
    function wrongMenuBuilder () { 
    return "Wrong Kids' Menu";
    }

    console.log(buildMenu());
    console.log(wrongMenuBuilder());
}


// how to pass data into functions with funtion perameters or arguemtns, also known as arr ###########################################################################################################################################
function fullName(firstName, lastName, language) {
    var language = language || 'English';
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

console.log(fullName('Jordan', 'Hudgens', 'Spanish'));

// reference vs value ###########################################################################################################################################
var someUser = {
    name: 'Jordan'
}

function nameFormatter (user) {
    return user.name = 'Oops';
}

nameFormatter(someUser); //?

someUser; //?

var someName = 'Tiffany';

function someOtherNameFormatter(name) {
    return name = 'Oops';
}

someOtherNameFormatter(someName); //?

someName; //?

function nameFormatter (userName) {
    return userName = 'Oops';
}

someUser.name; //?

someUser.name = 'Kristine';

nameFormatter(someUser.name); //?

someUser.name;//? 