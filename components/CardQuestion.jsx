const React = require('react');
const Layout = require('./Layout');

module.exports = function CardQuestion({ newArr, counter, id }) {
  return (
    <Layout>
      {id === '2' ? (
        <div class="card" style={{ width: '18rem' }}>
          <img
            src={newArr[counter].questions}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <a href="#" data-id={id} type="buton" className="btn btn-primary btnNext">
              Go somewhere
            </a>
          </div>
        </div>
      ) : (
        <div className="card" style={{ width: '30rem' }}>
          <div className="card-body">
            <p className="card-text">{newArr[counter].questions}</p>
            <input />
            <a
              href="#"
              data-id={id}
              type="buton"
              className="btn btn-primary btnNext"
            >
              Go somewhere
            </a>
          </div>
        </div>
      )}
    </Layout>
  );
};
