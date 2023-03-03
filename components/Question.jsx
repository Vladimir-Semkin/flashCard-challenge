const React = require('react');

const Layout = require('./Layout');

module.exports = function Question({ newArr, counter, id }) {
  return (
    <div>
      {id === '2' ? (
        <div
          className="card "
          style={{
            width: '60rem',
            height: '60rem',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            padding: '30px',
          }}
        >
          <img
            src={newArr[counter]?.questions}
            className="card-img-top "
            alt="..."
          />
          <form
            method="post"
            className="formAnswer d-flex justify-content-evenly"
            style={{
              padding: '20px',
            }}
            data-id={newArr[counter]?.id}
          >
            <input name="answerInput" />
            <button type="submit" className="btn btn-success btn-sm">
              Ответить
            </button>
          </form>
          <div className="card-body">
            <a
              href="#"
              data-id={id}
              type="buton"
              className="btn btn-primary btnNext"
            >
              Некст квестион
            </a>
            <div className="otvet" />
          </div>
        </div>
      ) : (
        <div
          className="card "
          style={{
            width: '70rem',
            height: '60rem',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            padding: '30px',
          }}
        >
          <div className="card-body">
            <p className="card-text">{newArr[counter].questions}</p>
            <form
              method="post"
              className="formAnswer"
              data-id={newArr[counter]?.id}
            >
              <input name="answerInput" placeholder="плейсхолдер" />
              <button type="submit" className="btn btn-success">
                Ответить
              </button>
            </form>
            <a
              href="#"
              data-id={id}
              type="buton"
              className="btn btn-primary btnNext"
            >
              Некст квестион
            </a>
            <div className="otvet" />
          </div>
        </div>
      )}
    </div>
  );
};
