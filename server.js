import express from 'express';
import data from './data/data.json';
import * as fs from 'fs';

const app = express()
const PORT = 3000;

app.get('/', (request, respond) => {

    fs.readFile('./index.html', 'utf8', function(err, image) {
        if (err) throw err;
        let stringifyFile = image;
        respond.send(image);
    });
});



app.post('/newItem', (req, res) =>
    res.send(`a post request with /newItem route on port ${PORT}`)
);

app.put('/item', (req, res) =>
    res.send(`a put request with /item route on port ${PORT}`)
);

app.delete('/item', (req, res) =>
    res.send(`a delete request with /item route on port ${PORT}`)
);

app.listen(PORT, () => {
    console.log(`Server started and is listening on port ${PORT}`);
    console.log(data);
});