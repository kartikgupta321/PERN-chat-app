const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./src/config/database.js');
// const users = require('./src/models/users.model');
const router = require('./src/routes/users');

const app = express();

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

// Handlebars
// app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// Index route
app.get('/', (req, res) => res.send('index'));

// app.get('/users', (req,res)=>{
//     console.log('users');
//     res.send('users');
// });
app.get('/users', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));