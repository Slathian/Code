const str = '             good content          ';
str.trim();//? 

// let arr = ['ughh', 'good content', 'another good content', 'another UGH'];

// function removal(arr){
//     // find the length of the array
//     arrLength = arr.length;
//     // confirm that the array is at LEAST 3 long. If not return an error
//     if (arrLength < 3) {
//         return 'You must have at least 3 objects in the array'
//     }
    
//     else {
//         // remove the first section of the array
//         // remove the last section of the array
//     }  
// }

// This was my take on it, this is how it should be done

  
const removeFirstAndLast = arr => {
if (arr.length >= 3) {
    return arr.slice(1, -1);
} else {
    throw "You need at least three elements in the array"; //this can be used to throw an error which is something I did not know, that is fucking cool
}
};

removeFirstAndLast([1, 2, 3, 4]); //?
removeFirstAndLast(["<h1>", "Some content", "</h1>"]); //?
removeFirstAndLast(["Some content", "</h1>"]); //?