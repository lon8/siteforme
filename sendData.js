function sendData(name, email, message) {
  const date = new Date().toLocaleString();
  const data = { name, email, message, date };
  console.log('Income object ', data);
  fetch('https://jsonplaceholder.typicode.com/todos/3', {
    method: 'GET',
  })
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      console.log('result object: ', JSON.parse(text));
    });
  document.getElementById('request').reset();
}
