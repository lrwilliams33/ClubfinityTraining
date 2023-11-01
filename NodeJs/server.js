// run in terminal write "npm run dev"



const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const { tr } = require('date-fns/locale');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

// coors wont prevent these sites from accessing the back end data
app.use(cors(corsOptions));

// cross origin resource sharing
app.use(cors(corsOptions));

// middleware to handle unrelated data aka form data
app.use(express.urlencoded({ extended: false }));

// built in middleware for json
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

// serve static files
// applies the css files??
app.use('/', express.static(path.join(__dirname, '/public')));

// routes
app.use('/', require('./routes/root')); // router
app.use('/register', require('./routes/register')); // router
app.use('/auth', require('./routes/auth')); // router
app.use('/refresh', require('./routes/refresh')); // router

app.use(verifyJWT);
app.use('/employees', require('./routes/api/employees')); // router



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