const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ themes }) {
  return (
    <Layout>
     <div>   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav></div>
      <div className="container"> 
      {/* <h1>Бобро пожаловать</h1> */}
        <button type="button" id="1" className="themes" data-id="1">
          {themes[0].title}
        </button>
        <button type="button" id="2" className="themes" data-id="2">
          {themes[1].title}
        </button>
        <button type="button" id="3" className="themes" data-id="3">
          {themes[2].title}
        </button>
      </div>
    </Layout>
  );
};
