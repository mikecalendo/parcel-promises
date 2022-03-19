const API_URL = "https://starwars.egghead.training/";

const output = document.getElementById("output");
output.innerText = "loading...";

const responsePromise = fetch(API_URL + "films");
responsePromise.then(
  //onsuccess
  response => {
    response.json().then(films => {
      output.innerText = getFilmTitles(films);
    });
  },
  //onrejected
  reason => {
    console.warn(reason);
    output.innerText = "error :(";
  }
);

function getFilmTitles(films) {
  return films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(film => `${film.episode_id}. ${film.title}`)
    .join("\n");
}
