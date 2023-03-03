const express = require('express');

const { QA } = require('../db/models');
const CardQuestion = require('../components/CardQuestion');
const Question = require('../components/Question');


const router = express.Router();

router.get('/:id', async (req, res) => {
  let counter = 0;
  const { id } = req.params;
  const question = await QA.findAll({ where: { topic_id: id } });

  const newArr = question.filter((el) => el.topic_id === Number(id));

  res.renderComponent(CardQuestion, { newArr, counter, id });
});
let nezarezerv;

router.post('/:id', async (req, res) => {
  const { counter } = req.body;

  const { id } = req.params;
  const question = await QA.findAll({ where: { topic_id: id } });

  const newArr = question.filter((el) => el.topic_id === Number(id));
  console.log(req.params);

  res.json({
    html: res.renderComponent(
      Question,
      { newArr, counter, id, nezarezerv },
      { htmlOnly: true }
    ),
  });
});

router.post('/', async (req, res) => {
  const { answerInput, id } = req.body;

  const answer = await QA.findOne({ where: { id } });
  if (answer.answers !== answerInput) {
    nezarezerv = `нет, правильный ответ: ${answer.answers}`;
    res.json({ otvet: nezarezerv });
  } else {
    nezarezerv = 'Правильный ответ, ты молодец, ничего себе, ого-го!';
    res.json({ otvet: nezarezerv });
  }

  
  console.log(answer.answers, answerInput);
});

module.exports = router;
