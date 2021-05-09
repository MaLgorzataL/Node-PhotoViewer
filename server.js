//import express from 'express()';

const express = require('express');
const fs = require('fs');
//const http = require('http'); 
const app = express();
import { query } from 'express';
import users from './data/users.json';

app.use(express.static(__dirname + '/Images'));


app.get('/', (request, respond) => {

    fs.readFile('./index.html', 'utf8', function(err, data) {
        if (err) throw err;
        var stringifyFile = data;
        respond.send(data);
    });
})

app.get('./login', function(req,res) {
    res.sendFile('./login.html')
});


app.get('/userform', function (req, res) {
    const response = {
        email: req.query.email,
        password: req.query.password
    }; 
    let i = 0, found = false, length = users.length;
    while ((req.query.email != users[i].email) && (i < (length - 1))) {
        
      if (req.query.email === users[i].email) { found = true; console.log(found) }
      else i++;
    };
    if (req.query.email != users[i].email) { 
        
        console.log('not found'); }
    else { found = true; console.log('id = '+users[i].id+found) }
    res.json(response);
});


app.listen(3000, () => {
    console.log('Server started and is listening on port 3000');
    //console.log(users);

})