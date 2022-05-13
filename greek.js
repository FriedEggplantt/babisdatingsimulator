const chatting = document.querySelector(".chat");
const textPlace = document.querySelector(".textplace");
const button = document.querySelector("button");
const textEl = [
  "*YOU ARRIVE AT THE FANCY GREEK DINER, IT IS VERY NICE*",
  "BABIS: Well.. this is a very nice place.",
  "YOU: Right? Such a nice view too.",
  "BABIS: Indeed, well, let's start eating shall we?",
  "*YOU AND BABIS EAT BUSSIN MEALS",
  "BABIS: Bismillah.",
  "YOU (INNER DIALOGUE): 'I should buy him something before we end the day..'",
  "BABIS: Well, this has been a fun day. Sadly the day is coming to an end, perhaphs I'll see you again.",
  "YOU: WAIT! There is one last place we should go to..",
  "BABIS: ..?",
  "YOU (INNER DIALOGUE): 'Which store should we go to gift him something??'",
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
      <a href="walmart.html">WALMART</a>
      <a href="rolex.html">ROLEX</a>
  </div>`;
  }
}
