const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // import product routes
const app = express();// init the app


// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost/productstutorial';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 1234;

app.listen(port, () => {
console.log('the server is up mate, its running on port ' + port)
});