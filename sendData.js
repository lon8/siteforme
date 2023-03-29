function sendData(name, email, message) {
  const data = { name, email, message };
  console.log('Income object ', data);
  fetch('https://jsonplaceholder.typicode.com/todos/3', {
    method: 'POST',
  })
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      console.log('result object: ', JSON.parse(text));
    });
}
