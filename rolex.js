const chatting = document.querySelector(".chat");
const textPlace = document.querySelector(".textplace");
const button = document.querySelector("button");
const textEl = [
  "*YOU ARRIVE AT THE ROLEX STORE, BABIS LOOKS PLEASENTLY SURPRISED*",
  "BABIS: Wow, It's like you're my lost twin, we have so much in common.",
  "BABIS: You have impressed me today.",
  "YOU: !!",
  "YOU: Thank you..",
  "*AFTER LOOKING AROUND THE STORE FOR A WHILE, YOU BUY A $50000 WATCH AND GIVE IT TO BABIS*",
  "BABIS: For me? Wow this is very good very nice. Thank you.",
  "YOU: Of course.",
  "BABIS: You know.. I have something to tell you..",
  "YOU: ? What is it?",
  "BABIS: Not here though.. please come meet me under the cherry blossom tree tomorrow?",
  "YOU: Okay.. I'll see you then.",
  "BABIS: Yes.. I'll see you.",
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
      <a href="cherry.html">CONTINUE...</a>
  </div>`;
  }
}
