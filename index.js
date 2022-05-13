const chatting = document.querySelector(".chat");
const textPlace = document.querySelector(".textplace");
const button = document.querySelector("button");
const textEl = [
  "*YOU ARE ON A WALK, WHEN BABIS SUDDENLY APPROACHES*",
  "BABIS: Hello, I did not see you there.",
  "YOU: Hello Babis, very nice to see you this sunny day.",
  "BABIS: Nice to meet you too, what are you doing today?",
  "YOU: Hopefully yo- I mean, nothing planned today, wanna do something?",
  "BABIS: ?.. Ok, where do you want to go?",
];
//chatting.innerHTML = textEl[0];
let index = 0;
button.addEventListener("click", click);
chatting.innerHTML = textEl[index];

function click() {
  console.log(textEl[index]);
  if (index < textEl.length) {
    index++;
    chatting.innerHTML = textEl[index];
  } else {
    textPlace.innerHTML = `<div class="links">
      <a href="tennis.html">GO PLAY TENNIS</a>
      <a href="party.html">GO PARTY</a>
  </div>`;
  }
}
