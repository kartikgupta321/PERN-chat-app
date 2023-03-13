const express = require('express');
const db = require('./src/config/database.js');
const router = require('./src/routes/users');
const app = express();


const io = require("socket.io")(5001,{
    cors:{
        origin: ["http://localhost:3000"],
    },
})
io.on("connection", socket =>{
    console.log(socket.id);
    socket.on('send-message',(message)=>{
        socket.broadcast.emit('receive-msg',message);
        console.log(message);
    })
})

app.use(express.json());

const cors = require("cors")
app.options("*", cors())

const corsOptions = {
  origin:"http://localhost:3000"
}

app.use(cors(corsOptions))

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
