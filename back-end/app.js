const express = require("express");
const app = express();
const TrieSearch = require("trie-search");
const data = require('./data/adresses.json')

const trie = new TrieSearch("street");
trie.addAll(data);


app.get("/search/:id", (req, res) => {
  res.send(trie.search(req.params.id));
});

module.exports = app;
