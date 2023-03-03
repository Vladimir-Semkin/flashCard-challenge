const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        ></link>
        <link rel="stylesheet" href="/css/index.css" />
        <script defer src="/js/application.js" />
        <title>бобропожаловать</title>
      </head>
      <body>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Бобр-bar</a>
   
   
      <div className="navbar-nav">
        <a className="nav-link active btn btn-danger text-white" aria-current="page" href="https://zakon.gov.spb.ru/napravleniya-deyatelnosti/rabota-s-organami-voennogo-upravleniya-po-organizacii-prizyva-na-voenn/voennyj-komissariat-goroda-sankt-peterburga-informiruet/">Лучше не надо...</a>
        <a className="nav-link active goHome" aria-current="page" href="#">Даже не думай</a>
        
      </div>
    
  </div>
</nav>
        {children}</body>
    </html>
  );
};
