db.books.insert( 
    {
      "name": "Deep Work: Rules for Focused Success in a Distracted World",
      "publishedDate": new Date(),
      "reviews": 100,
      "authors": [
        {"name": "Cal Newport"}
      ]
    }
  )


//   inserting for example ^^^^^
db.books.find({reviews: {$exists: true}}).pretty()
db.books.find({reviews: {$exists: false}}).pretty()

// pretty commonly used to clean up a database. these will return objects based if they have or do not have a certain perameter within the object