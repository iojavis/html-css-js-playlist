const joke_el = document.getElementById("joke")
const joke_btn = document.getElementById("joke_btn")

generateJoke()

function generateJoke() {
  const config = {
    headers: {
      Accept: "text/plain",
    },
  }
  fetch("https://icanhazdadjoke.com/api", config)
    .then((response) => response)
    .then((data) => (joke_el.innerHTML = data.joke)) //can't pull
}
