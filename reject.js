const chatting = document.querySelector(".chat");
const textPlace = document.querySelector(".textplace");
const button = document.querySelector("button");
const textEl = [
  "*YOU TAKE A DEEP BREATH BEFORE SAYING.*",
  "YOU: Sorry Babis.. I don't like you in that way..",
  "*BABIS'S TEARS START TO FORM*",
  "BABIS: But.. we're meant to be together..",
  "BABIS: I've never met anyone like you.",
  "YOU: No Babis, we're not endgame. You'll find someone else.",
  "BABIS: No..",
  "YOU: ?",
  "BABIS: I won't let you leave... you're mine.",
  "YOU: ???",
  "*BABIS PUTS A WHITE CLOTH ON YOUR MOUTH... AND YOU LOSE CONSCIOUSNESS..",
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
      <a href="wtf.html">CONTINUE...</a>
  </div>`;
  }
}
