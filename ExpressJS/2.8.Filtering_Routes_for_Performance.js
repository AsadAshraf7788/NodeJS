
const expressRequireResult = require('express');

const adminRoutes = require('./2.0.Routes/admin');
const shopRoutes = require('./2.0.Routes/shop');
const errorRoute = require('./2.0.Routes/404error');

const app = expressRequireResult();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/shop',shopRoutes);
app.use('/admin',adminRoutes);
app.use(errorRoute);

app.listen(3000);

// For what is happening in this concept... see
// Filtering routes in Routes folder

/*
  So this filter macanism allows us to
  put a common starting path which all routes in a file use
  to get to the file which is used by the files routes!
  Funneled through filterings
  */