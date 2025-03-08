const express = require('express')
const mongo = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

mongo.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Up on ${port}`);
        });
    }
})

