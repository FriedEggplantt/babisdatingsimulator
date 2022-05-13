const chatting = document.querySelector(".chat");
const textPlace = document.querySelector(".textplace");
const button = document.querySelector("button");
const textEl = [
  "*YOU ARRIVE AT THE TENNIS COURT, IT'S A BEAUTIFUL DAY*",
  "BABIS: What lovely weather for tennis, this was a great idea.",
  "YOU: Right? tennis is so fun.",
  "BABIS: You think so too? It seems you and me have quite a lot alike.",
  "YOU: Yes indeed. Lets start playing.",
  "*YOU AND BABIS PLAY TENNIS FOR 3 HOURS, THE SCORE IS 5-600 TO BABIS*.",
  "BABIS: You got 5 points, not bad. However, I am not easily impressed.",
  "YOU: Ok..? Anyways wanna eat? Im starving.",
  "BABIS: Yes let's do that, where are we eating?",
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
      <a href="burger.html">BURGER KING</a>
      <a href="greek.html">FINE GREEK DINNER</a>
  </div>`;
  }
}
