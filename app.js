require('@babel/register');
const express = require('express');

const app = express();
// app.use(morgan(‘dev’);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Serverv started at ${PORT}, port `);
});
