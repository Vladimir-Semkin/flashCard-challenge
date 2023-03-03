require('@babel/register');
const express = require('express');
const path = require('path');
const ssr = require('./middleware/ssr');
const homeRouter = require('./routes/home.routes');
const cardQuestionRouter = require('./routes/cardQuestion.routes');
const cardAnswerRouter = require('./routes/cardQuestion.routes');
//configs
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(ssr);

//routers
app.use('/', homeRouter);
app.use('/question', cardQuestionRouter);
app.use('/answer', cardAnswerRouter);
app.use(express.static(path.join(__dirname, 'public')));
// app.use(morgan(‘dev’);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Serverv started at ${PORT}, port `);
});
