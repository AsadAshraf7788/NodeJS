
// Always remember why you are here in this file

/*
  we were able to parse the things using 3rd party package
  we can use...
  app.get()
  app.post()
  this makes the middlewares to be filtered by looking at the type of request 
  in express

*/



const expressRequireResult = require('express');
const app = expressRequireResult();

// Parsing the incoming request!!!

const bodyParser = require('body-parser');
  
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next) =>{
  console.log('Product middleware is enntered through Use Gateway!!!');
  res.send(`
            <form action="/product" method="POST">
              <input type="text" name = "message">
              <button type="submit"> Add product
              </button>
            </form>
  
            `);
  });

/*
  use will work with all http methods but get and post will
  filter the requests type to see what to do and when to do!!!
  we also have put delete patch
  we will wotk these other http works later and sooner!!
  */
app.post('/product',(req,res,next)=>{
  console.log('Product adding middleware is reached!!!');
  console.log(req.body);
  
  res.redirect('/');
});
app.use('/',(req,res,next) =>{
  console.log('Default Middleware is enntered through Use Gateway!!!');
  res.send('<h1>Hello from Express</h1>');
});

app.listen(3000);


