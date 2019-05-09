  // app.use(express.static('public'))
 // app.use(express.static('public'))
  // import express from 'express';
  const express = require('express')
  const db = require('./db')
  // import React from 'react';
  // import { renderToString } from 'react-dom/server';
  // import App from './app';
  var app = express()
  app.use(express.static('public'))
// const server = express();
express.post('/' ,{
  db.save(JSON.parse(body))
})
const port = 8080

// app.get('/', (req, res) => {
// // count arr =[
// // {}
// // ]
// res.sendFile("./public/index.html")
//   // 
// });

app.listen(port);

