//need to work with a sense of randomness, but you don't want it to be completely random. You want it to have a weighted system because the house always wins.
//object.keys ->
//bitwise operators

// Take in the weights
// iterate over the object keys like in python
// Every single time I iterate over 'losing' it must return with 'you have lost'
// Every single time I iterate over 'winning' I need to have it return 'you have won!'
const weights = {
    winning: 1,
    losing: 1000
}

const weightedLottery = weights => {
    // keep track of the weights
    // ['green', 'yellow', 'yellow', 'red', 'red', 'red']
    let containerArray = [];

    Object.keys(weights).forEach(key =>{
        for (let i = 0; i < weights[key]; i ++)  {
            containerArray.push(key);
        }
    })

    return containerArray[(Math.random() * containerArray.length) | 0];
    // The bitwise is used to make it random, its very interesting. I love this shit lmfao
}

console.log(weightedLottery(weights))//?