const lockedDoorText = document.getElementById("lockedTitle");
const inventory = document.getElementById("inventory");
const blueKey = document.getElementById("BlueKey");
const redKey = document.getElementById("redKey");
const greenKey = document.getElementById("greenKey");
const lockPick = document.getElementById("lockPick");
const noteSheet = document.getElementById("noteSheet");
const startRoomBg = document.getElementById("room"); //SCENE
const brownRoomBg = document.getElementById("brownRoom"); //SCENE
const backArrow = document.getElementById("backArrow"); // Click
const blueDoorBg = document.getElementById("blueDoorOpen"); //BACKGROUND
const blueDoor = document.getElementById("blueDoor"); // Click
const redDoorBg = document.getElementById("redDoorOpen"); //BACKGROUND
const redDoor = document.getElementById("redDoor"); // Click
const brownDoorBg = document.getElementById("brownDoorOpen"); //BACKGROUND
const brownDoor = document.getElementById("brownDoor"); // Click
const greenDoorBg = document.getElementById("greenDoorOpen"); //BACKGROUND
const greenDoor = document.getElementById("greenDoor"); // Click
const bookshelf = document.getElementById("bookshelf"); //Click
const exploreBookshelf = document.getElementById("exploreBookshelf");
const desk = document.getElementById("desk"); //Click
const deskOpen = document.getElementById("deskOpen");
const explorePiano = document.getElementById("pianoNo");
const piano = document.getElementById("piano"); //Click

lockedDoorText.style.opacity = 0;
brownRoomBg.style.opacity = 0;
exploreBookshelf.style.opacity = 0;
bookshelf.style.opacity = 0;
deskOpen.style.opacity = 0;
desk.style.opacity = 0;
explorePiano.style.opacity = 0;
piano.style.opacity = 0;

//This takes the optionTexts id and says for the game to start at 1
let currentId = 1;

// We start the game here!
function startGame() {
  updateText(currentId);
}

blueDoor.addEventListener("click", function () {
  lockedDoorText.style.visibility = "visible";
  lockedDoorText.style.opacity = 1;
  lockedDoorText.style.transition = "opacity .5s";
  hideLockedText();
});

redDoor.addEventListener("click", function () {
  lockedDoorText.style.visibility = "visible";
  lockedDoorText.style.opacity = 1;
  lockedDoorText.style.transition = "opacity .5s";
  hideLockedText();
});

greenDoor.addEventListener("click", function () {
  lockedDoorText.style.visibility = "visible";
  lockedDoorText.style.opacity = 1;
  lockedDoorText.style.transition = "opacity .5s";
  hideLockedText();
});

function hideLockedText() {
  setTimeout(function () {
    lockedDoorText.style.opacity = 0;
    lockedDoorText.style.transition = "opacity 1.5s";
  }, 500);
  setTimeout(function () {
    lockedDoorText.style.visibility = "hidden";
  }, 1000);
}

brownDoor.addEventListener("click", function () {
  blueDoorBg.style.display = "none";
  blueDoor.style.display = "none";
  redDoorBg.style.display = "none";
  redDoor.style.display = "none";
  greenDoorBg.style.display = "none";
  greenDoor.style.display = "none";
  brownDoorBg.style.opacity = 0;
  brownDoor.style.opacity = 0;
  startRoomBg.style.visibility = "hidden";
  startRoomBg.style.opacity = 0;
  startRoomBg.style.transition = "opacity .8s";
  brownDoor.style.transition = "opacity .8s";
  brownDoorBg.style.transition = "opacity .8s";
  displayObjects();
  updateText(2);
});

bookshelf.addEventListener("click", function () {
  exploreBookshelf.style.visibility = "visible";
  exploreBookshelf.style.opacity = 1;
  exploreBookshelf.style.transition = "opacity 1.5s";
  bookshelf.style.visibility = "hidden";
  bookshelf.style.opacity = 0;
  bookshelf.style.transition = "opacity 1.5s";
  desk.style.visibility = "hidden";
  desk.style.opacity = 0;
  desk.style.transition = "opacity 1.5s";
  piano.style.visibility = "hidden";
  piano.style.opacity = 0;
  piano.style.transition = "opacity 1.5s";
  updateText(3);
});

desk.addEventListener("click", function () {
  deskOpen.style.visibility = "visible";
  deskOpen.style.opacity = "1";
  deskOpen.style.transition = "opacity 1.5s";
  bookshelf.style.visibility = "hidden";
  bookshelf.style.opacity = 0;
  bookshelf.style.transition = "opacity 1.5s";
  desk.style.visibility = "hidden";
  desk.style.opacity = 0;
  desk.style.transition = "opacity 1.5s";
  piano.style.visibility = "hidden";
  piano.style.opacity = 1;
  piano.style.transition = "opacity 1.5s";
  updateText(4);
});

piano.addEventListener("click", function () {
  explorePiano.style.visibility = "visible";
  explorePiano.style.opacity = "1";
  explorePiano.style.transition = "opacity 1.5s";
  bookshelf.style.visibility = "hidden";
  bookshelf.style.opacity = 0;
  bookshelf.style.transition = "opacity 1.5s";
  desk.style.visibility = "hidden";
  desk.style.opacity = 0;
  desk.style.transition = "opacity 1.5s";
  piano.style.visibility = "hidden";
  piano.style.opacity = 0;
  piano.style.transition = "opacity 1.5s";
  updateText(5);
});

//This is my fade in animation
function displayObjects() {
  setTimeout(function () {
    brownRoomBg.style.visibility = "visible";
    brownRoomBg.style.opacity = 1;
    bookshelf.style.visibility = "visible";
    bookshelf.style.opacity = 1;
    bookshelf.style.transition = "opacity 1.5s";
    desk.style.visibility = "visible";
    desk.style.opacity = 1;
    desk.style.transition = "opacity 1.5s";
    piano.style.visibility = "visible";
    piano.style.opacity = 1;
    piano.style.transition = "opacity 1.5s";
  }, 800);
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
