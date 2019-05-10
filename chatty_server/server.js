const express = require("express");
const webSocket = require("ws");
const SocketServer = webSocket.Server;

const uuid = require("uuid");

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static("public"))
  .listen(PORT, "0.0.0.0", "localhost", () =>
    console.log(`Listening on ${PORT}`)
  );

// Create the WebSockets server
const wss = new SocketServer({ server });

//Broadcasting to all the users
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === webSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on("connection", ws => {
  console.log("Client connected");
  let userNumberData = {
    clientNumber: wss.clients.size
  };
  wss.broadcast(userNumberData);

  //Randomly assgining colors to each users
  let userColor = ["#0900c3", "#00a8b5", "#8ed6ff", "#2f89fc", "#6c5ce7", "#32dbc6"];
  let randomNumber = Math.floor(Math.random() * 6);
  let chosenColor = {
    randomColor: userColor[randomNumber]
  };
  wss.broadcast(chosenColor);

  //Handling data from client
  ws.on("message", function incoming(data) {
    let newData = JSON.parse(data);
    newData.id = uuid();
    if (newData.type === "postNotification") {
      newData.type = "incomingNotification";
    }
    if (newData.type === "postMessage") {
      newData.type = "incomingMessage";
    }

    wss.broadcast(newData);
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser
  ws.on("close", () => {
    console.log("Client disconnected");

    let userNumberData = {
      clientNumber: wss.clients.size
    };
    wss.broadcast(userNumberData);
  });
});
