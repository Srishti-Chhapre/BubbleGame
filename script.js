var timer = 60;
var score = 0;
var  rnNumber;
function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 207; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`
    }
  }, 1000);
}

function hitBubble() {
  rnNumber = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = rnNumber;
}

function increaseScore() {
  score += 10;
  document.querySelector("#inScore").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum==rnNumber){
        increaseScore();
        makeBubble();
        hitBubble();
    }
})


runTimer();
makeBubble();
hitBubble();

