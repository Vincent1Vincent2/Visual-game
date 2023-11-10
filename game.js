const gameBox = document.querySelector(".gameBox");
const lockedDoorText = document.getElementById("lockedTitle"); //TEXT
const usedDoorTitle = document.getElementById("usedDoorTitle"); //TEXT
const inventory = document.getElementById("inventory"); //BACKGROUND
const brownRoomBack = document.getElementById("brownRoomBack"); //CLICK (BACK ARROW)
const brownRoomBackPB = document.getElementById("brownRoomBackPB"); //CLICK (BACK ARROW)
const brownRoomBackP = document.getElementById("brownRoomBackP"); //CLICK (BACK ARROW)
const brownRoomBackBsF = document.getElementById("brownRoomBackBookshelfFirst"); //CLICK (BACK ARROW)
const brownRoomBackDF = document.getElementById("brownRoomBackDeskFirst"); //CLICK (BACK ARROW)
const brownRoomBackBDsUsed = document.getElementById(
  "brownRoomBackBookshelfDeskUsed"
); //CLICK (BACK ARROW)
const brownRoomBackPianoFirst = document.getElementById(
  "brownRoomBackPianoFirst"
); //CLICK (BACK ARROW)
const brownRoomBackPianoAfterBookshelf = document.getElementById(
  "brownRoomBackPianoAfterBookshelf"
); //CLICK (BACK ARROW)
const brownRoomBackPianoAfterDesk = document.getElementById(
  "brownRoomBackPianoAfterDesk"
); //CLICK (BACK ARROW)
const brownRoomBackPianoAfterBoth = document.getElementById(
  "brownRoomBackPianoAfterBoth"
); //CLICK (BACK ARROW)
const brownRoomBackAllUsed = document.getElementById("brownRoomBackAllUsed"); //CLICK (BACK ARROW)
const blueRoomBack = document.getElementById("blueRoomBack"); //CLICK (BACK ARROW)
const redRoomBack = document.getElementById("redRoomBack"); //CLICK (BACK ARROW)
const blueKey = document.getElementById("blueKey"); //Click (ITEM)
const useBlueKey = document.getElementById("useBlueKey"); //Click (ITEM)
const redKey = document.getElementById("redKey"); //Click (ITEM)
const useRedKey = document.getElementById("useRedKey"); //Click (ITEM)
const greenKey = document.getElementById("greenKey"); //Click (ITEM)
const useGreenKey = document.getElementById("useGreenKey"); //Click (ITEM)
const lockPick = document.getElementById("lockPick"); //Click (ITEM
const useLockPick = document.getElementById("useLockPick"); //Click (ITEM)
const noteSheet = document.getElementById("noteSheet"); //Click (ITEM)
const useNoteSheet = document.getElementById("useNoteSheet"); //Click (ITEM)
const useLockPickBlue = document.getElementById("useLockPickBlue"); //CLICK CLICK (ITEM USE)
const useLockPickRed = document.getElementById("useLockPickRed"); //CLICK CLICK (ITEM USE)
const useLockPickGreen = document.getElementById("useLockPickGreen"); //CLICK CLICK (ITEM USE)
const startRoomBg = document.getElementById("room"); //SCENE
const brownRoomBg = document.getElementById("brownRoom"); //SCENE
const blueDoorBg = document.getElementById("blueDoorOpen"); //BACKGROUND
const blueDoor = document.getElementById("blueDoor"); // Click
const openBlueDoor = document.getElementById("openBlueDoor"); //Click / hover
const redDoorBg = document.getElementById("redDoorOpen"); //BACKGROUND
const redDoor = document.getElementById("redDoor"); // Click
const openRedDoor = document.getElementById("openRedDoor"); //Click / hover
const brownDoorBg = document.getElementById("brownDoorOpen"); //BACKGROUND
const brownDoor = document.getElementById("brownDoor"); // Click
const brownDoorOnlyPiano = document.getElementById("brownDoorOnlyPiano"); //Click / hover
const brownDoorUsePiano = document.getElementById("brownDoorUsePiano"); //Click /hover
const greenDoorBg = document.getElementById("greenDoorOpen"); //BACKGROUND
const greenDoor = document.getElementById("greenDoor"); // Click
const openGreenDoor = document.getElementById("openGreenDoor"); //Click / hover
const usedBlueDoor = document.getElementById("usedBlueDoor");
const usedRedDoor = document.getElementById("usedRedDoor");
const usedBrownDoor = document.getElementById("usedBrownDoor");
const usedGreenDoor = document.getElementById("usedGreenDoor");
const bookshelf = document.getElementById("bookshelf"); //Click //Click (FURNITURE)
const bookshelfDeskFirst = document.getElementById("bookshelfDeskFirst"); //Click //Click (FURNITURE)
const exploreBookshelf = document.getElementById("exploreBookshelf"); // (FURNITURE)
const usedBookshelf = document.getElementById("usedBookshelf"); // (FURNITURE)
const desk = document.getElementById("desk"); //Click (FURNITURE)
const deskBookshelfFirst = document.getElementById("deskBookshelfFirst"); //Click //Click (FURNITURE)
const deskOpen = document.getElementById("deskOpen"); // (FURNITURE)
const usedDesk = document.getElementById("usedDesk"); //(FURNITURE)
const piano = document.getElementById("piano"); //Click
const pianoAfterBookshelf = document.getElementById("pianoAfterBookshelf"); //Click
const pianoAfterDesk = document.getElementById("pianoAfterDesk"); //Click
const pianoAfterBoth = document.getElementById("pianoAfterBoth"); //Click
const pianoAfterNoteSheet = document.getElementById("pianoAfterNoteSheet"); //Click
const explorePiano = document.getElementById("pianoNo"); // (FURNITURE)
const pianoAfterBookshelfNo = document.getElementById("pianoAfterBookshelfNo"); // (FURNITURE)
const pianoAfterDeskNo = document.getElementById("pianoAfterDeskNo"); // (FURNITURE)
const pianoAfterBothNo = document.getElementById("pianoAfterBothNo"); // (FURNITURE)
const pianoAfterNoteSheetYes = document.getElementById(
  "pianoAfterNoteSheetYes"
); //Click //Click (FURNITURE)
const playPiano = document.getElementById("playPiano");
//Buttons for the lockpick game when you loose or win
const startGameContainer = document.querySelector(".startGameContainer");
const gameInfo = document.getElementById("gameInfo");
const lockBodyBg = document.querySelector(".lockBodyBg");
const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const enterRoom = document.getElementById("enterRoom");

//This hides all objects exept the starting doors
lockedDoorText.style.opacity = 0;
blueKey.style.opacity = 0;
brownRoomBack.style.opacity = 0;
brownRoomBg.style.opacity = 0;
exploreBookshelf.style.opacity = 0;
bookshelf.style.opacity = 0;
deskOpen.style.opacity = 0;
desk.style.opacity = 0;
explorePiano.style.opacity = 0;
piano.style.opacity = 0;
lockPick.style.opacity = 0;

//This takes the optionTexts id and displays the text for id 1
let currentId = 1;

// We start the game here!
function startGame() {
  updateText(currentId);
}

//Fades in and out a text when doors are locked
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

//Fades out the text
function hideLockedText() {
  setTimeout(function () {
    lockedDoorText.style.opacity = 0;
    lockedDoorText.style.transition = "opacity 1.5s";
  }, 500);
  setTimeout(function () {
    lockedDoorText.style.visibility = "hidden";
  }, 1000);
}

usedBlueDoor.addEventListener("click", function () {
  usedDoorTitle.style.visibility = "visible";
  usedDoorTitle.style.opacity = 1;
  usedDoorTitle.style.transition = "opacity .5s";
  hideUsedText();
});

usedRedDoor.addEventListener("click", function () {
  usedDoorTitle.style.visibility = "visible";
  usedDoorTitle.style.opacity = 1;
  usedDoorTitle.style.transition = "opacity .5s";
  hideUsedText();
});

usedBrownDoor.addEventListener("click", function () {
  usedDoorTitle.style.visibility = "visible";
  usedDoorTitle.style.opacity = 1;
  usedDoorTitle.style.transition = "opacity .5s";
  hideUsedText();
});

function hideUsedText() {
  setTimeout(function () {
    usedDoorTitle.style.opacity = 0;
    usedDoorTitle.style.transition = "opacity 1.5s";
  }, 500);
  setTimeout(function () {
    usedDoorTitle.style.visibility = "hidden";
  }, 1000);
}

//First room, just styles to hide whats not used
brownDoor.addEventListener("click", function () {
  brownRoomBack.style.opacity = "1";
  brownRoomBack.style.transition = "opacity 3.5s";
  blueDoorBg.style.visibility = "hidden";
  blueDoor.style.visibility = "hidden";
  blueDoor.style.opacity = 0;
  blueDoorBg.style.opacity = 0;
  redDoorBg.style.visibility = "hidden";
  redDoor.style.visibility = "hidden";
  redDoor.style.opacity = 0;
  redDoorBg.style.opacity = 0;
  greenDoorBg.style.visibility = "hidden";
  greenDoor.style.visibility = "hidden";
  greenDoor.style.opacity = 0;
  greenDoorBg.style.opacity = 0;
  brownDoorBg.style.opacity = 0;
  brownDoor.style.opacity = 0;
  brownDoor.style.visibility = "hidden";
  startRoomBg.style.visibility = "hidden";
  startRoomBg.style.opacity = 0;
  startRoomBg.style.transition = "opacity .8s";
  brownDoor.style.transition = "opacity 1s";
  brownDoorBg.style.transition = "opacity 1s";
  brownDoorBg.style.visibility = "hidden";
  displayBackArrow();
  displayObjects();
  updateText(2);
});

//Back arrow
function displayBackArrow() {
  setTimeout(function () {
    brownRoomBack.style.visibility = "visible";
  }, 800);
}

//This is a fade in animation for the objects in the room
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

//This hides and shows the doors when you go back from the brown room
brownRoomBack.addEventListener("click", function () {
  setTimeout(function () {
    brownRoomBack.style.opacity = "0";
    brownRoomBack.style.transition = "opacity .8s";
    blueDoor.style.visibility = "visible";
    blueDoorBg.style.visibility = "visible";
    blueDoor.style.opacity = 1;
    blueDoorBg.style.opacity = 1;
    blueDoor.style.transition = "opacity .5s";
    blueDoorBg.style.transition = "opacity .5s";
    redDoorBg.style.visibility = "visible";
    redDoor.style.visibility = "visible";
    redDoor.style.opacity = 1;
    redDoorBg.style.opacity = 1;
    redDoor.style.transition = "opacity .9s";
    redDoorBg.style.transition = "opacity .9s";
    greenDoorBg.style.visibility = "visible";
    greenDoor.style.visibility = "visible";
    greenDoor.style.opacity = 1;
    greenDoorBg.style.opacity = 1;
    greenDoor.style.transition = "opacity 1.2s";
    greenDoorBg.style.transition = "opacity 1.2s";
    brownDoorBg.style.visibility = "visible";
    brownDoorBg.style.opacity = 1;
    brownDoor.style.visibility = "visible";
    brownDoor.style.opacity = 1;
    brownDoor.style.transition = "opacity 1.5s";
    startRoomBg.style.visibility = "visible";
    startRoomBg.style.opacity = 1;
    startRoomBg.style.transition = "opacity 1.5s";
  }, 800);
  hideObjects();
  updateText(1);
});

function hideObjects() {
  setTimeout(function () {
    brownRoomBg.style.visibility = "hidden";
    brownRoomBg.style.opacity = 0;
    brownRoomBg.style.transition = "opacity 1.5s";
    bookshelf.style.visibility = "hidden";
    bookshelf.style.opacity = 0;
    bookshelf.style.transition = "opacity 1.5s";
    desk.style.visibility = "hidden";
    desk.style.opacity = 0;
    desk.style.transition = "opacity 1.5s";
    piano.style.visibility = "hidden";
    piano.style.opacity = 0;
    piano.style.transition = "opacity 1.5s";
  }, 500);
}

bookshelf.addEventListener("click", function () {
  exploreBookshelf.style.visibility = "visible";
  exploreBookshelf.style.opacity = 1;
  exploreBookshelf.style.transition = "opacity 1.5s";
  lockPick.style.visibility = "visible";
  lockPick.style.opacity = "1";
  lockPick.style.transition = "opacity 1.5s";
  bookshelf.style.visibility = "hidden";
  bookshelf.style.opacity = 0;
  bookshelf.style.transition = "opacity 1.5s";
  desk.style.visibility = "hidden";
  desk.style.opacity = 0;
  desk.style.transition = "opacity 1.5s";
  piano.style.visibility = "hidden";
  piano.style.opacity = 0;
  piano.style.transition = "opacity 1.5s";
  brownRoomBackPB.style.visibility = "hidden";
  brownRoomBackP.style.visibility = "visible";
  updateText(3);
});

lockPick.addEventListener("click", function () {
  lockPick.style.top = "30%";
  lockPick.style.left = "30%";
  lockPick.style.scale = 0.75;
  lockPick.style.transition = "all 2s";
  lockPick.style.transform = "rotate(0deg)";
  brownRoomBackPB.style.visibility = "hidden";
  brownRoomBackP.style.visibility = "visible";
});

brownRoomBackP.addEventListener("click", function () {
  exploreBookshelf.style.visibility = "hidden";
  exploreBookshelf.style.opacity = 0;
  exploreBookshelf.style.transition = "opacity 1.5s";
  usedBookshelf.style.visibility = "visible";
  usedBookshelf.style.opacity = 1;
  usedBookshelf.style.transition = "opacity 1.5s";
  pianoAfterBookshelf.style.visibility = "visible";
  pianoAfterBookshelf.style.opacity = 1;
  pianoAfterBookshelf.style.transition = "opacity 1.5s";
  deskBookshelfFirst.style.visibility = "visible";
  deskBookshelfFirst.style.opacity = 1;
  deskBookshelfFirst.style.transition = "opacity 1.5s";
  updateText(4);
});

deskBookshelfFirst.addEventListener("click", function () {
  usedBookshelf.style.visibility = "hidden";
  usedBookshelf.style.opacity = 0;
  usedBookshelf.style.transition = "opacity 1.5s";
  deskOpen.style.visibility = "visible";
  deskOpen.style.opacity = "1";
  deskOpen.style.transition = "opacity 1.5s";
  blueKey.style.visibility = "visible";
  blueKey.style.opacity = "1";
  blueKey.style.transition = "opacity 1.5s";
  deskBookshelfFirst.style.visibility = "hidden";
  deskBookshelfFirst.style.opacity = 0;
  deskBookshelfFirst.style.transition = "opacity 1.5s";
  pianoAfterBookshelf.style.visibility = "hidden";
  pianoAfterBookshelf.style.opacity = 0;
  pianoAfterBookshelf.style.transition = "opacity 1.5s";
  brownRoomBackP.style.visibility = "hidden";
  brownRoomBackBsF.style.visibility = "visible";
  updateText(5);
});

brownRoomBackBsF.addEventListener("click", function () {
  usedBookshelf.style.visibility = "visible";
  usedBookshelf.style.opacity = 1;
  usedBookshelf.style.transition = "opacity 1.5s";
  deskOpen.style.visibility = "hidden";
  deskOpen.style.opacity = 0;
  deskOpen.style.transition = "opacity 1.5s";
  usedDesk.style.visibility = "visible";
  usedBookshelf.style.opacity = 1;
  usedDesk.style.transition = "opacity 1.5s";
  pianoAfterBoth.style.visibility = "visible";
  pianoAfterBoth.style.opacity = 1;
  pianoAfterBoth.style.transition = "opacity 1.5s";
  brownRoomBackBsF.style.visibility = "hidden";
  brownRoomBackBDsUsed.style.visibility = "visible";
  updateText(6);
});

brownRoomBackBDsUsed.addEventListener("click", function () {
  blueDoor.style.visibility = "visible";
  blueDoor.style.opacity = 1;
  blueDoor.style.transition = "opacity .5s";
  blueDoorBg.style.visibility = "visible";
  blueDoorBg.style.opacity = 1;
  blueDoorBg.style.transition = "opacity .5s";
  redDoor.style.visibility = "visible";
  redDoor.style.opacity = 1;
  redDoor.style.transition = "opacity .9s";
  redDoorBg.style.visibility = "visible";
  redDoorBg.style.opacity = 1;
  redDoorBg.style.transition = "opacity .9s";
  greenDoor.style.visibility = "visible";
  greenDoor.style.opacity = 1;
  greenDoor.style.transition = "opacity 1.2s";
  greenDoorBg.style.visibility = "visible";
  greenDoorBg.style.opacity = 1;
  greenDoorBg.style.transition = "opacity 1.2s";
  brownDoorOnlyPiano.style.opacity = 1;
  brownDoorOnlyPiano.style.transition = "all 1s";
  brownDoorOnlyPiano.style.visibility = "visible";
  brownDoorBg.style.opacity = 1;
  brownDoorBg.style.visibility = "visible";
  brownDoorBg.style.transition = "opacity 1.2s";
  startRoomBg.style.visibility = "visible";
  startRoomBg.style.opacity = 1;
  startRoomBg.style.transition = "opacity 1.5s";
  brownRoomBg.style.visibility = "hidden";
  brownRoomBg.style.opacity = 0;
  brownRoomBg.style.transition = "opacity .8s";
  usedBookshelf.style.visibility = "hidden";
  usedBookshelf.style.opacity = 0;
  usedBookshelf.style.transition = "opacity .8s";
  usedDesk.style.visibility = "hidden";
  usedDesk.style.opacity = 0;
  usedDesk.style.transition = "opacity .8s";
  pianoAfterBoth.style.visibility = "hidden";
  pianoAfterBoth.style.opacity = 0;
  pianoAfterBoth.style.transition = "opacity .8s";
  blueKey.style.visibility = "hidden";
  blueKey.style.opacity = 0;
  useBlueKey.style.visibility = "visible";
  useBlueKey.style.opacity = 1;
  lockPick.style.visibility = "hidden";
  lockPick.style.opacity = 0;
  useLockPick.style.visibility = "visible";
  useLockPick.style.opacity = 1;
  updateText(7);
});

brownDoorOnlyPiano.addEventListener("click", function () {});

useBlueKey.addEventListener("click", function () {
  useBlueKey.style.top = "58%";
  useBlueKey.style.left = "-375%";
  useBlueKey.style.transform =
    "rotate(-30deg) scaleX(-1) rotate3d(0, 1, 0, 45deg)";
  useBlueKey.style.scale = 0.4;
  useBlueKey.style.transition = "all 2s";
  changeBlueLockedStatus();
  hideBlueKey();
});

function changeBlueLockedStatus() {
  setTimeout(function () {
    blueDoor.style.visibility = "hidden";
    blueDoor.style.opacity = 0;
    blueDoor.style.transition = "opacity .5s";
    openBlueDoor.style.visibility = "visible";
    openBlueDoor.style.opacity = 1;
    openBlueDoor.style.transition = "opacity .5s";
  }, 2500);
}

function changeRedLockedStatus() {
  setTimeout(function () {
    redDoor.style.visibility = "hidden";
    redDoor.style.opacity = 0;
    redDoor.style.transition = "opacity .5s";
    openRedDoor.style.visibility = "visible";
    openRedDoor.style.opacity = 1;
    openRedDoor.style.transition = "opacity .5s";
  }, 2500);
}

function changeGreenLockedStatus() {
  setTimeout(function () {
    greenDoor.style.visibility = "hidden";
    greenDoor.style.opacity = 0;
    greenDoor.style.transition = "opacity .5s";
    openGreenDoor.style.visibility = "visible";
    openGreenDoor.style.opacity = 1;
    openGreenDoor.style.transition = "opacity .5s";
  }, 2500);
}

function hideBlueKey() {
  setTimeout(function () {
    useBlueKey.style.opacity = 0;
    useBlueKey.style.visibility = "hidden";
    useBlueKey.style.transition = "opacity .8s";
  }, 2000);
}

useLockPick.addEventListener("click", function () {
  useLockPickBlue.style.visibility = "visible";
  useLockPickRed.style.visibility = "visible";
  useLockPickGreen.style.visibility = "visible";
});

useLockPickBlue.addEventListener("click", function () {
  useLockPickBlue.style.visibility = "hidden";
  useLockPickRed.style.visibility = "hidden";
  useLockPickGreen.style.visibility = "hidden";
  startGameContainer.style.display = "flex";
  gameInfo.style.display = "flex";
  startBtn.style.display = "block";
  gameBox.style.display = "none";
  document.body.classList.add("blueRoom");
  lockBodyBg.classList.add("blueRoom");
});

backBtn.addEventListener("click", function () {
  useLockPick.style.visibility = "hidden";
  startGameContainer.style.display = "none";
  gameInfo.style.display = "none";
  startBtn.style.display = "none";
  gameBox.style.display = "flex";
  document.body.classList.remove("blueRoom");
  lockBodyBg.classList.remove("blueRoom");
  document.body.classList.remove("redRoom");
  lockBodyBg.classList.remove("redRoom");
  document.body.classList.remove("greenRoom");
  lockBodyBg.classList.remove("greenRoom");
});

useLockPickRed.addEventListener("click", function () {
  useLockPickBlue.style.visibility = "hidden";
  useLockPickRed.style.visibility = "hidden";
  useLockPickGreen.style.visibility = "hidden";
  startGameContainer.style.display = "flex";
  gameInfo.style.display = "flex";
  startBtn.style.display = "block";
  const gameBox = document.querySelector(".gameBox");
  gameBox.style.display = "none";
  document.body.classList.add("redRoom");
  lockBodyBg.classList.add("redRoom");
});
useLockPick.style.visibility = "hidden";
startGameContainer.style.display = "none";
gameInfo.style.display = "none";
startBtn.style.display = "none";
gameBox.style.display = "flex";
document.body.classList.remove("redRoom");
lockBodyBg.classList.remove("redRoom");

useLockPickGreen.addEventListener("click", function () {
  useLockPickBlue.style.visibility = "hidden";
  useLockPickRed.style.visibility = "hidden";
  useLockPickGreen.style.visibility = "hidden";
  startGameContainer.style.display = "flex";
  gameInfo.style.display = "flex";
  startBtn.style.display = "block";
  const gameBox = document.querySelector(".gameBox");
  gameBox.style.display = "none";
  document.body.classList.add("greenRoom");
  lockBodyBg.classList.add("greenRoom");
});
useLockPick.style.visibility = "hidden";
startGameContainer.style.display = "none";
gameInfo.style.display = "none";
startBtn.style.display = "none";
gameBox.style.display = "flex";
document.body.classList.remove("redRoom");
lockBodyBg.classList.remove("redRoom");

desk.addEventListener("click", function () {
  deskOpen.style.visibility = "visible";
  deskOpen.style.opacity = "1";
  deskOpen.style.transition = "opacity 1.5s";
  blueKey.style.visibility = "visible";
  blueKey.style.opacity = "1";
  blueKey.style.transition = "opacity 1.5s";
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

blueKey.addEventListener("click", function () {
  blueKey.style.top = "20%";
  blueKey.style.left = "30%";
  blueKey.style.scale = 1;
  blueKey.style.transition = "all 2s";
  brownRoomBack.style.visibility = "hidden";
  brownRoomBackPB.style.visibility = "visible";
});

brownRoomBackPB.addEventListener("click", function () {
  deskOpen.style.visibility = "hidden";
  deskOpen.style.opacity = 0;
  deskOpen.style.transition = "opacity 1.5s";
  bookshelfDeskFirst.style.visibility = "visible";
  bookshelfDeskFirst.style.opacity = 1;
  bookshelfDeskFirst.style.transition = "opacity 1.5s";
  usedDesk.style.visibility = "visible";
  usedDesk.style.opacity = 1;
  usedDesk.style.transition = "opacity 1.5s";
  pianoAfterDesk.style.visibility = "visible";
  pianoAfterDesk.style.opacity = 1;
  pianoAfterDesk.style.transition = "opacity 1.5s";
  updateText(8);
});

bookshelfDeskFirst.addEventListener("click", function () {
  exploreBookshelf.style.visibility = "visible";
  exploreBookshelf.style.opacity = 1;
  exploreBookshelf.style.transition = "opacity 1.5s";
  lockPick.style.visibility = "visible";
  lockPick.style.opacity = "1";
  lockPick.style.transition = "opacity 1.5s";
  bookshelfDeskFirst.style.visibility = "hidden";
  bookshelfDeskFirst.style.opacity = 0;
  bookshelfDeskFirst.style.transition = "opacity 1.5s";
  usedDesk.style.visibility = "hidden";
  usedDesk.style.opacity = 0;
  usedDesk.style.transition = "opacity 1.5s";
  pianoAfterDesk.style.visibility = "hidden";
  pianoAfterDesk.style.opacity = 0;
  pianoAfterDesk.style.transition = "opacity 1.5s";
  brownRoomBackPB.style.visibility = "hidden";
  brownRoomBackDF.style.visibility = "visible";
  updateText(3);
});

brownRoomBackDF.addEventListener("click", function () {
  exploreBookshelf.style.visibility = "hidden";
  exploreBookshelf.style.opacity = 0;
  exploreBookshelf.style.transition = "opacity 1.5s";
  usedBookshelf.style.visibility = "visible";
  usedBookshelf.style.opacity = 1;
  usedBookshelf.style.transition = "opacity 1.5s";
  usedDesk.style.visibility = "visible";
  usedDesk.style.opacity = 1;
  usedDesk.style.transition = "opacity 1.5s";
  pianoAfterBoth.style.visibility = "visible";
  pianoAfterBoth.style.opacity = 1;
  pianoAfterBoth.style.transition = "opacity 1.5s";
  brownRoomBackDF.style.visibility = "hidden";
  brownRoomBackBDsUsed.style.visibility = "visible";
  updateText(6);
});

piano.addEventListener("click", function () {
  explorePiano.style.visibility = "visible";
  explorePiano.style.opacity = 1;
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
  brownRoomBack.style.visibility = "hidden";
  brownRoomBackPianoFirst.style.visibility = "visible";
});

brownRoomBackPianoFirst.addEventListener("click", function () {
  explorePiano.style.visibility = "hidden";
  explorePiano.style.opacity = 0;
  explorePiano.style.transition = "opacity 1.5s";
  bookshelf.style.visibility = "visible";
  bookshelf.style.opacity = 1;
  bookshelf.style.transition = "opacity 1.5s";
  desk.style.visibility = "visible";
  desk.style.opacity = 1;
  desk.style.transition = "opacity 1.5s";
  piano.style.visibility = "visible";
  piano.style.opacity = 1;
  piano.style.transition = "opacity 1.5s";
});

pianoAfterBookshelf.addEventListener("click", function () {
  pianoAfterBookshelf.style.visibility = "hidden";
  pianoAfterBookshelf.style.opacity = 0;
  pianoAfterBookshelf.style.transition = "opacity 1s";
  pianoAfterBookshelfNo.style.visibility = "visible";
  pianoAfterBookshelfNo.style.opacity = 1;
  pianoAfterBookshelfNo.style.transition = "opacity 1.5s";
  usedBookshelf.style.visibility = "hidden";
  usedBookshelf.style.opacity = 0;
  usedBookshelf.style.transition = "opacity 1s";
  deskBookshelfFirst.style.visibility = "hidden";
  deskBookshelfFirst.style.opacity = 0;
  deskBookshelfFirst.style.transition = "opacity 1s";
  brownRoomBackP.style.visibility = "visible";
  brownRoomBackPianoAfterBookshelf.style.visibility = "visible";
});

brownRoomBackPianoAfterBookshelf.addEventListener("click", function () {
  pianoAfterBookshelf.style.visibility = "visible";
  pianoAfterBookshelf.style.opacity = 1;
  pianoAfterBookshelf.style.transition = "opacity 1s";
  pianoAfterBookshelfNo.style.visibility = "hidden";
  pianoAfterBookshelfNo.style.opacity = 0;
  pianoAfterBookshelfNo.style.transition = "opacity 1.5s";
  usedBookshelf.style.visibility = "visible";
  usedBookshelf.style.opacity = 1;
  usedBookshelf.style.transition = "opacity 1s";
  deskBookshelfFirst.style.visibility = "visible";
  deskBookshelfFirst.style.opacity = 1;
  deskBookshelfFirst.style.transition = "opacity 1s";
});

pianoAfterDesk.addEventListener("click", function () {
  pianoAfterDesk.style.visibility = "hidden";
  pianoAfterDesk.style.opacity = 0;
  pianoAfterDesk.style.transition = "opacity 1s";
  pianoAfterDeskNo.style.visibility = "visible";
  pianoAfterDeskNo.style.opacity = 1;
  pianoAfterDeskNo.style.transition = "opacity 1.5s";
  bookshelfDeskFirst.style.visibility = "hidden";
  bookshelfDeskFirst.style.opacity = 0;
  bookshelfDeskFirst.style.transition = "opacity 1s";
  usedDesk.style.visibility = "hidden";
  usedDesk.style.opacity = 0;
  usedDesk.style.transition = "opacity 1s";
  brownRoomBackPB.style.visibility = "hidden";
  brownRoomBackPianoAfterDesk.style.visibility = "visible";
});

brownRoomBackPianoAfterDesk.addEventListener("click", function () {
  pianoAfterDesk.style.visibility = "visible";
  pianoAfterDesk.style.opacity = 1;
  pianoAfterDesk.style.transition = "opacity 1s";
  pianoAfterDeskNo.style.visibility = "hidden";
  pianoAfterDeskNo.style.opacity = 0;
  pianoAfterDeskNo.style.transition = "opacity 1.5s";
  bookshelfDeskFirst.style.visibility = "visible";
  bookshelfDeskFirst.style.opacity = 1;
  bookshelfDeskFirst.style.transition = "opacity 1s";
  usedDesk.style.visibility = "visible";
  usedDesk.style.opacity = 1;
  usedDesk.style.transition = "opacity 1s";
});

pianoAfterBoth.addEventListener("click", function () {
  pianoAfterBoth.style.visibility = "hidden";
  pianoAfterBoth.style.opacity = 0;
  pianoAfterBoth.style.transition = "opacity 1.5s";
  pianoAfterBothNo.style.visibility = "visible";
  pianoAfterBothNo.style.opacity = 1;
  pianoAfterBothNo.style.transition = "opacity 1.5s";
  usedBookshelf.style.visibility = "hidden";
  usedBookshelf.style.opacity = 0;
  usedBookshelf.style.transition = "opacity 1.5s";
  usedDesk.style.visibility = "hidden";
  usedBookshelf.style.opacity = 0;
  usedDesk.style.transition = "opacity 1.5s";
  brownRoomBackBDsUsed.style.visibility = "hidden";
  brownRoomBackPianoAfterBoth.style.visibility = "visible";
});

brownRoomBackPianoAfterBoth.addEventListener("click", function () {
  pianoAfterBoth.style.visibility = "visible";
  pianoAfterBoth.style.opacity = 1;
  pianoAfterBoth.style.transition = "opacity 1.5s";
  pianoAfterBothNo.style.visibility = "hidden";
  pianoAfterBothNo.style.opacity = 0;
  pianoAfterBothNo.style.transition = "opacity 1.5s";
  usedBookshelf.style.visibility = "visible";
  usedBookshelf.style.opacity = 1;
  usedBookshelf.style.transition = "opacity 1.5s";
  usedDesk.style.visibility = "visible";
  usedBookshelf.style.opacity = 1;
  usedDesk.style.transition = "opacity 1.5s";
  brownRoomBackPianoAfterBoth.style.visibility = "hidden";
  brownRoomBackBDsUsed.style.visibility = "visible";
});

openBlueDoor.addEventListener("click", function () {
  openBlueDoor.style.visibility = "hidden";
  openBlueDoor.style.opacity = 0;
  openBlueDoor.style.transition = "opacity 1.9s";
  blueDoorBg.style.visibility = "hidden";
  blueDoorBg.style.opacity = 0;
  blueDoorBg.style.transition = "opacity .5s";
  redDoor.style.visibility = "hidden";
  redDoor.style.opacity = 0;
  redDoor.style.transition = "opacity .9s";
  redDoorBg.style.visibility = "hidden";
  redDoorBg.style.opacity = 0;
  redDoorBg.style.transition = "opacity .9s";
  greenDoor.style.visibility = "hidden";
  greenDoor.style.opacity = 1;
  greenDoor.style.transition = "opacity 1.2s";
  greenDoorBg.style.visibility = "hidden";
  greenDoorBg.style.opacity = 0;
  greenDoorBg.style.transition = "opacity 1.2s";
  brownDoorOnlyPiano.style.opacity = 0;
  brownDoorOnlyPiano.style.transition = "all .5s";
  brownDoorOnlyPiano.style.visibility = "hidden";
  brownDoorBg.style.opacity = 0;
  brownDoorBg.style.visibility = "hidden";
  brownDoorBg.style.transition = "opacity .5s";
  startRoomBg.style.visibility = "hidden";
  startRoomBg.style.opacity = 0;
  startRoomBg.style.transition = "opacity 1.5s";
  brownRoomBg.style.visibility = "visible";
  brownRoomBg.style.opacity = 1;
  brownRoomBg.style.transition = "opacity .8s";
  redKey.style.visibility = "visible";
  redKey.style.opacity = 1;
  redKey.style.transition = "opacity 1s";
  updateText(9);
});

redKey.addEventListener("click", function () {
  redKey.style.top = "20%";
  redKey.style.left = "30%";
  redKey.style.scale = 1;
  redKey.style.transition = "all 2s";
  brownRoomBackBDsUsed.style.visibility = "hidden";
  blueRoomBack.style.visibility = "visible";
});

blueRoomBack.addEventListener("click", function () {
  redKey.style.visibility = "hidden";
  useRedKey.style.visibility = "visible";
  redDoor.style.visibility = "visible";
  redDoor.style.opacity = 1;
  redDoor.style.transition = "opacity .5s";
  redDoorBg.style.visibility = "visible";
  redDoorBg.style.opacity = 1;
  redDoorBg.style.transition = "opacity .5s";
  usedBlueDoor.style.visibility = "visible";
  usedBlueDoor.style.opacity = 1;
  usedBlueDoor.style.transition = "opacity .9s";
  greenDoor.style.visibility = "visible";
  greenDoor.style.opacity = 1;
  greenDoor.style.transition = "opacity 1.2s";
  greenDoorBg.style.visibility = "visible";
  greenDoorBg.style.opacity = 1;
  greenDoorBg.style.transition = "opacity 1.2s";
  brownDoorOnlyPiano.style.opacity = 1;
  brownDoorOnlyPiano.style.transition = "all .5s";
  brownDoorOnlyPiano.style.visibility = "visible";
  brownDoorBg.style.opacity = 1;
  brownDoorBg.style.visibility = "visible";
  brownDoorBg.style.transition = "opacity .5s";
  startRoomBg.style.visibility = "visible";
  startRoomBg.style.opacity = 1;
  startRoomBg.style.transition = "opacity 1.5s";
  brownRoomBg.style.visibility = "hidden";
  brownRoomBg.style.opacity = 0;
  brownRoomBg.style.transition = "opacity .8s";
  updateText(10);
});

useRedKey.addEventListener("click", function () {
  useRedKey.style.top = "58%";
  useRedKey.style.left = "-275%";
  useRedKey.style.transform =
    "rotate(-30deg) scaleX(-1) rotate3d(0, 1, 0, 45deg)";
  useRedKey.style.scale = 0.4;
  useRedKey.style.transition = "all 2s";
  useRedKey.style.visibility = "hidden";
  changeRedLockedStatus();
  hideRedKey();
});

function hideRedKey() {
  setTimeout(function () {
    useRedKey.style.opacity = 0;
    useRedKey.style.visibility = "hidden";
    useRedKey.style.transition = "opacity .8s";
  }, 2000);
}

openRedDoor.addEventListener("click", function () {
  openRedDoor.style.visibility = "hidden";
  openRedDoor.style.opacity = 0;
  openRedDoor.style.transition = "opacity 1.9s";
  redDoorBg.style.visibility = "hidden";
  redDoorBg.style.opacity = 0;
  redDoorBg.style.transition = "opacity .5s";
  usedBlueDoor.style.visibility = "hidden";
  usedBlueDoor.style.opacity = 0;
  usedBlueDoor.style.transition = "opacity .9s";
  blueDoorBg.style.visibility = "hidden";
  blueDoorBg.style.opacity = 0;
  blueDoorBg.style.transition = "opacity .9s";
  greenDoor.style.visibility = "hidden";
  greenDoor.style.opacity = 1;
  greenDoor.style.transition = "opacity 1.2s";
  greenDoorBg.style.visibility = "hidden";
  greenDoorBg.style.opacity = 0;
  greenDoorBg.style.transition = "opacity 1.2s";
  brownDoorOnlyPiano.style.opacity = 0;
  brownDoorOnlyPiano.style.transition = "all .5s";
  brownDoorOnlyPiano.style.visibility = "hidden";
  brownDoorBg.style.opacity = 0;
  brownDoorBg.style.visibility = "hidden";
  brownDoorBg.style.transition = "opacity .5s";
  startRoomBg.style.visibility = "hidden";
  startRoomBg.style.opacity = 0;
  startRoomBg.style.transition = "opacity 1.5s";
  brownRoomBg.style.visibility = "visible";
  brownRoomBg.style.opacity = 1;
  brownRoomBg.style.transition = "opacity .8s";
  greenKey.style.visibility = "visible";
  greenKey.style.opacity = 1;
  greenKey.style.transition = "opacity 1s";
  noteSheet.style.visibility = "visible";
  noteSheet.style.opacity = 1;
  noteSheet.style.transition = "opacity 1s";
});

greenKey.addEventListener("click", function () {
  greenKey.style.top = "55%";
  greenKey.style.left = "30%";
  greenKey.style.scale = 1;
  greenKey.style.transition = "all 2s";
  blueRoomBack.style.visibility = "hidden";
  redRoomBack.style.visibility = "visible";
});

noteSheet.addEventListener("click", function () {
  noteSheet.style.top = "65%";
  noteSheet.style.left = "30%";
  noteSheet.style.scale = 1;
  noteSheet.style.transform = "rotate3d(1, 1, 1, 2deg)";
  noteSheet.style.transition = "all 2s";
  blueRoomBack.style.visibility = "hidden";
  redRoomBack.style.visibility = "visible";
});

redRoomBack.addEventListener("click", function () {
  usedRedDoor.style.visibility = "visible";
  usedRedDoor.style.opacity = 1;
  usedRedDoor.style.transition = "opacity 1.9s";
  usedBlueDoor.style.visibility = "visible";
  usedBlueDoor.style.opacity = 1;
  usedBlueDoor.style.transition = "opacity .9s";
  greenDoor.style.visibility = "visible";
  greenDoor.style.opacity = 1;
  greenDoor.style.transition = "opacity 1.2s";
  greenDoorBg.style.visibility = "visible";
  greenDoorBg.style.opacity = 1;
  greenDoorBg.style.transition = "opacity 1.2s";
  brownDoorUsePiano.style.visibility = "visible";
  brownDoorUsePiano.style.opacity = 1;
  brownDoorUsePiano.style.transition = "all .5s";
  brownDoorBg.style.opacity = 1;
  brownDoorBg.style.visibility = "visible";
  brownDoorBg.style.transition = "opacity .5s";
  startRoomBg.style.visibility = "visible";
  startRoomBg.style.opacity = 1;
  startRoomBg.style.transition = "opacity 1.5s";
  brownRoomBg.style.visibility = "hidden";
  brownRoomBg.style.opacity = 0;
  brownRoomBg.style.transition = "opacity .8s";
  greenKey.style.visibility = "hidden";
  greenKey.style.opacity = 0;
  greenKey.style.transition = "opacity 1s";
  useGreenKey.style.visibility = "visible";
  useGreenKey.style.opacity = 1;
  useGreenKey.style.transition = "opacity 1s";
});

brownDoorUsePiano.addEventListener("click", function () {
  usedRedDoor.style.visibility = "hidden";
  usedRedDoor.style.opacity = 0;
  usedRedDoor.style.transition = "opacity 1.9s";
  usedBlueDoor.style.visibility = "hidden";
  usedBlueDoor.style.opacity = 0;
  usedBlueDoor.style.transition = "opacity .9s";
  greenDoor.style.visibility = "hidden";
  greenDoor.style.opacity = 0;
  greenDoor.style.transition = "opacity 1.2s";
  greenDoorBg.style.visibility = "hidden";
  greenDoorBg.style.opacity = 0;
  greenDoorBg.style.transition = "opacity 1.2s";
  brownDoorUsePiano.style.visibility = "hidden";
  brownDoorUsePiano.style.opacity = 0;
  brownDoorUsePiano.style.transition = "all .5s";
  brownDoorBg.style.opacity = 0;
  brownDoorBg.style.visibility = "hidden";
  brownDoorBg.style.transition = "opacity .5s";
  startRoomBg.style.visibility = "hidden";
  startRoomBg.style.opacity = 0;
  startRoomBg.style.transition = "opacity 1.5s";
  brownRoomBg.style.visibility = "visible";
  brownRoomBg.style.opacity = 1;
  brownRoomBg.style.transition = "opacity .8s";
  usedBookshelf.style.visibility = "visible";
  usedBookshelf.style.opacity = 1;
  usedBookshelf.style.transition = "opacity 1.8s";
  usedDesk.style.visibility = "visible";
  usedDesk.style.opacity = 1;
  usedDesk.style.transition = "opacity 1.8s";
  pianoAfterNoteSheetYes.style.visibility = "visible";
  pianoAfterNoteSheetYes.style.opacity = 1;
  pianoAfterNoteSheetYes.style.transition = "opacity 1.8s";
});

useNoteSheet.addEventListener("click", function () {
  useNoteSheet.style.top = "35%";
  useNoteSheet.style.left = "-290%";
  useNoteSheet.style.transform = "rotate3d(0, 8, 3, 45deg)";
  useNoteSheet.style.scale = 0.7;
  useNoteSheet.style.transition = "top 2s, left 2s";
});

pianoAfterNoteSheetYes.addEventListener("click", function () {
  playPiano.style.visibility = "visible";
  playPiano.style.opacity = 1;
  playPiano.style.transition = "opacity 1.8s";
  usedBookshelf.style.visibility = "hidden";
  usedBookshelf.style.opacity = 0;
  usedBookshelf.style.transition = "opacity .8s";
  usedDesk.style.visibility = "hidden";
  usedDesk.style.opacity = 0;
  usedDesk.style.transition = "opacity .8s";
  pianoAfterNoteSheetYes.style.visibility = "hidden";
  pianoAfterNoteSheetYes.style.opacity = 0;
  pianoAfterNoteSheetYes.style.transition = "opacity .8s";
  noteSheet.style.visibility = "hidden";
  noteSheet.style.opacity = 0;
  noteSheet.style.transition = "opacity 1s";
  useNoteSheet.style.visibility = "visible";
  useNoteSheet.style.opacity = 1;
  redRoomBack.style.visibility = "hidden";
});

playPiano.addEventListener("click", function () {
  brownRoomBackAllUsed.style.visibility = "visible";
  gameBox.style.display = "none";
  pianoBody.style.display = "flex";
});

brownRoomBackAllUsed.addEventListener("click", function () {
  gameBox.style.display = "flex";
  pianoBody.style.display = "none";
  playPiano.style.visibility = "hidden";
  playPiano.style.opacity = 0;
  playPiano.style.transition = "opacity .8s";
  useNoteSheet.style.visibility = "hidden";
  useNoteSheet.style.opacity = 0;
  useNoteSheet.style.transition = "opacity .1";
  usedBlueDoor.style.visibility = "visible";
  usedBlueDoor.style.opacity = 1;
  usedBlueDoor.style.transition = "opacity .8s";
  usedRedDoor.style.visibility = "visible";
  usedRedDoor.style.opacity = 1;
  usedRedDoor.style.transition = "opacity .8s";
  usedBrownDoor.style.visibility = "visible";
  usedBrownDoor.style.opacity = 1;
  usedBrownDoor.style.transition = "opacity .8s";
  greenDoor.style.visibility = "visible";
  greenDoor.style.opacity = 1;
  greenDoor.style.transition = "opacity .8s";
  greenDoorBg.style.visibility = "visible";
  greenDoorBg.style.opacity = 1;
  greenDoorBg.style.transition = "opacity .2s";
  startRoomBg.style.visibility = "visible";
  startRoomBg.style.opacity = 1;
  startRoomBg.style.transition = "opacity .2s";
  brownRoomBg.style.visibility = "hidden";
  brownRoomBg.style.opacity = 0;
  brownRoomBg.style.transition = "opacity .2s";
});

useGreenKey.addEventListener("click", function () {
  useGreenKey.style.top = "58%";
  useGreenKey.style.left = "-75%";
  useGreenKey.style.transform =
    "rotate(-30deg) scaleX(-1) rotate3d(0, 1, 0, 45deg)";
  useGreenKey.style.scale = 0.4;
  useGreenKey.style.transition = "all 2s";
  useGreenKey.style.visibility = "hidden";
  changeGreenLockedStatus();
  hideGreenKey();
});

function hideGreenKey() {
  setTimeout(function () {
    useGreenKey.style.opacity = 0;
    useGreenKey.style.visibility = "hidden";
    useGreenKey.style.transition = "opacity .8s";
  }, 2000);
}

openGreenDoor.addEventListener("click", function () {
  useNoteSheet.style.visibility = "hidden";
  useNoteSheet.style.visibility = "hidden";
  useNoteSheet.style.transition = "opacity .8s";
  usedBlueDoor.style.visibility = "hidden";
  usedBlueDoor.style.opacity = 0;
  usedBlueDoor.style.transition = "opacity .8s";
  usedRedDoor.style.visibility = "hidden";
  usedRedDoor.style.opacity = 0;
  usedRedDoor.style.transition = "opacity .8s";
  usedBrownDoor.style.visibility = "hidden";
  usedBrownDoor.style.opacity = 0;
  usedBrownDoor.style.transition = "opacity .8s";
  openGreenDoor.style.visibility = "hidden";
  openGreenDoor.style.opacity = 0;
  openGreenDoor.style.transition = "opacity 1.8s";
  greenDoorBg.style.visibility = "visible";
  greenDoorBg.style.opacity = 0;
  greenDoorBg.style.transition = "opacity .2s";
  startRoomBg.style.opacity = 0;
  startRoomBg.style.transition = "opacity 2s";
  inventory.style.opacity = 0;
  inventory.style.transition = "opacity 2s";
});

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
  },
  {
    id: 2,
    text: "What is this then...",
  },
  {
    id: 3,
    text: "Look on the shelf, that's a lockpick!",
  },
  {
    id: 4,
    text: "Let's check out that desk",
  },
  {
    id: 5,
    text: "In the drawer, there's a blue key!",
  },
  {
    id: 6,
    text: "Only the piano left now, too bad i can't play...",
  },
  {
    id: 7,
    text: "Let's where i can use this key or mabye the lockpick",
  },
  {
    id: 8,
    text: "Let's check out that bookshelf",
  },
  {
    id: 9,
    text: "There on the floor! A red key.",
  },
  {
    id: 10,
    text: "Hmm a lockpick and a red key, i wonder witch i should use first",
  },
];

// LockPick minigame
const gameDescription = document.getElementById("gameDescription");
const failText = document.getElementById("failText");
const succesText = document.getElementById("succesText");
const countDownNumber = document.getElementById("countDownNumber");
const lockContainer = document.getElementById("lockContainer");
const lockPickArm = document.getElementById("lockPickArm");
const outerCircle = document.querySelector(".outerCircle");
const dot = document.querySelector(".dot");
const innerCircle = document.getElementById("innerCircle");
const pinContainer = document.getElementById("pinContainer");
let pin = document.querySelector(".pin.current");
let unlockTimer = null;
let setUnlockTimer = false;

//Hidden before player uses lockpick
startGameContainer.style.display = "none";
lockContainer.style.display = "none";
startBtn.style.display = "none";
lockBodyBg.style.display = "none";

//Lock pick mechanism hidden before start screen
countDownNumber.style.display = "none";
lockContainer.style.display = "none";
countDownNumber.style.display = "none";
failText.style.display = "none";
succesText.style.display = "none";
backBtn.style.display = "none";
enterRoom.style.display = "none";
dot.style.display = "none";

startBtn.addEventListener("click", function () {
  startGameContainer.style.display = "none";
  countDownNumber.style.display = "block";
  lockBodyBg.style.display = "flex";
  lockContainer.style.display = "block";
  gameTimerCountDown();

  count = 13;
  const countDownTimer = setInterval(function () {
    count--;
    countDownNumber.innerText = count;
    if (count === 0) {
      clearInterval(countDownTimer);
    }
  }, 1000);

  document.addEventListener("mousemove", function (e) {
    const threshold = 5;
    const lockPosistion = lockContainer.getBoundingClientRect();
    const deg = mouseAngle(
      lockPosistion.left + lockPosistion.width / 2,
      lockPosistion.top + lockPosistion.height / 2,
      e.pageX,
      e.pageY
    );
    lockPickArm.style.transform = `rotate(${deg + 90}deg)`;

    const activeLockPosition = pin ? pin.dataset.deg : 0;
    if (
      deg <= Number(activeLockPosition) + threshold &&
      deg >= Number(activeLockPosition) - threshold
    ) {
      lockContainer.querySelector(".outerCircle").classList.add("shakeCricle");
      if (!setUnlockTimer) {
        unlockTimer = setTimeout(function () {
          if (pin) {
            pin.classList.add("done");
            pin.classList.remove("current");
            pin = pin.nextElementSibling;
            console.log(pin);

            if (pin) {
              pin.classList.add("current");
              lockContainer
                .querySelector(".outerCircle")
                .classList.add("sucess");
              setTimeout(function () {
                lockContainer
                  .querySelector(".outerCircle")
                  .classList.remove("sucess");
              }, 2000);
            }
            lockContainer
              .querySelector(".outerCircle")
              .classList.remove("shakeCircle");
          }
        }, 3000);
        setUnlockTimer = true;
      }
    } else {
      lockContainer
        .querySelector(".outerCircle")
        .classList.remove("shakeCricle");
      clearTimeout(unlockTimer);
      setUnlockTimer = false;
    }
    if (pin.classList.contains("win")) {
      wonGame();
      clearTimeout(gameTimer);
    }

    if (
      deg <= Number(activeLockPosition) + threshold &&
      deg >= Number(activeLockPosition) - threshold
    ) {
      lockPickArm.querySelector(".dot").style.display = "block";
    } else {
      lockPickArm.querySelector(".dot").style.display = "none";
    }
  });
});

function mouseAngle(cx, cy, ex, ey) {
  return ((Math.atan2(ey - cy, ex - cx) * 180) / Math.PI + 360) % 360;
}

function wonGame() {
  startGameContainer.style.display = "flex";
  gameDescription.style.display = "none";
  succesText.style.display = "block";
  startBtn.style.display = "none";
  enterRoom.style.display = "block";
  lockBodyBg.style.display = "none";
  lockContainer.style.display = "none";
  countDownNumber.style.display = "none";
}

function gameTimerCountDown() {
  gameTimer = setTimeout(function () {
    startGameContainer.style.display = "flex";
    gameDescription.style.display = "none";
    failText.style.display = "block";
    startBtn.style.display = "none";
    backBtn.style.display = "block";
    lockBodyBg.style.display = "none";
    lockContainer.style.display = "none";
    countDownNumber.style.display = "none";
    const loseSpan = document.getElementById("lose");
    loseSpan.classList.remove("win");
  }, 13000);
}

//Piano minigame
const pianoBody = document.getElementById("pianoBody");

//WHITE KEYS
const noteFR = document.getElementById("keyFR"); //KEYO1
const noteGR = document.getElementById("keyGR"); //KEY03
const noteAR = document.getElementById("keyAR"); //KEY05
const noteBR = document.getElementById("keyBR"); //KEY07
const noteCR = document.getElementById("keyCR"); //KEY08
const noteDR = document.getElementById("keyDR"); //KEY10
const noteER = document.getElementById("keyER"); //KEY12

const noteFL = document.getElementById("keyFL"); //KEY13
const noteGL = document.getElementById("keyGL"); //KEY15
const noteAL = document.getElementById("keyAL"); //KEY17
const noteBL = document.getElementById("keyBL"); //KEY19
const noteCL = document.getElementById("keyCL"); //KEY20
const noteDL = document.getElementById("keyDL"); //KEY22
const noteEL = document.getElementById("keyEL"); //KEY24

//BLACK KEYS
const blackNoteFR = document.getElementById("blackFR"); //KEYO2
const blackNoteGR = document.getElementById("blackGR"); //KEY04
const blackNoteAR = document.getElementById("blackAR"); //KEY06
const blackNoteCR = document.getElementById("blackCR"); //KEY09
const blackNoteDR = document.getElementById("blackDR"); //KEY11
const blackNoteFL = document.getElementById("blackFL"); //KEY14
const blackNoteGL = document.getElementById("blackGL"); //KEY16
const blackNoteAL = document.getElementById("blackAL"); //KEY18
const blackNoteCL = document.getElementById("blackCL"); //KEY21
const blackNoteDL = document.getElementById("blackDL"); //KEY23

//NOTES
const note01 = document.getElementById("note01");
const note02 = document.getElementById("note02");
const note03 = document.getElementById("note03");
const note04 = document.getElementById("note04");
const note05 = document.getElementById("note05");
const note06 = document.getElementById("note06");
const note07 = document.getElementById("note07");
const note08 = document.getElementById("note08");
const note09 = document.getElementById("note09");
const note10 = document.getElementById("note10");
const note11 = document.getElementById("note11");
const note12 = document.getElementById("note12");
const note13 = document.getElementById("note13");
const note14 = document.getElementById("note14");
const note15 = document.getElementById("note15");
const note16 = document.getElementById("note16");
const note17 = document.getElementById("note17");
const note18 = document.getElementById("note18");
const note19 = document.getElementById("note19");
const note20 = document.getElementById("note20");
const note21 = document.getElementById("note21");
const note22 = document.getElementById("note22");
const note23 = document.getElementById("note23");
const note24 = document.getElementById("note24");

pianoBody.style.display = "none";

function playNote01() {
  if (note01.paused) {
    note01.play();
  }
}

function playNote02() {
  if (note02.paused) {
    note02.play();
  }
}

function playNote03() {
  if (note03.paused) {
    note03.play();
  }
}
function playNote04() {
  if (note04.paused) {
    note04.play();
  }
}
function playNote05() {
  if (note05.paused) {
    note05.play();
  }
}
function playNote06() {
  if (note06.paused) {
    note06.play();
  }
}
function playNote07() {
  if (note07.paused) {
    note07.play();
  }
}
function playNote08() {
  if (note08.paused) {
    note08.play();
  }
}
function playNote09() {
  if (note09.paused) {
    note09.play();
  }
}
function playNote10() {
  if (note10.paused) {
    note10.play();
  }
}
function playNote11() {
  if (note11.paused) {
    note11.play();
  }
}
function playNote12() {
  if (note12.paused) {
    note12.play();
  }
}
function playNote13() {
  if (note13.paused) {
    note13.play();
  }
}
function playNote14() {
  if (note14.paused) {
    note14.play();
  }
}
function playNote15() {
  if (note15.paused) {
    note15.play();
  }
}
function playNote16() {
  if (note16.paused) {
    note16.play();
  }
}
function playNote17() {
  if (note17.paused) {
    note17.play();
  }
}
function playNote18() {
  if (note18.paused) {
    note18.play();
  }
}
function playNote19() {
  if (note19.paused) {
    note19.play();
  }
}
function playNote20() {
  if (note20.paused) {
    note20.play();
  }
}
function playNote21() {
  if (note21.paused) {
    note21.play();
  }
}
function playNote22() {
  if (note22.paused) {
    note22.play();
  }
}
function playNote23() {
  if (note23.paused) {
    note23.play();
  }
}
function playNote24() {
  if (note24.paused) {
    note24.play();
  }
}

noteFR.addEventListener("click", function () {
  playNote01();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    playNote01();
    noteFR.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "a") {
    note01.pause();
    note01.currentTime = 0;
    noteFR.classList.remove("whiteHover");
  }
});
noteGR.addEventListener("click", function () {
  playNote03();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "s") {
    playNote03();
    noteGR.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "s") {
    note03.pause();
    note03.currentTime = 0;
    noteGR.classList.remove("whiteHover");
  }
});

noteAR.addEventListener("click", function () {
  playNote05();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "d") {
    playNote05();
    noteAR.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "d") {
    note05.pause();
    note05.currentTime = 0;
    noteAR.classList.remove("whiteHover");
  }
});

noteBR.addEventListener("click", function () {
  playNote07();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "f") {
    playNote07();
    noteBR.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "f") {
    note07.pause();
    note07.currentTime = 0;
    noteBR.classList.remove("whiteHover");
  }
});
noteCR.addEventListener("click", function () {
  playNote08();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "g") {
    playNote08();
    noteCR.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "g") {
    note08.pause();
    note08.currentTime = 0;
    noteCR.classList.remove("whiteHover");
  }
});
noteDR.addEventListener("click", function () {
  playNote10();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "h") {
    playNote10();
    noteDR.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "h") {
    note10.pause();
    note10.currentTime = 0;
    noteDR.classList.remove("whiteHover");
  }
});
noteER.addEventListener("click", function () {
  playNote12();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "j") {
    playNote12();
    noteER.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "j") {
    note12.pause();
    note12.currentTime = 0;
    noteER.classList.remove("whiteHover");
  }
});
noteFL.addEventListener("click", function () {
  playNote13();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "z") {
    playNote13();
    noteFL.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "z") {
    note13.pause();
    note13.currentTime = 0;
    noteFL.classList.remove("whiteHover");
  }
});
noteGL.addEventListener("click", function () {
  playNote15();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "x") {
    playNote15();
    noteGL.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "x") {
    note15.pause();
    note15.currentTime = 0;
    noteGL.classList.remove("whiteHover");
  }
});
noteAL.addEventListener("click", function () {
  playNote17();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "c") {
    playNote17();
    noteGL.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "c") {
    note17.pause();
    note17.currentTime = 0;
    noteGL.classList.remove("whiteHover");
  }
});
noteBL.addEventListener("click", function () {
  playNote19();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "v") {
    playNote19();
    noteBL.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "v") {
    note19.pause();
    note19.currentTime = 0;
    noteBL.classList.remove("whiteHover");
  }
});
noteCL.addEventListener("click", function () {
  playNote20();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "b") {
    playNote20();
    noteCL.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "b") {
    note20.pause();
    note20.currentTime = 0;
    noteCL.classList.remove("whiteHover");
  }
});
noteDL.addEventListener("click", function () {
  playNote22();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "n") {
    playNote22();
    noteDL.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "n") {
    note22.pause();
    note22.currentTime = 0;
    noteDL.classList.remove("whiteHover");
  }
});
noteEL.addEventListener("click", function () {
  playNote24();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "m") {
    playNote24();
    noteEL.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "m") {
    note24.pause();
    note24.currentTime = 0;
    noteEL.classList.remove("whiteHover");
  }
});

blackNoteFR.addEventListener("click", function () {
  playNote02();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "q") {
    playNote02();
    blackNoteFR.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "q") {
    note02.pause();
    note02.currentTime = 0;
    blackNoteFR.classList.remove("blackHover");
  }
});
blackNoteGR.addEventListener("click", function () {
  playNote04();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "w") {
    playNote04();
    blackNoteGR.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "w") {
    note04.pause();
    note04.currentTime = 0;
    blackNoteGR.classList.remove("blackHover");
  }
});
blackNoteAR.addEventListener("click", function () {
  playNote06();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "e") {
    playNote06();
    blackNoteAR.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "e") {
    note06.pause();
    note06.currentTime = 0;
    blackNoteAR.classList.remove("blackHover");
  }
});
blackNoteCR.addEventListener("click", function () {
  playNote09();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "r") {
    playNote09();
    blackNoteCR.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "r") {
    note09.pause();
    note09.currentTime = 0;
    blackNoteCR.classList.remove("blackHover");
  }
});
blackNoteDR.addEventListener("click", function () {
  playNote11();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "t") {
    playNote11();
    blackNoteDR.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "t") {
    note11.pause();
    note11.currentTime = 0;
    blackNoteDR.classList.remove("blackHover");
  }
});
blackNoteFL.addEventListener("click", function () {
  playNote14();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "y") {
    playNote14();
    blackNoteFL.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "y") {
    note14.pause();
    note14.currentTime = 0;
    blackNoteFL.classList.remove("blackHover");
  }
});
blackNoteGL.addEventListener("click", function () {
  playNote16();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "u") {
    playNote16();
    blackNoteGL.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "u") {
    note16.pause();
    note16.currentTime = 0;
    blackNoteGL.classList.remove("blackHover");
  }
});
blackNoteAL.addEventListener("click", function () {
  playNote18();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "i") {
    playNote18();
    blackNoteAL.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "i") {
    note18.pause();
    note18.currentTime = 0;
    blackNoteAL.classList.remove("blackHover");
  }
});
blackNoteCL.addEventListener("click", function () {
  playNote21();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "o") {
    playNote21();
    blackNoteCL.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "o") {
    note21.pause();
    note21.currentTime = 0;
    blackNoteCL.classList.remove("blackHover");
  }
});
blackNoteDL.addEventListener("click", function () {
  playNote23();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "p") {
    playNote23();
    blackNoteDL.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "p") {
    note23.pause();
    note23.currentTime = 0;
    blackNoteDL.classList.remove("blackHover");
  }
});

startGame();
