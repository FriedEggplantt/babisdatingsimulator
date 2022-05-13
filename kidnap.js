const chatting = document.querySelector(".chat");
const textPlace = document.querySelector(".textplace");
const button = document.querySelector("button");
const textEl = [
  "*YOU'VE KIDNAPPED BABIS AND PUT HIM IN YOUR BASEMENT*",
  "*BABIS STARTS TO WAKEUP, AND HE LOOKS FRIGHTENED*",
  "BABIS: What the fuck?!",
  "YOU: Hello Babis, look what you've done... it didn't have to end this way..",
  "BABIS: You're crazy! Let me go this instant!",
  "YOU: No can do, if you leave, you might meet someone else...",
  "BABIS: ?!?",
  "YOU: If I can't have you...",
  "*YOU STAB BABIS IN HIS CHEST*",
  "YOU: N̺̻̔̆ͅO̖̼ͩ͌͐ O̖̼ͩ͌͐N̺̻̔̆ͅḚͭ̉̇͟ C̵͉͋̔͞A̷͙ͭͫ̕N̺̻̔̆ͅ",
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
      <a href="basementending.html">CONTINUE...</a>
  </div>`;
  }
}
