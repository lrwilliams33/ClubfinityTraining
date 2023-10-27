
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const { tr } = require('date-fns/locale');
const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

// coors wont prevent these sites from accessing the back end data
const whitelist = ['https://www.mysite.com', 'http://127.0.0.1:5500', 'http://localhost:3500'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
}

// cross origin resource sharing
app.use(cors(corsOptions));

// middleware to handle urlencoded data aka form data
// content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// built in middleware for json
app.use(express.json());

// serve static files
// applies the css files??
app.use(express.static(path.join(__dirname, '/public')));

app.get('^/$|/index(.html)?', (req, res) => { // symbols are regex
  //res.sendFile('./views/index.html', {root: __dirname});
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page.html', (req, res) => {
  //res.sendFile('./views/index.html', {root: __dirname});
  res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/old-page.html', (req, res) => {
  //res.sendFile('./views/index.html', {root: __dirname});
  res.redirect(path.join(301, '/new-page.html'));
});

// default (a slash followed by anyything goes here) so it redirects to 404 because doesnt exist
app.all('*', (req, res) => {
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  }
  if (req.accepts('json')) {
    res.json({error: "404 Not found"}); 
  }
  else {
    res.type('.txt'.send("404 not found"));
  }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));