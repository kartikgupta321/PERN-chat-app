const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./src/config/database.js');
const router = require('./src/routes/users');
const app = express();
app.use(express.json());

//   test db
async function authenticate(){
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    };
};
authenticate();

// Index route

app.use(router);

app.get('/', (req, res) => res.send('index'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));