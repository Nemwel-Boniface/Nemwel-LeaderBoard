import { baseURL } from "../index.js";

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

export { postToApi };