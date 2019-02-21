const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);

  data.append('to', "bgrv.rvshn@gmail.com");
  
  fetch('https://webdev-api.loftschool.com/sendmail', {
    method: "POST",
    body: data
  }).then((res) => {
    return res.json();
  }).then((response) => {
    console.log(response);
  })
})