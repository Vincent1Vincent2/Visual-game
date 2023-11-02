const allDoors = document.getElementById("allDoors"); //Background look nice
const backArrow = document.getElementById("backArrow"); //Click click click this
const blueDoor = document.getElementsByClassName("blueDoor"); //Click
const blueRoom = document.getElementById("blueRoom"); //Background
const redRoom = document.getElementById("redRoom"); //Background
const redDoor = document.getElementById("redDoor"); //Click
const redRoomArrow = document.getElementById("backArrowTwo"); //Click

//This takes the optionTexts id and says for the game to start at 1
let currentId = 1;

// We start the game here!
function startGame() {
  updateText(currentId);
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
    text: "This door is locked, you need the blue key",
    options: [
      {
        nextText: 1,
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
