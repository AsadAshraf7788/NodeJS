
const expressRequireResult = require('express');

const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoute = require('./routes/404error');

const app = expressRequireResult();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

/*
  static function of express makes a box that will be handled for public things
  Multiple static can make multiple boxes
  Also,
  */

app.use(expressRequireResult.static(path.join(__dirname,'public')));

app.use('/shop',shopRoutes);
app.use('/admin',adminRoutes);
app.use(errorRoute);

app.listen(3000);

// Views  contains the HTMl files to be responded
