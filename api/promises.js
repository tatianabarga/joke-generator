const jokeEndpoint = 'https://v2.jokeapi.dev/joke/Any?format=json&safe-mode&type=twopart';

const getJoke = () => new Promise((resolve, reject) => {
  fetch(jokeEndpoint, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getJoke;
