
// Server ?

// Protocol

const http = require('http');

// Lets get the server for this protocol

const server = http.createServer((req,res)=>{
  console.log('Hello from the Server');
  console.log(req.headers); 
  const url = req.url;
  if(url === '/'){
    res.write(`
            <html>
              <header>
                  <title>
                      Enter Message
                  </title>
              </header>
              <body>
                <form action="/Something" method="POST" >
                  <input type="text" name="message">
                  <button type="submit">Submit</button>
                </form>
              </body>   
            </html>
            `);
  return res.end();
  }
  // single threaded process -_- 
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