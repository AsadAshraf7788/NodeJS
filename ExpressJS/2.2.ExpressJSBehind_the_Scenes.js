/*
  See
  https://github.com/expressjs/express/blob/master/lib/response.js
  search for send()
  See
  it has if else to check the version 
  than
  it is setting the headers if not set by us
  At times we need to set the headers ourself as well
  In that case the things will be overwritten!!!!
  Number ---> Binary
  Now
  see this tweak to shorten the code of port making server
  Instead of writing...

  const server = http.createserver(app);
  we should do...
  app.listen(port_number);
  Here, this method has overridden thing to go for a predicate as 
  well, which we will see in future
  So,
  goto application.js
  Search for listen method and see -_-
  No http update as well -_-
  Now we will need the fine way to manage routes,
  send response as well!!!!
  Remember first we used res.write(chunk[]);
  Parsing -_-
  Lets see what to do now!!!
  */