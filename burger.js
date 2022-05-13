const chatting = document.querySelector(".chat");
const textPlace = document.querySelector(".textplace");
const button = document.querySelector("button");
const textEl = [
  "*YOU ARRIVE AT BURGER KING, BABIS DOES NOT SEEM SO HAPPY THOUGH*",
  "YOU: What's wrong Babis?",
  "BABIS: I do not like fast foods, with 'King' in it's name I thought this would be a fine burger dinner..",
  "YOU: I thought Burger King was common knowledge but okay...",
  "YOU: Sorry I guess.. I thought this would've been a good Idea..",
  "BABIS: After 3 hour tennis training? I'd eat anywhere but here!",
  "YOU: Well then we can go somewhere else?",
  "BABIS: No, actually, I feel sick from breathing all this fatty air.",
  "BABIS: We can do this another day, I feel like puking any second now.",
  "*BABIS STORMS OUT STOMPING HIS FEET LIKE A CHILD. YOU'RE TOO ICKED TO EVEN CHASE AFTER HIM*",
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
      <a href="normal.html">CONTINUE...</a>
  </div>`;
  }
}
