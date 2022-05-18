const chatting = document.querySelector(".chat");
const textPlace = document.querySelector(".textplace");
const button = document.querySelector("button");
const textEl = [
  "*YOU TAKE A DEEP BREATH BEFORE SAYING:*",
  "YOU: Yes Babis, I will go out with you!",
  "BABIS: Oh my god! :,)",
  "*YOU AND BABIS HUG FOR 4 MINUTES*",
  "BABIS: You're amazing, I can't wait to start a family of 40 with you..",
  "YOU: Me too Babis, me too.. :,)",
"*YOU AND BABIS LIVE HAPPILY EVER AFTER*",
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
      <a href="good.html">CONTINUE...</a>
  </div>`;
  }
}
