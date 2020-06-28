//prettyPrice(3.50, 0.95) //? 3.95

prettyPrice = (gross, pretty) => {
    gross = Math.floor(gross);
    console.log(price);
    if (pretty < 1)
        return gross + pretty;
    if (pretty > 0.99)
        return gross + (pretty * 0.01);
    else 
        throw new Error('The second half of the function must have a number input');
        
};
prettyPrice(5.65,95)//?

//  My version of the code ^^^^^^^^^^^^^^^^^^^^

// Solution of code vvvvvvvvvvvvvvvvvvvvvvvvvvvv
const prettyPrice2 = (grossPrice, extension) => {
    if (Number.isInteger(extension)) {
        extension = extension * 0.01;
    }
    return Math.floor(grossPrice) + extension;
}

prettyPrice2(5.65,95)//?


// Does the same thing, except the solution to the code has less lines of code, and so it wins. But it does not have an error to throw like mine does, so I win in that aspect