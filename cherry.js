const chatting = document.querySelector(".chat");
const textPlace = document.querySelector(".textplace");
const button = document.querySelector("button");
const textEl = [
  "*YOU AND BABIS ARE STANDING CLOSE UNDERNEATH A BIG CHERRY BLOSSOM TREE*",
  "BABIS: H-h-hey...",
  "YOU: H-h-h-h-h-h-hello...",
  "BABIS: So.. I asked you to come here cause I have something to confess..",
  "YOU: Yes..?",
  "BABIS: This is a weird feeling... I've never been impressed before..",
  "*BABIS IS BLUSHING LIKE MAD*",
  "BABIS: I think I like you.. more than a friend..",
  "YOU: Oh Babis...",
  "BABIS: I want to spend the rest of my days with you...",
  "BABIS: Kyaa... I'm so embarrassed to ask this but..⁄(⁄ ⁄•⁄-⁄•⁄ ⁄)⁄",
  "BABUS: Will you... go out with me..?",
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
      <a href="accept.html">ACCEPT</a>
      <a href="reject.html">REJECT</a>
  </div>`;
  }
}
