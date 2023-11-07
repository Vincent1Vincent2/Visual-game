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
const outerCircle = document.querySelector(".outerCircle");
const dot = document.querySelector(".dot");
const innerCircle = document.getElementById("innerCircle");
const pinContainer = document.getElementById("pinContainer");
let pin = document.querySelector(".pin.current");
let unlockTimer = null;
let setUnlockTimer = false;

failText.style.display = "none";
succesText.style.display = "none";
backBtn.style.display = "none";
dot.style.display = "none";

startBtn.addEventListener("click", function () {
  startGameContainer.style.display = "none";
  gameInfo.style.display = "none";
  gameDescription.style.display = "none";
  startBtn.style.display = "none";

  count = 15;
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
  }, 15000);
}
