const express = require('express');
const app = express();
const port = process.env.PORT || 5050;
const cors = require('cors');
const path = require('path');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

// sends correct page no matter where you start
app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
   console.log(`Server is up at port ${port}`);
});

// get map background
// need to install node-fetch
const getBackground = (body) => {
   fetch(`http://localhost:8080/styles/toner/static/${body.center[1]},${body.center[0]},${body.zoom}/210x297@2x.jpg`)
      .then(response => response.json())
      .then(data => console.log(data));
}

// trying to catch getMap request
app.post('/getMap', async (req,res) => {
   console.log(req.body);
   const body = req.body;
   getBackground(body);
   res.json(body);
});