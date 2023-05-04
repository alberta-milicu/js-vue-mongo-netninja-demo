const express = require('express');
var cors = require('cors');
const bp = require('body-parser');
const mongoose = require('mongoose');
const Friend = require('./models/friend');

// express app
const server = express();

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

server.use(cors(corsOptions));

const dbURI = 'mongodb+srv://albertamilicu:1234@mydb.ycgvaf3.mongodb.net/friendsDB-?retryWrites=true&w=majority';

mongoose.connect(dbURI)
    .then(() => {
        server.listen(3000)
        console.log('listen!')
    })
    .catch((err) => console.log('err'));


// middleware
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))

// routes
server.get('/', (req, res) => {
    res.redirect('/friends');
});

server.get('/friends', (req, res) => {
    Friend.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});

server.post('/friends', (req, res) => {
    const friend = new Friend(req.body);
    friend.save()
        .then((result) => {
            res.location.reload('/friends')
        })
        .catch((err) => {
            console.log(err);
        })
});

server.delete('/friends', (req, res) => {
    const id = req.body.id;
    //console.log("req.body");
    Friend.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/friends' })
        })
        .catch((err) => {
            console.log(err);
        })
});

