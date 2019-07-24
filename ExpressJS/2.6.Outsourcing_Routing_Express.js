
/*
  Even though our dummy app is so small this time as compared to the VJS app
  But we are entering each of our code in this single file i.e for routes
  we will have to add a new middleware in pool which is ming this file noisy
  Yes
  we can go for multiple app routes and import them here
  As we did in 1.0.. section
  But ExpressJS gives us a realy fine way to outsource our multiple files
  Lets see what imean!!!
*/

/*
  To do this lets first change the stuructue of code by adding the routes folder
  Make two f iles in it...
  Now, in files we will use express.Router();
  which is the function like mini express app and plugable like 
  into the other express app we are learning!!!
  see admin.js 
  */

 const expressRequireResult = require('express');

 const adminRoutes = require('./2.0.Routes/admin');
 const shopRoutes = require('./2.0.Routes/shop');
 /*
   How to add the middlewares of the imported file into the pool of this app?
   The best thing express gives us here is that
   adminRoutes in a middleware function itself!!!
   although as we know the context express imports also returns the function
   it is also middleware function ? THink!!!
   So
   Here we can call the function by using adminRoutes()
   wait...
   No
   Routes of express also do the add property method on this feature
   so that we can call it as
   a
   prop
   adminRoutes
   Let me show ya
 */
 const app = expressRequireResult();
 
 const bodyParser = require('body-parser');
 
 app.use(bodyParser.urlencoded({extended:false}));
 
 
 /*
   The syntax below is giving us something really important about
   get, post 
   See they look for the exact match of path given while they filter
   use method just makes sure that the path should be statred as given to him
   And, if get request is sent for a response that is post
   Get/post sends a realy bad error
   But usualy we redirect the user to 404 not found!!!
   Also, remember we were thinking the <form> tag method="POST" that we 
   cannot relir on it. yes get/post makes it ez for Us...!!!
 
 
   Also, here the order does not matter as we wrote '/' at the end previously
   here everything is fine
   which is another tweak by Router method of express!!!
   because we are using get/post at backend!!!
 */
 app.use(shopRoutes);
 app.use(adminRoutes);

 
 
 app.listen(3000);
 