const express = require('express');
const { Topic } = require('../db/models');
const { QA } = require('../db/models');
const Home = require('../components/Home');

const router = express.Router();

router.get('/', async (req, res) => {
  const themes = await Topic.findAll();
  const question = await QA.findAll();
  // const mapThemes = themes.map((el) => el.title);
  res.renderComponent(Home, { themes });
});



module.exports = router;
