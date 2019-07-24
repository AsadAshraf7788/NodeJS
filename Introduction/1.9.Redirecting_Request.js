
// Server ? 
// Protocol

// Modules
// Using http module
const http = require('http');
// Using fs Api module
const fs = require('fs')

// Lets get the server for this protocol
const server = http.createServer((req,res)=>{
  console.log('Hello from the Server');
  console.log(req.headers); 
  const url = req.url;
  if(url === '/'){
    // action means where you wanna redirect to?
    // method is just url tweak to go for the input field as is or encrypted.
    res.write(`
            <html>
              <header>
                  <title>
                      Enter Message
                  </title>
              </header>
              <body>
                <form action="/message" method="POST" >
                  <input type="text" name="message">
                  <button type="submit">Submit</button>
                </form>
              </body>   
            </html>
            `);
  return res.end();
  }
// The method property is set by the Node for us
const method = req.method;
  if(url === '/message' && method === 'POST')
  {
    // we will see writefile in a moment
    // The way to take out data into Node fomr Html is still to be learn
    const file = fs.writeFileSync('Message.txt','Dummy');
    //writehead is used for to write some meta information in one go
    // Set header is used to go for one at a time
    res.statusCode = 302;              // SC mean redirecting
    res.setHeader('Location','/');     // Key value just like Content-type = 'html/type'
    // '/' for ? Use the host over we are runing on
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