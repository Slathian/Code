db.books.find(
    {
        name: "Blink"
    },
    {
        publishedDate: 1,
        name: 1,
        authors: {$slice: -1}
        // authors: {$slice: 1}
        // authors: {$slice: 2}
    }
).pretty()