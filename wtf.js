const chatting = document.querySelector(".chat");
const textPlace = document.querySelector(".textplace");
const button = document.querySelector("button");
const textEl = [
  "*YOU WAKE UP DIZZY*",
  "YOU: Ughh.. what happened..?",
  "BABIS: Look what you did...",
  "*BABIS LOOKS VERY VERY VERY ODD*",
  "YOU: AAAAAAH!",
  "BABIS: To make me feel so special and appreciated for the first time... to just reject me?",
  "*YOU'RE TOO STUNNED TO SPEAK*",
  "BABIS: That's not how it works, no one has ever impressed me before.",
  "BABIS: I can't let someone else have you, you'll stay here with me.. forever.",
  "*BABIS CUTS OFF ALL YOUR LIMBS AND LEAVES YOU TO ROT IN HIS BASEMENT.",
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
      <a href="hn.html">CONTINUE...</a>
  </div>`;
  }
}
