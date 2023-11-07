const startGameContainer = document.getElementById("startGameContainer");
const gameInfo = document.getElementById("gameInfo");
const gameDescription = document.getElementById("gameDescription");
const failText = document.getElementById("failText");
const succesText = document.getElementById("succesText");
const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const countDownNumber = document.getElementById("countDownNumber");
const lockContainer = document.getElementById("lockContainer");
const lockPickArm = document.getElementById("lockPickArm");
const outerCircle = document.getElementById("outerCircle");
//psudo???
const dot = document.getElementById("dot");
//psudo
const innerCircle = document.getElementById("innerCircle");
const pinContainer = document.getElementById("pinContainer");
let pin = document.getElementById("pin.current");
let unlockTimer = null;
let setUnlockTimer = false;

failText.style.display = "none";
succesText.style.display = "none";
backBtn.style.display = "none";
