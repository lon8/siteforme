function sendData(name, email, message) {
  const data = { name, email, message };
  console.log('Income object', data);
  console.log('hey');
  fetch('https://jsonplaceholder.typicode.com/todos/3', {
    method: 'GET',
  })
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      document.getElementById('result').innerHTML = text;
    });
}
