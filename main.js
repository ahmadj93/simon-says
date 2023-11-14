let level = 0;
let simonarray = [];
let userarray = [];
let tap = 0;

let boxes = document.getElementById("boxes");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let heading = document.getElementById("level-info");
let startButton = document.getElementById("start");
let infomessage = document.getElementById("explanation");

const red = new Audio();
red.src = "audio/red.mp3";
boxes.addEventListener("click", (event) => {
                        const nb = event.target.getAttribute("nb");
                        const sound = document.querySelector(`[data-sound='${nb}']`);
                        sound.play();
                        taps-=1;
                        infomessage.textContent = `Remaining tap = ${taps}`;

                        if (nb) handleClick(nb);
                      });

startButton.addEventListener("click", startgame);



function startgame() {
  infomessage.textContent = "computer turn ,rakkez";
  startButton.classList.add("hidden");
  nextRound();
}
function nextRound() {
  if(level==50)
  {
    resetGame("you WIN the game")
    return;
  }
  userarray = [];
  level += 1;
  taps=level;
  boxes.classList.add("disable");
  heading.textContent = "level " + level;
  simonarray.push(getRandomInt(4));
  infomessage.textContent = "computer turn , rakkez!";
  playRound(simonarray);
  setTimeout(() => {
    humanTurn(level);
  }, level * 600 + 1000);
}

function humanTurn(level) {
  infomessage.textContent = `your turn is now! Remaining tap = ${taps}`;
  boxes.classList.remove("disable");
}

function handleClick(nb) {
  const index = userarray.push(nb) - 1;
  if (nb != simonarray[index]) {
    resetGame("Oops! Game over, you pressed the wrong tile");
    return;
  } else if (nb == simonarray[index] && userarray.length == simonarray.length) {
    userarray = [];
    setTimeout(() => {
      nextRound();
    }, 1000);
    return;
  }
}
function resetGame(text) {
  alert(text);
  simonarray = [];
  userarray = [];
  level = 0;
  startButton.classList.remove("hidden");
  boxes.classList.add("disable");
}

function activecolor(i) {
  let color = document.getElementById("box" + i);
  const sound = document.querySelector(`[data-sound='${i}']`);
  color.classList.add("grey");
  sound.play();
  setTimeout(() => {
    color.classList.remove("grey");
  }, 500);
}

function playRound(arr) {
  arr.forEach((element, index) => {
    setTimeout(() => {
      activecolor(element);
    }, (index + 1) * 600);
  });
}

function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * max);
}
