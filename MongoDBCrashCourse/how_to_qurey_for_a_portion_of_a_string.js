db.books.insert({
    "name": "Deep Work: Rules for Focused Success in a Distracted World",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Cal Newport"}
    ]
});

// inseted above to the DB for this example ^^^

db.books.findOne({name: /.*deep work.*/i})
// so what the / TEXT / means is that this is the regular expression and trying to match a string. .*TEXT.* means that is is looking for the section input in all of the section name: BLAH. the i at the end of the thing makes it so that it is case insensitive.