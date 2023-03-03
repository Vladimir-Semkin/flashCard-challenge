const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ themes }) {
  return (
    <Layout>
      <h1 className="d-flex justify-content-evenly h-100 d-inline-block mt-5">
        Бобро пожаловать
      </h1>
      <div className="container d-flex justify-content-evenly position-absolute top-50 start-50 translate-middle">
        <button
          type="button"
          id="1"
          className="themes btn btn-outline-light btn-lg"
          data-id="1"
        >
          {themes[0].title}
        </button>
        <button
          type="button"
          id="2"
          className="themes btn btn-outline-primary"
          data-id="2"
        >
          {themes[1].title}
        </button>
        <button
          type="button"
          id="3"
          className="themes btn btn-outline-danger"
          data-id="3"
        >
          {themes[2].title}
        </button>
      </div>
    </Layout>
  );
};
