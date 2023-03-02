const topic = document.querySelector('.container');
const body = document.querySelector('body');

if (topic) {
  topic.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('id');
    window.location.href = `http://localhost:3000/card/${target}`;
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
        const res = await fetch(`/card/${id}`, {
          method: 'post',
          headers: { 'Content-Type': 'Application/json' },
          body: JSON.stringify({ counter }),
        });
        const { html } = await res.json();

        // console.log(e.target.parentNode)
        e.target.parentNode.insertAdjacentHTML('afterend', html);
        e.target.parentNode.remove();
      } else {
        window.location.href = 'http://localhost:3000/';
      }
    }
  });
}
