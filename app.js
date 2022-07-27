
const express = require("express"); // Access
// const socket = require("socket.io");



const app = express() // intialize and server ready
app.use(express.static("public"));




let port = 5000;
 let server = app.listen(port, () => {
    console.log("listening port " + port);
})

const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  });

io.on("connection", (socket)  => {
        console.log("made socket connection");
        // Received data
       socket.on("beginPath", (data) => {

            // data from frontend
            // transfer data to all connector
            io.sockets.emit("beginPath", data);

         });

        socket.on("drawStroke", (data) => {
        io.sockets.emit("drawStroke", data);
         });

         socket.on("redoUndo", (data) => {
             io.sockets.emit("redoUndo", data);

         });

    })


 