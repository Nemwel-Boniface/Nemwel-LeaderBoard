import _ from 'lodash';
import './style.css';

const leaderBoardWrapper = document.querySelector('.leaders');
const leaderName = document.querySelector('#name');
const leaderScore = document.querySelector('#number');
const addLeader = document.querySelector('#add');
const form = document.querySelector('#form');

let myLeaderBoard = [
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

const addLeaderToList = () => {
  let index = myLeaderBoard.length;
  myLeaderBoard.push({
    id: index + 1,
    name: leaderName.value,
    score: leaderScore.value,
  });
  addToLocalStorage();
  displayLeader();
  leaderName.value = '';
  leaderScore.value = '';
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addLeaderToList();
  addToLocalStorage();
})

window.addEventListener('load', () => {
  displayLeader();
})