const topic = document.querySelector('.container');
const body = document.querySelector('body');
const form = document.querySelector('.formAnswer');
        
        
const btnHome = document.querySelector('.goHome')
if(btnHome){
  btnHome.addEventListener('click', (e) => {
  window.location.href = 'http://localhost:3000/';
})}

if (topic) {
  topic.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('id');
    window.location.href = `http://localhost:3000/question/${target}`;
  });
}
let counter = 0;
if (body) {
  body.addEventListener('click', async (e) => {
    const id = e.target.getAttribute('data-id');

    if (e.target.classList.contains('btnNext')) {
      counter += 1;
      if (counter < 5) {
        e.preventDefault();
        const res = await fetch(`/question/${id}`, {
          method: 'post',
          headers: { 'Content-Type': 'Application/json' },
          body: JSON.stringify({ counter }),
        });
        const { html } = await res.json();

        // console.log(e.target.parentNode)

        e.target.parentNode.parentNode.insertAdjacentHTML('afterend', html);
        // console.log(e.target.parentNode)
        e.target.parentNode.parentNode.remove();
        // e.target.closest('.card').remove()
      } else {
        window.location.href = 'http://localhost:3000/';
      }
    }
  });
}

// if (form) {
body.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = e.target.getAttribute('data-id');
  const { method, answerInput } = e.target;
  // if (id ==1) {

  // }
  const res = await fetch('/answer', {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      answerInput: answerInput.value,
      id,
    }),
  });
  const data = await res.json();
  document.querySelector('.otvet').innerHTML = data.otvet;
  // console.log(answerInput.value, '==============');
});
//}
