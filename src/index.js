import './style.css';

import { retrieveFromAPI } from './modules/fromAPI.js';

import { postToApi } from './modules/toAPI.js';

export const leaderBoardWrapper = document.querySelector('.leaders');
const leaderName = document.querySelector('#name');
const leaderScore = document.querySelector('#number');
const form = document.querySelector('#form');

const myGameURL = 'ojq3rdgoTgouE5sLha5K';
export const baseURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${myGameURL}/scores/`;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postToApi(leaderName.value, leaderScore.value);
  form.reset();
});

export const displayLeaders = ({ user, score }) => {
  leaderBoardWrapper.innerHTML += `<li>${user}: ${score}</li>`
}



const refresh = document.querySelector('#refresh');

document.addEventListener('click', (click)=> {
  if(click.target.id === 'refresh') {
    retrieveFromAPI();
  }
});