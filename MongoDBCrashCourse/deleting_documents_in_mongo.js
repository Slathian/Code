db.books.remove({name: "OOP Programming"}, 1)
// this removes only 1 in the list which you can see by thye '1' at the end of the code
db.books.remove({name: "OOP Programming"})
// this removes all of the documents in the collection of books with the name "OOP Programming"

