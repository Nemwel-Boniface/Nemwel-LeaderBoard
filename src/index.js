import './style.css';

import { addToLocalStorage, getFromLocalStorage } from './modules/localstorage.js';

const leaderBoardWrapper = document.querySelector('.leaders');
const leaderName = document.querySelector('#name');
const leaderScore = document.querySelector('#number');
const form = document.querySelector('#form');

const myLeaderBoard = [
  {
    id: 1,
    name: 'Nemwel',
    score: 100,
  },
  {
    id: 2,
    name: 'Boniface',
    score: 80,
  },
];

const displayLeader = () => {
  leaderBoardWrapper.innerHTML = '';
  const mylocal = getFromLocalStorage(myLeaderBoard);

  mylocal.forEach((tsk) => {
    leaderBoardWrapper.innerHTML += `
    <li id="${tsk.id}">${tsk.name} ${tsk.score}</li>`;
  });
};

const addLeaderToList = () => {
  const index = myLeaderBoard.length;
  myLeaderBoard.push({
    id: index + 1,
    name: leaderName.value,
    score: leaderScore.value,
  });
  addToLocalStorage(myLeaderBoard);
  displayLeader();
  leaderName.value = '';
  leaderScore.value = '';
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addLeaderToList(myLeaderBoard);
  addToLocalStorage(myLeaderBoard);
});

window.addEventListener('DOMContentLoaded', () => {
  getFromLocalStorage(myLeaderBoard);
  displayLeader();
});

export default myLeaderBoard;