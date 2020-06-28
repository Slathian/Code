db.books.insertMany([
    {
        "name": "Confident ruby",
        "publishedDate": new Date(),
        "authors": [
            {"name": "avdi grimm"}
        ]
    },
    {
        "name": "The Art of War",
        "publishedDate": new Date(),
         "authors": [
             {"name": "Steven Pressfield"}
         ]
    },
    {
        "name": "Blink",
        "publishedDate": new Date(),
        "authors": [
            {"name": "Malcom Gladwell"}
        ]
    }
])