// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getJoke from '../api/promises';
import renderToDom from '../utils/renderToDom';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <button class="btn btn-danger" id="click-me">Get a joke!</button><br /> 
    <div id='joke-spot'></div>
    <div id='pl-spot'></div>
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  document.querySelector('#click-me').addEventListener('click', () => {
    getJoke().then((joke) => {
      renderToDom('#joke-spot', joke.setup);
      renderToDom('#pl-spot', joke.delivery);
    });
  });
};

init();
