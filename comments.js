// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Read the comments from the file
// 4. Send the comments as JSON to the client

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/comments', (req, res) => {
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).end();
        }

        const comments = JSON.parse(data);
        res.json(comments);
    });
});

app.listen(8080, () => console.log('Server started: http://localhost:8080'));