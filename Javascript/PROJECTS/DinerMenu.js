const Salmon = {
    name: 'Salmon',
    price: 25,
    details: 'Your basic Salmon but with a lemon zest to it',
    additives: {
        first: {
            name: 'Lemon Toppings',
            addedPrice: 4 
        },
        second: {
            name: 'Salted Pan Fry',
            addedPrice: 5
        },
        third: {
            name: 'Complete Deboning',
            addedPrice: 10
        }
    },
    subtractions: {
        first: {
            name: 'Three Quarters of the fish',
            subtractedPrice: -5 
        },
        second: {
            name: 'raw',
            subtractedPrice: -5
        },
        third: {
            name: 'Stale',
            subtractedPrice: -10
        }
    }
}

const Steak = {
    name: 'Steak',
    price: 55,
    details: 'A nice meaty steak with a side of potatos',
    additives: {
        first: {
            name: 'Cross Cut Fries',
            addedPrice: 3 
        },
        second: {
            name: 'Extra Done',
            addedPrice: 2
        },
        third: {
            name: '4 inches thick',
            addedPrice: 10
        }
    },
    subtractions: {
        first: {
            name: 'Thin Cut',
            subtractedPrice: -5 
        },
        second: {
            name: 'Raw',
            subtractedPrice: -25
        },
        third: {
            name: 'No Sides',
            subtractedPrice: -5
        }
    }
}

console.log(`Welcome to the resturant! Here is our entres to pick from:
    $${Salmon.price} ${Salmon.name} - ${Salmon.details}
    $${Steak.price} ${Steak.name} - ${Steak.details}
`);