const retrieveFromAPI = async (baseURL) => {
  const res = await fetch(baseURL);
  const lead = await res.json();
  const leaders = lead.result;
  return leaders;
};

export default retrieveFromAPI;