const allDoors = document.getElementById("allDoors"); //Background look nice
const backArrow = document.getElementById("backArrow"); //Click click click this
const blueDoor = document.getElementById("blueDoor"); //Click
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

//We don't want these first
blueRoom.style.display = "none";
redRoom.style.display = "none";

//Now we click the blue door cuz fun and we do lil hidning
//Also we do a lil updating of the currentID to display new text
blueDoor.addEventListener("click", function () {
  allDoors.style.display = "none";
  blueRoom.style.display = "block";
  updateText(2);
});

//This is takes boring static display text (gross)
// Then update it with the current id! (COOL!)
function updateText(id) {
  const displayText = document.getElementById("displayText");
  const textData = optionTexts.find((item) => item.id === id);

  if (textData) {
    displayText.textContent = textData.text;
  }
}

//This just be like GO BACK! We don't like that room
backArrow.addEventListener("click", function () {
  allDoors.style.display = "block";
  blueRoom.style.display = "none";
  if (currentId > 1) {
    currentId--;
  }
  updateText(currentId);
});

//Do we like this room?
redDoor.addEventListener("click", function () {
  redRoom.style.display = "block";
  allDoors.style.display = "none";
  updateText(3);
});

//NO TAKE ME BACK
redRoomArrow.addEventListener("click", function () {
  redRoom.style.display = "none";
  allDoors.style.display = "block";
  if (currentId > 1) {
    currentId--;
  }
  updateText(currentId);
});

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

const clockNow = document.getElementById("timeRightNow");

setInterval(printDate, 1000);

function printDate() {
  const date = new Date();
  clockNow.textContent = date.toLocaleTimeString();
}

printDate();
