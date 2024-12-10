// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ message: "Hello Service" });
});

app.get("/user", (req, res) => {
  res.send({ 
    developer: "Abdulrahman Haaji",
    company: "Tabarak ICT",
    depart: "Software Development",
    ID: "002"

   });
});

app.get("/server", (req, res) => {
  res.send({
  server: "node-js service",
  port: 2400
  });
});



const PORT = 2400; // App listens on port 3200
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
