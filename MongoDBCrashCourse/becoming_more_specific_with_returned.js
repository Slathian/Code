db.books.find({name: "Blink"})

// video example

db.books.find({name: "Blink"}).length()
// returns how many documents that you have in your collections for the database

db.books.findOne({ name: "Blink" })
//  using the PATH.findOne function guarentees that you only get one collection back, for flow purposes I guess, can be good but honestly needs more of a specific use case, and only have to worry about this when I make more applications that actually utilize something like this. 