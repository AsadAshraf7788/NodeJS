/*
How can we spin up server

there are two ways
Use JS objects Globally
Or import the core modules give

fs files making
path
Os package
HTTP HTTPS
Last two are the real core in Node js


HTTP can also send req to other server like GOOGLE

Lets use HTTP module

lets import it

let can also be used

but lets use const , why ?

There is a special function that node js exposes Globally

Here we import files to Node Js
we can import our own files as well
or use core model
lets use http module

./ means look for a file, if not used it will see for the core moduels

http is object no itsa module
const http = require('http');


// function that takes request listener
function reqListner(  
     // first is incoming massage, read it maybe
     // 2nd is the response
 
 req, res
){

}
*/

// This function is used to make a new server by sending the standerds we need i.e http;
//  http.createServer(function reqListner(req,res) {

//  });

// we can use arrow function which is indeed the New school approach

// retuens a server
const server = http.createServer((req,res)=>{
   // for now
   console.log(req);
});

// Now server is the object with Node JS core methods
// Will never Stop our script and will listen for the requests
server.listen(
 /*
   first is port number
   In real servers the port is already assignmeed as default
   but we are making it a Local server Node, so pass a port number 
 */
 3000
 // second is server name which is again in our case localhost
);
/*
Reexecute to see what happens
The ongoing looping process will happen and the script will never end
see in action ===>
go to browsers and see the port and come back to terminal

Nothing happens on the browser because we have not send any response as
HTMl or JSOn, XMl


Aw... we made a fully functional Node JS server

*/