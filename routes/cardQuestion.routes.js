const express = require('express');
const { Topic } = require('../db/models');
const { QA } = require('../db/models');
const CardQuestion = require('../components/CardQuestion');

const router = express.Router();

router.get('/:id', async (req, res) => {
  let counter = 0
  const { id } = req.params;
  const question = await QA.findAll({ where: { topic_id: id } });

  const newArr = question.filter((el) => el.topic_id === Number(id));
 

    res.renderComponent(CardQuestion, { newArr, counter, id });
  
  
});

router.post('/:id', async (req, res) => {
  const { counter } = req.body;

 
  
  const { id } = req.params;
  const question = await QA.findAll({ where: { topic_id: id } });

  const newArr = question.filter((el) => el.topic_id === Number(id));
console.log(id)

    res.json({html: res.renderComponent(CardQuestion, { newArr, counter, id }, { htmlOnly: true })});
  
});


module.exports = router;
