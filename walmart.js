const chatting = document.querySelector(".chat");
const textPlace = document.querySelector(".textplace");
const button = document.querySelector("button");
const textEl = [
  "*YOU ARRIVE AT WALMART*",
  "YOU (INNER DIALOGUE): 'Hmm.. summer is just around the corner, I should buy Babis a speedo so we can go to the beach together.'",
  "*YOU PURCHASE A PURPLE SPEEDO AND GIVE IT TO BABIS*",
  "BABIS: Umm, is this for me..?",
  "YOU: Yes.",
  "BABIS: Uh, okay. I buy my own clothes but I'll ship this to charity.",
  "YOU: But... it's for you..",
  "BABIS: I'm not wearing this shit.",
  "YOU: But you'd look so hot in it..",
  "BABIS: What?",
  "YOU: What?",
  "BABIS: I think you have alternative motives, sorry but I'm not interested.",
  "BABIS: We can still be friends though..",
  "BABIS: We have similar tastes, but you are nothing more than a friend for me.",
  "YOU: Oh...",
  "BABIS: It's been a good day, I'll see you another time though. Goodbye.",
  "*BEFORE YOU HAVE TIME TO REACT BABIS HAS ALREADY LEFT*",
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
      <a href="ed.html">CONTINUE...</a>
  </div>`;
  }
}
