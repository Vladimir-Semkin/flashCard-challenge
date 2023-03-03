const React = require('react');
const Layout = require('./Layout');
const Question = require('./Question')

module.exports = function CardQuestion({  newArr, counter, id}) {
  return (
    <Layout>
  
      <Question newArr={newArr} counter={counter} id={id} ></Question>
     
    </Layout>
  );
};
