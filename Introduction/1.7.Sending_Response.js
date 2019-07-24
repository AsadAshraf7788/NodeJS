
const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.headers, req.url, req.method);
    /*
      http:Server CLASS
      listen()
      and this class has a child 
      ServerResponse
      has a method setHEader()
      lets use it
      https://nodejs.org/api/http.html#http_response_setheader_name_value
      Must see the link


    */
   // Remember res was set up by Node for us as a oBject information for response iff sent
   res.setHeader(
     /*
      Takes a key value pair
      see the documentation link given above
     */
    'Content-Type','text/html'
    /*
      Content-Type is the key that Browser knows
      Obviously we need to send the data that browser knows!
      ==> Cram all the keys ??
      No later we will see a fine package by Node js that 
      set the things in headers for us. ------------------------------> Express is her name! 
      Remember its meta Data
    */
   );
   // In headers meta data we said that we will send html text, now lets send it
   res.write('<html>');
   /*
    https://nodejs.org/api/http.html#http_response_setheader_name_value
    Obvioulsy it is response class method
    has two variations
    One with call back method as well
    But here we are making it simple
    Returns a boolean and calling write(chunk[])
   */

    // Hehe obviously we will learn a good way to write html as well

    res.write('<header><title>Server</title></header>');
    res.write('<body><h1>Hello From Node Server.</h1></body>');
    res.write('</html>');
    /*
     After setting all the headers and all response stuff
     https://nodejs.org/api/http.html#http_response_setheader_name_value
     Should be called on each response
     Also, we can never write again for the current response.
    */
    res.end();

    /*
      With this Server should send back the response
      with we told him we are sending the html in meta data header
      and wrote the HTMl for the response as well.

    */
   // process.exit();

   // Aw, we did it. But obvioulsy its nitty gritty
   // We will learn many ways to make it simpler
   // BUsiness is whats going on under the hood

   // DNT forget to see the network TAB -_-
});

server.listen(3000);

