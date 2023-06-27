import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughing from "./assets/happy.svg";

const laughImg = document.querySelector("#laughImg");
laughImg.src = laughing;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);
console.log(generateJoke());

// generateJoke();
