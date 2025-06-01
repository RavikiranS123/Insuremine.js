var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Insuredmine 3rd floor, Gangothri Tower, L140, 5th Main Rd, above Jana Small Finance Bank, Sector 6, HSR Layout, Bengaluru, Karnataka 560034'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
