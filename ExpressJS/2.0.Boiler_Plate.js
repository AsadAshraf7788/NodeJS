

const expressRequireResult = require('express');
const app = expressRequireResult();


app.use('/add-product',(req,res,next) =>{
  console.log('Product middleware is enntered through Use Gateway!!!');
  res.send('<h1>This is product page</h1>');
  });

app.use('/',(req,res,next) =>{
  console.log('Default Middleware is enntered through Use Gateway!!!');
  res.send('<h1>Hello from Express</h1>');
});

// Now lets make the server using express Now see 2.2
app.listen(3000);
// NO need to import http as well!!!


