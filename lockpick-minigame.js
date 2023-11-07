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

startBtn.addEventListener("click", function () {
  startGameContainer.style.display = "none";
  gameInfo.style.display = "none";
  gameDescription.style.display = "none";
  startBtn.style.display = "none";

  count = 10;
  const countDownTimer = setInterval(function () {
    count--;
    countDownNumber.innerText = count;
    if (count === 0) {
      clearInterval(countDownTimer);
    }
  }, 1000);

  document.addEventListener("mousemove", function (e) {
    const threshold = 10;
    const lockPosistion = lockContainer.getBoundingClientRect();
    const deg = mouseAngle(
      lockPosistion.left + lockPosistion.width / 2,
      lockPosistion.top + lockPosistion.height / 2,
      e.pageX,
      e.pageY
    );
    lockPickArm.style.transform = `rotate(${deg + 90}deg)`;
  });
});

function mouseAngle(cx, cy, ex, ey) {
  return ((Math.atan2(ey - cy, ex - cx) * 180) / Math.PI + 360) % 360;
}

function gameTimerCountDown() {
  setTimeout(function () {
    startGameContainer.style.display = "block";
    gameInfo.style.display = "block";
    failText.style.display = "block";
    backBtn.style.display = "block";
    lockContainer.style.display = "none";
    lockPickArm.style.display = "none";
    pin.style.display = "none";
  }, 10000);
}
