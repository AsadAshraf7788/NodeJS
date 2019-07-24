

const expressRequireResult = require('express');
const app = expressRequireResult();

// Parsing the incoming request!!!

const bodyParser = require('body-parser');


// Making a middle ware for parsing!!!
/*
  The extended option allows to choose 
  between parsing the URL-encoded data with 
  the querystring library (when false) or the qs
  library (when true). The "extended" syntax allows
  for rich objects and arrays to be encoded into the
  URL-encoded format, allowing for a JSON-like 
  experience with URL-encoded.
  For more information, please see the qs library.
  See the linksfile _MUST
  */
  
app.use(bodyParser.urlencoded({extended:false}));

/*
  Behind the scene this function also sends the predicate function to middlware
  and calls the next() at the end!!!
  Before that it will parse all the bodies coming to the new form ( incoming requests)
  But
  It will only parse the page level bodies like text from input, so on
  if we need to parse files like JSON files
  we will use another parser later and soon.
  Aw, so flexible it is....
  Now with that we will get the answer to req.body meta attribute.
  */

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
/*****************************************************
 This middleware will also be executed for GET request
 In VJS we used if else to handle this, Express ?
 Oye Bhai!!!
 kia keron ?
 see 2.5.0
 */
  // Req,res oder matters
app.use('/product',(req,res,next)=>{
  console.log('Product adding middleware is reached!!!');
  /*
    Remember first we used 
    req.on()
    req.end functions in JS to parse the requests
    Here, what does Express gives us????
    Aw...
    Remember i told you that req, res objects have some extra 
    features in  Express?
    Here is one of the feature
  */
  console.log(req.body);
  /*
    But it is giving me undefined!!!
    Why ?
    Aw......
    By default the body does not parse the request
    we need to adjust the parser for it...
    wait...
    which parser?
    Remeber, the portable nature of Express ???
    Remember how middleware pool gives us this functioality?
    Acha na bolo ab, How to parse tayo ?
    Aw, use third party package called body-parser
    go as npm install --save body-parser
    Rem the difference in --save and --save-dev ?
    Also, the parsing should be done no matter the which
    middle ware is called and to which page it has directed us
    So parsing is done way top in code before all middlewares!!!
    see top in code to see rest.
    */
  res.redirect('/');
});
app.use('/',(req,res,next) =>{
  console.log('Default Middleware is enntered through Use Gateway!!!');
  res.send('<h1>Hello from Express</h1>');
});

app.listen(3000);


