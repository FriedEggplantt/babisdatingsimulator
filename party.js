const chatting = document.querySelector(".chat");
const textPlace = document.querySelector(".textplace");
const button = document.querySelector("button");
const textEl = [
  "*YOU ARRIVE AT THE PARTY",
  "*THE MUSIC IS VERY LOUD, BABIS LOOKS SLIGHTLY PEEVED.",
  "BABIS: This the type of place you go to to have fun?.",
  "YOU: I guess...",
  "BABIS: This was a mistake, I do not like doing this.",
  "*BABIS STARTS TO HEAD TO THE EXIT*",
  "YOU: Wait! Don't leave...!",
  "*YOU GRAB HIS ARM*",
  "BABIS: The fuck? Bitch let go.",
  "*BABIS RIPS HIS ARM FROM YOU AND STARTS TO LEAVE*",
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
      <a href="sadending.html">LET HIM LEAVE</a>
      <a href="kidnap.html">ᖽᐸᓿᗫᘉᗅᕿ ᕼᓿᙢ</a>
  </div>`;
  }
}

