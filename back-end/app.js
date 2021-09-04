const express = require("express");
const cors = require('cors');
const TrieSearch = require("trie-search");
const data = require('./data/adresses.json')

const app = express()
app.use(cors());

const trie = new TrieSearch("street");
trie.addAll(data);

app.get("/search/:id", (req, res) => {
  const id = decodeURIComponent(req.params.id)
  res.status(200).send(trie.search(id));
});

module.exports = app;
