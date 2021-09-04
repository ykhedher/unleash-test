const http = require("http");
const express = require('express')
const app = require("./app");
const path = require("path");
const port = process.env.PORT || 5000;


app.use(express.static(path.resolve(__dirname,"../front-end/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../front-end/build", "index.html"));
});

const server = http.createServer(app);
server.listen(port, () => console.log(`Listenning on port ${port}`));
