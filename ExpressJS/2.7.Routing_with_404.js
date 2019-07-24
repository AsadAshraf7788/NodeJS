


const expressRequireResult = require('express');

const adminRoutes = require('./2.0.Routes/admin');
const shopRoutes = require('./2.0.Routes/shop');
const errorRoute = require('./2.0.Routes/404error');

const app = expressRequireResult();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use(shopRoutes);
app.use(adminRoutes);
app.use(errorRoute);
/*
  Remember we said that the order does not matter here
  and also bad error while no routes found!!!
  here
  we use sync nature of VJS to add a 404 error route at the end
  Obviouly the response will be sent by it iff mouting path does not matched
  on middlewares above it!
  */


app.listen(3000);
