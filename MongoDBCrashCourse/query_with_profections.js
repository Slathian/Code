db.books.find(
    {
        name: "OOP Programming"
    },
    {
        _id: 0,
        name: 1,
        authors: 1
    }
).pretty()