const timeContainer = document.getElementById("timerContainer");
// const hours=document.getElementById("hour");
// const minute=document.getElementById("minute");
// const second=document.getElementById
const startTimer = document.getElementById("set");

var hours = 0;
var minutes = 0;
var seconds = 0;
var interval = null;

document.getElementById("hour").addEventListener("change", (e) => {
  hours = +e.target.value;
});

document.getElementById("minute").addEventListener("change", (e) => {
  minutes = +e.target.value;
});

document.getElementById("second").addEventListener("change", (e) => {
  seconds = +e.target.value;
});
// timeContainer.addEventListener("click", onClickAddTimer);

// function onClickAddTimer(){
//     let div=document.createElement("div");

startTimer.addEventListener("click", () => {
  let timer = document.createElement("div");
  var timeInSeconds = hours * 60 * 60 + minutes * 60 + seconds;
  timer.classList = " currentTime";
  timer.innerHTML = `<span class="timeHeading" style="margin-right: 1rem;"> Time Left: </span>`;

  let liveTime = document.createElement("span");
  liveTime.classList = "liveTime";
  timer.appendChild(liveTime);

  const del = document.createElement("button");
  del.innerText = "delete";
  del.setAttribute("id", "delete");
  del.addEventListener("click", () => {
    timer.remove();
  });
  timer.appendChild(del);

  timeContainer.appendChild(timer);
  var displayTime = () => {
    var displayHours = Math.floor(timeInSeconds / (60 * 60));
    var remainder = timeInSeconds - displayHours * 60 * 60;
    var displayMinutes = Math.floor(remainder / 60);
    var displaySeconds = remainder - displayMinutes * 60;

    liveTime.innerHTML =
      ("0" + displayHours).substr(-2) +
      ":" +
      ("0" + displayMinutes).substr(-2) +
      ":" +
      ("0" + displaySeconds).substr(-2);
  };
  interval = setInterval(() => {
    displayTime();
    timeInSeconds -= 1;
    if (timeInSeconds < 0) {
      del.innerText = "stop";
      document.querySelector(".timeHeading").classList.add("hide");
      liveTime.classList.add("hide");
      let text=document.createElement("span");
      text.innerText="Time Is Up !";
      timer.insertBefore(text, del);
      text.style.color="#34344A";
      text.style.fontSize="25px"
      timer.style.backgroundColor = "#F0F757";
      del.style.backgroundColor = "#34344A";
      del.style.color = "#ffffff";
      clearInterval(interval);
    }
  }, 1000);
});
