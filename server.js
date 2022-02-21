const express = require('express');
const router = express.Router();
const app = express();
const port = process.env.PORT || 5050;
const cors = require('cors');
const path = require('path');
app.use(cors());
app.use("/",router);
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

// trying to catch getMap request
app.post('/getMap', (req,res) => {
   console.log('request body: ', req.body);
   res.send('MAPTHING');
});