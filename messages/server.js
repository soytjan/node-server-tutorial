const http = require("http");
const url = require('url');
const server = http.createServer();

let messages = [
  {'id': 1, 'user': 'brittany', 'message': 'hi there!'},
  {'id': 2, 'user': 'bob', 'message': 'what up homie?'},
  {'id': 3, 'user': 'friend', 'message': 'yo yo yo'},
]

server.listen(3000, () => {
  console.log('The HTTP server is listening at Port 3000.')
});

server.on('request', (request, response) => {
  if (request.method === 'GET') {
    getAllMessages(response);
  }

  else if (request.method === 'POST') {
    let newMessage = { 'id': new Date() };

    request.on('data', (data) => {
      newMessage = Object.assign(newMessage, JSON.parse(data));
    });

    request.on('end', () => {
      addMessage(newMessage, response);
    });
  }
});

const getAllMessages = (response) => {
  const jsonMessages = JSON.stringify(messages)

  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(jsonMessages);
  response.end();
}

const addMessage = (newMessage, response) => {
  const jsonMessages = JSON.stringify(newMessage)
  
  response.writeHead(200, {'Content-Type': 'text/plain' });
  response.write(jsonMessages);
  response.end();
}

