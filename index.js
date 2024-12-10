// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ message: "Hello Service" });
});

const PORT = 2400; // App listens on port 3200
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
