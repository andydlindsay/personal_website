// load environment variables early
require('dotenv').config();

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const path = require('path');
const cors = require('cors');

// database setup
const mongooseOptions = {
    useMongoClient: true,
    promiseLibrary: bluebird
};
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`, mongooseOptions);
mongoose.connection.on('error', (err) => {
    console.error('Database error: ' + err);
});

// app setup
const app = express();

// cors middleware
app.use(cors());

// app middlewares
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

// routes
const projects = require('./routes/projects');
const messages = require('./routes/messages');
app.use('/api/projects', projects);
app.use('/api/messages', messages);

// default route to load React
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
