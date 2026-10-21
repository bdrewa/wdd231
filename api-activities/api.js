const baseUrl = "https://developer.nps.gov/api/v1/";

async function getJson(endpoint) {
  const apiKey = "SWrPxVvk7JPqZFRNAQT3wMlW4JzAxP3SK7azOh3j";
  const url = baseUrl + endpoint;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey,
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  return data;
}

function listTemplate(park) {
  return `<li><a href="${park.url}">${park.fullName}</a> ${park.states}</li>`;
}

async function renderClimbingList() {
  const listElement = document.getElementById("outputList");
  const data = await getJson("activities/parks?q=climbing");
  const parks = data.data[0].parks;
  listElement.innerHTML = parks.map(listTemplate).join("");
}

renderClimbingList();
