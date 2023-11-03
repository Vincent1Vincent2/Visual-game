const startRoomBg = document.getElementById("room");
const brownRoomBg = document.getElementById("brownRoom");
const backArrow = document.getElementById("backArrow"); //Click click click this
const blueDoorBg = document.getElementById("blueDoorOpen");
const blueDoor = document.getElementById("blueDoor"); //Click
const redDoorBg = document.getElementById("redDoorOpen");
const redDoor = document.getElementById("redDoor"); //Click
const brownDoorBg = document.getElementById("brownDoorOpen");
const brownDoor = document.getElementById("brownDoor"); //Click
const greenDoorBg = document.getElementById("greenDoorOpen");
const greenDoor = document.getElementById("greenDoor");
const bookshelf = document.getElementById("bookshelf");
const desk = document.getElementById("desk");
const piano = document.getElementById("piano");

brownRoomBg.style.opacity = 0;
bookshelf.style.opacity = 0;
desk.style.opacity = 0;
piano.style.opacity = 0;

//This takes the optionTexts id and says for the game to start at 1
let currentId = 1;

// We start the game here!
function startGame() {
  updateText(currentId);
}

brownDoor.addEventListener("click", function () {
  blueDoorBg.style.display = "none";
  blueDoor.style.display = "none";
  redDoorBg.style.display = "none";
  redDoor.style.display = "none";
  greenDoorBg.style.display = "none";
  greenDoor.style.display = "none";
  displayObjects();
  updateText(2);
});

function displayObjects() {
  setTimeout(function () {
    startRoomBg.style.display = "none";
    brownRoomBg.style.visibility = "visible";
    brownRoomBg.style.opacity = 1;
    bookshelf.style.visibility = "visible";
    bookshelf.style.opacity = 1;
    desk.style.visibility = "visible";
    desk.style.opacity = 1;
    piano.style.visibility = "visible";
    piano.style.opacity = 1;
    brownDoorBg.style.visibility = "hidden";
    brownDoor.style.opacity = 0;
  }, 0);
}

//This is takes boring static display text (gross)
//Then update it with the current id! (COOL!)
function updateText(id) {
  const displayText = document.getElementById("displayText");
  const textData = optionTexts.find((item) => item.id === id);

  if (textData) {
    displayText.textContent = textData.text;
  }
}

//WOW this be long :O
const optionTexts = [
  {
    id: 1,
    text: "You've been locked inside a house and need to find the right keys to make it out!",
    options: [
      {
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "What is this then...",
    options: [
      {
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: "This door is locked, you need the red key",
    options: [
      {
        nextText: 1,
      },
    ],
  },
];

startGame();
