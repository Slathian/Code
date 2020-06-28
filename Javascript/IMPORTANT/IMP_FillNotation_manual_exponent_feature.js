// toThePowerOf(2,3) returns 8
// use Reduce
Array(3).fill(2)//?

const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num);
    const reducer = (total, currentValue) => total * currentValue;
    return items.reduce(reducer);
}

toThePowerOf(10, 10);//?

