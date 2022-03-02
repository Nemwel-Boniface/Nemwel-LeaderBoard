import { baseURL, leaderBoardWrapper, displayLeaders } from "../index.js";

const retrieveFromAPI = async () => {
  const res = await fetch(baseURL);
  const lead = await res.json();
  const leaders = (await lead).result;

  leaderBoardWrapper.innerHTML = '';
  leaders.forEach((leader) => {
    displayLeaders(leader);
  });
}

export { retrieveFromAPI };