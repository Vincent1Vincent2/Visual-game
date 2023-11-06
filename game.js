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
const pianoSong = document.getElementById("pianoSong");

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

//This is my fade in animation for the objects in the room
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
  useLockPick.style.top = "58%";
  useLockPick.style.left = "-375%";
  useLockPick.style.transform =
    "rotate(-30deg) scaleX(-1) rotate3d(0, 1, 0, 45deg)";
  useLockPick.style.scale = 0.4;
  useLockPick.style.transition = "all 2s";
  useLockPickBlue.style.visibility = "hidden";
  useLockPickRed.style.visibility = "hidden";
  useLockPickGreen.style.visibility = "hidden";
  changeBlueLockedStatus();
  hideLockPick();
});

useLockPickRed.addEventListener("click", function () {
  useLockPick.style.top = "58%";
  useLockPick.style.left = "-275%";
  useLockPick.style.transform =
    "rotate(-30deg) scaleX(-1) rotate3d(0, 1, 0, 45deg)";
  useLockPick.style.scale = 0.4;
  useLockPick.style.transition = "all 2s";
  useLockPickBlue.style.visibility = "hidden";
  useLockPickRed.style.visibility = "hidden";
  useLockPickGreen.style.visibility = "hidden";
  changeRedLockedStatus();
  hideLockPick();
});

useLockPickGreen.addEventListener("click", function () {
  useLockPick.style.top = "58%";
  useLockPick.style.left = "-75%";
  useLockPick.style.transform =
    "rotate(-30deg) scaleX(-1) rotate3d(0, 1, 0, 45deg)";
  useLockPick.style.scale = 0.4;
  useLockPick.style.transition = "all 2s";
  useLockPickBlue.style.visibility = "hidden";
  useLockPickRed.style.visibility = "hidden";
  useLockPickGreen.style.visibility = "hidden";
  changeGreenLockedStatus();
  hideLockPick();
});

function hideLockPick() {
  setTimeout(function () {
    useLockPick.style.visibility = "hidden";
    useLockPick.style.opacity = 0;
    useLockPick.style.transition = "opacity .8s";
  }, 2000);
}

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
  updateText(4);
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
  updateText(5);
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
  /*   openBlueDoor.style.visibility = "hidden";
  openBlueDoor.style.opacity = 0;
  openBlueDoor.style.transition = "opacity .9s";
  blueDoorBg.style.visibility = "hidden";
  blueDoorBg.style.opacity = 0;
  blueDoorBg.style.transition = "opacity .9s"; */
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
  brownRoomBackBDsUsed.style.visibility = "hidden";
  redRoomBack.style.visibility = "visible";
});

noteSheet.addEventListener("click", function () {
  noteSheet.style.top = "65%";
  noteSheet.style.left = "30%";
  noteSheet.style.scale = 1;
  noteSheet.style.transform = "rotate3d(1, 1, 1, 2deg)";
  noteSheet.style.transition = "all 2s";
  brownRoomBackBDsUsed.style.visibility = "hidden";
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
  useNoteSheet.style.transition = "all 2s";
});

function hideNoteSheet() {}

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
  useNoteSheet.style.transition = "opacity 1s";
  redRoomBack.style.visibility = "hidden";
});

playPiano.addEventListener("click", function () {
  pianoSong.play();
  brownRoomBackAllUsed.style.visibility = "visible";
});

brownRoomBack.addEventListener("click", function () {
  playPiano.style.visibility = "hidden";
  playPiano.style.opacity = 0;
  playPiano.style.transition = "opacity .8s";
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
  pianoSong.stop();
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
