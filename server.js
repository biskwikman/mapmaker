import express from 'express';
import path from 'path';
import fs from 'fs';
import http from 'http';

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(express.static('public'));

// sends correct page no matter where you start
app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
   console.log(`Server is up at port ${port}`);
});

const file = fs.createWriteStream("./file.jpg");
// get map background
// need to install node-fetch. Or do I?
const getBackground = (body) => {
   const request = http.get(`http://localhost:8080/styles/toner/static/${body.center[1]},${body.center[0]},${body.zoom}/210x297@2x.jpg`, function(response) {
      response.pipe(file);
   });
}

// trying to catch getMap request
app.post('/getMap', async (req,res) => {
   // console.log(req.body);
   const body = req.body;
   getBackground(body);
   res.json('test');
});