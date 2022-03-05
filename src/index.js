import './style.css';

import retrieveFromAPI from './modules/fromAPI.js';

import postToApi from './modules/toAPI.js';

export const leaderBoardWrapper = document.querySelector('.leaders');
const leaderName = document.querySelector('#name');
const leaderScore = document.querySelector('#number');
const form = document.querySelector('#form');

const myGameURL = 'aJjPvQ7cnENMtVlki6KE';
export const baseURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${myGameURL}/scores/`;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postToApi(baseURL, leaderName.value, leaderScore.value);
  form.reset();
});

export const displayLeaders = ({ user, score }) => {
  leaderBoardWrapper.innerHTML += `<li class="animated bounce"><span>${user}</span><span class="span">${score}</span></li>`;
};

document.addEventListener('click', async (click) => {
  if (click.target.id === 'refresh') {
    const leaders = await retrieveFromAPI(baseURL);

    leaderBoardWrapper.innerHTML = '';
    leaders.forEach((leader) => {
      displayLeaders(leader);
    });
  }
});