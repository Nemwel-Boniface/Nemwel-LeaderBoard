import './style.css';

const leaderBoardWrapper = document.querySelector('.leaders');
const leaderName = document.querySelector('#name');
const leaderScore = document.querySelector('#number');
const form = document.querySelector('#form');

const myGameURL = 'ojq3rdgoTgouE5sLha5K';
const baseURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${myGameURL}/scores/`;


const postToApi = async (name, score) => {
  await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: name,
      score: score,
    }),
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postToApi(leaderName.value, leaderScore.value);
  form.reset();
});


const retireveFromAPI = async () => {
  const res = await fetch(baseURL);
  const text = await res.json();
  // displayLeaders(text);
  console.log(text);
}

const refresh = document.querySelector('#refresh');

document.addEventListener('click', (click)=> {
  if(click.target.id === 'refresh') {
    console.log('touched')
    retireveFromAPI();
  }
});