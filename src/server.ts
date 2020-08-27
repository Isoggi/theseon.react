import express from 'express';

const app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World!');
//   });

let listenPort = process.env.PORT || 3000;

app.listen(listenPort, ()=> {
  console.log("server running on port "+ listenPort);
})
