

// Server ?

// Protocol

const http = require('http');

// Lets get the server for this protocol


const server  = http.createServer((res,req)=>{
  res.setHeader('Content-Type','text/html');
  res.write(`
            <html>
              <header>
                  <title>
                      Thinking
                  </title>
              </header>
              <body>
                <h1>Response</h1>
              </body>   
            </html>
            `);
  res.end();
  //process.exit();
});


// Server should listen

server.listen(3000);