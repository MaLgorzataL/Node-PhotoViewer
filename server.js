const express = require('express')
const fs = require('fs');
const http = require('http'); //Inicjacja serwera HTTP
const app = express()


app.get('/', (request, respond) => {

    fs.readFile('./index.html', 'utf8', function(err, data) {
        if (err) throw err;
        stringifyFile = data
        respond.send(data);
    });
})

app.use(express.static(__dirname + '/Images'))

app.listen(3000, () => {
    console.log('Server started and is listening on port 3000')
})