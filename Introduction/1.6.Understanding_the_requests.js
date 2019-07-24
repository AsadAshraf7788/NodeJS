const http = require('http');



// http.createserver returns a SERVER class with request and response objects in it

const server = http.createServer((req,res)=>{
    // for now
    // lets out put some of much needed properties of this object

    /*
      when we called createserver method of HTTP class it sends a Server class
      response and we sended two parameters to tell node js to save the 
      data of incming request and response when we visited 3000 port which we can do 
      as we are listening on it.
      Meta information added to them by Node js
    */
    console.log(req.headers, req.url, req.method);
    /*
      As mentioned req is an class object with properties like url,headers,rawheader...
      Also, roperties can be anything in JS
      i.e headers are objects in nature and rawheaders are arrays
      if you will do localhost:3000 Url will be just a slash '/'
      because Url is basically all things after / like localhost:3000/Asad
      which makes sense localhost:3000 ==> DNS server and reach the sever
      url then determines the requested files.


    */
    process.exit();
});

server.listen(3000);

