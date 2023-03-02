const express = require('express');
const ReactDOMServer = require('react-dom/server');
const react = require('react');

const Home = require('../components/Home');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('dsfsdf');
});
