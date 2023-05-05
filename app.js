const homeScore = document.querySelector(".home_score");
const guestScore = document.querySelector(".guest_score");
let countHome = 0;
let countGuest = 0;

function winner() {
  if (countHome > countGuest) {
    homeScore.style.backgroundColor = "#38b000";
    guestScore.style.backgroundColor = "#080001";
  } else if (countHome < countGuest) {
    guestScore.style.backgroundColor = "#38b000";
    homeScore.style.backgroundColor = "#080001";
  } else {
    homeScore.style.backgroundColor = "#38b000";
    guestScore.style.backgroundColor = "#38b000";
  }
}

function addScore(team, score) {
  if (team === homeScore) {
    countHome = countHome + score;
    homeScore.textContent = countHome;
    winner();
  } else if (team === guestScore) {
    countGuest = countGuest + score;
    guestScore.textContent = countGuest;
    winner();
  }
}
