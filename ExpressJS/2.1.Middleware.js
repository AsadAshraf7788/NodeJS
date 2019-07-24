
// const express = require('express');

// /* 
//   Remember the REQUIRE function theory ?
//   it returns a function so we can call it as we are doing here.
// */

// const app = express();
// /* app is an request handler with http protocol Stuff
//     No need to explicitly tell which type of protocol you will use
//     Buildin features of Express are defined as to determine themself
//     Obviously if you are using Express you are working on HTTP
//     HTTP or HTTPS depends on the calls we make!!!
//   */

// const server = http.createServer(app);
// server.listen(3000);

// /*
//   I installed it and thats all?
//   No,
//   Ok, Do you remember the Sync nature of JS?
//   Aw... And that question that what if the response is sent before the call backs
//   worked on it by write function ?
//   Mmm.
//   So y'll have to take care where to send response and where not to ?
//   Yup!
//   If Node is giving us this much than why not give us a way to do this too?
//   I guess Express is the answer!!!


//   *****************************************************
//   Key feature of Expres is that it defines a Well defined wayout
//   to handle request and responses
//   *****************************************************
//   Expressjs is all about middle ware
//   */


// /*
//   In Express instead of having ONE REQUEST handler 
//   the req goes through a multiple number of functions
//   Untill you send the response
//   This makes the plugable express nature....!
//   i.e
//   Other 3rd party frames just gives you functions to use in your middleware
//   The funtuions through which a request gooes is middleware btw!
//   */

// /*
//   Express gives us a really flexible function as use which has many 
//   variations


//   NOw remember what we did before after getting the protocol we need to make a server?
//   Obviously called the 
//   http.createserver on htpp object made by using function
//   returned by require('http') 
//   Here we passed a predicate function which we called with res,req
//   assuming that Node will automatically takes the request and response object
//   from HTTP protocol's returns and fill it for us!
//   Here
//   We use 'use' function on express returns as app is in following example
//   const app = express();
//   Arguments?
//   Node functionality in VNode?
//   Yes, here we will send the predicate function we passed to createserver
//   earlier in case of Http...
//   But this function is rather flexible...
//   How?
//   1. res req has some extra informations
//   2. This Express framework function takes another predicate function as
//       argument that will be passed to the createserver function
//       by the express use function and will be executed to make the 
//       request goto the next middleware...
//       To make it easy think of USE as a gateway to enter in funnel provided by express
//       and predicate be the function that will tell if the gateway is closed and
//       we will send the response, ( remember this will also take care of the sync
//       nature problems with response to sent) or there is another middleware to be passed
//       by calling next() function provided by express which will have its next() as well.
         // maKING HIM KNOW THAT MAKE POOL BY USING THIS NEXT

//   */
const http = require('http');
const expressRequireResult = require('express');
// Note by default the ; is implicit in JS
const app = expressRequireResult();
// As we know its result is a function so we called it

// Before making server lets give it way to make gateways for us

app.use((req,res,next) =>{
  console.log('Middleware One is enntered through Use Gateway!!!');
  // Call next to go to the middleware
  // Express will go from top to btm and will call the midlleware iff
  // the next is called for it else the pool exits
  next();
  /*
      Now if the next is not called we must send the response because
      the request will die and it would never reach a place 
      As see in the second middle ware's comment

    */
});

app.use((req,res,next) =>{
  console.log('Middleware Second is enntered through Use Gateway!!!');
  // No next middleware ? send the response here
  // Coz express does not sends the response by default
  // Response is sent by new utility function
  res.send('<h1>Hello from Express</h1>');
  // Study what we did first ?
  /*
    There...
    we let chrome knows what tpye of response we are sedning
    by setting res.setheader( takes key value pair)
    and then
    write the response to be sent by using 
    res.write(chunk[]);
    than ending the response
    res.end(); Rem when note used what happens?
    */
   // Obviously we will see the variations and flexibility of this function
});

/*
  Sending the Use a function with anotherfunction as args and the body defined 
  to the caller will be writen in it as to be executed.

  */

// Now lets make the server
const server = http.createServer(app);
server.listen(3000);

// Now must read 
// https://expressjs.com/en/guide/using-middleware.html