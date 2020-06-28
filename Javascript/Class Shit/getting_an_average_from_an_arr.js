// [1, 2, 3];

// (1 + 2 + 3) / 3

const getAverage = arr => {
    // Sum the values from the array
    const reducer = (total, currentValue) => total + currentValue;
    const sum = arr.reduce(reducer);
    // get the length of the array
    // devide the sum by the length of the array
    return sum / arr.length;
}

getAverage([1, 2, 3])//? 