

const expressRequireResult = require('express');
const app = expressRequireResult();

// 1!!!
//_____________________________ Routes
/*
  Previously we used if else checks to use 
  1.Optional first args in use
  2. Callbacks more than 1
  3. Multiple path filters

  */
 
// 2!!!!
// LEts add a path that is default
app.use('/add-product',(req,res,next) =>{
  console.log('Product middleware is enntered through Use Gateway!!!');
  res.send('<h1>This is product page</h1>');
  //next();
  // next concept changes here, it is build in Express function to for the next middleware in the pool
});

/* 3!!!
  Now what if i will mount localhost:3000/app-product
  We still see Hello from express, wait, what ?
  Why ?
  Because '/' does not mean that the full route should have to be / but it
  should start with that
  Aw!!!!

  */
 /*
  Solution for 3!!
  take middleware with '/' at last and put rest on the top
  As
  we are also sending response in the middleware in Express as compared to VJS
  '/', which is at last will never get the chance to execute iff no explicit route is passed
  which will ofcourse than trigger the first top middlewares
  the benifits of JS is used here, sync nature
  Letss do it
  */
app.use('/',(req,res,next) =>{
  console.log('Default Middleware is enntered through Use Gateway!!!');
  res.send('<h1>Hello from Express</h1>');
});

// Now lets make the server using express Now see 2.2
app.listen(3000);
// NO need to import http as well!!!


