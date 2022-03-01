import './style.css';

const leaderBoardWrapper = document.querySelector('.leaders');
const leaderName = document.querySelector('#name');
const leaderScore = document.querySelector('#number');
const form = document.querySelector('#form');
// const myGameURL = 'ojq3rdgoTgouE5sLha5K';
// const baseURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ojq3rdgoTgouE5sLha5K/scores/`;

const gameID = 'Y4TJzkMfBJeirD2R1Zn7';
const baseURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;

const postToApi = async (name, score) => {
  console.log('called')
  const data = await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify({
      name,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  console.log('finished')
  const json = data.json();
  return json;
}

const post = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('default');
    postToApi(leaderName.value, leaderScore.value);
    form.reset();
  })
}
post();
