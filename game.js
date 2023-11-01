const allDoors = document.getElementById("allDoors"); //Background
const backArrow = document.getElementById("backArrow"); //Click
const blueDoor = document.getElementById("blueDoor"); //Click
const blueRoom = document.getElementById("blueRoom"); //Background
const redRoom = document.getElementById("redRoom"); //Background
const redDoor = document.getElementById("redDoor");
const redRoomArrow = document.getElementById("backArrowTwo"); //Click

let currentId = 1;

function startGame() {
  updateText(currentId);
}

blueRoom.style.display = "none";
redRoom.style.display = "none";

blueDoor.addEventListener("click", function () {
  allDoors.style.display = "none";
  blueRoom.style.display = "block";
  updateText(2);
});

function updateText(id) {
  const displayText = document.getElementById("displayText");
  const textData = optionTexts.find((item) => item.id === id);

  if (textData) {
    displayText.textContent = textData.text;
  } else {
    displayText.textContent = "Text not found";
  }
}

backArrow.addEventListener("click", function () {
  allDoors.style.display = "block";
  blueRoom.style.display = "none";
  if (currentId > 1) {
    currentId--;
  }
  updateText(currentId);
});

redDoor.addEventListener("click", function () {
  redRoom.style.display = "block";
  allDoors.style.display = "none";
});

redRoomArrow.addEventListener("click", function () {
  redRoom.style.display = "none";
  allDoors.style.display = "block";
});

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
];

startGame();
