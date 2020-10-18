const express = require('express');
const app = express();
const articleRouter = require('./routes/articles')


app.set('view engine', 'ejs');

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: "Title 1",
        createdAt: new Date(),
        description: 'Test Descriptions 1'
    },
    {
        title: "Title 2",
        createdAt: new Date(),
        description: 'Test Descriptions 2'
    }
    ]
    res.render('articles/index', { articles: articles})
});

app.listen(5000);

