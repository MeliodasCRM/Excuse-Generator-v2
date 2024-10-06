/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function excusegenerator() {
    const who = [
      "the point guard",
      "the center",
      "the coach",
      "the star player",
      "the rookie"
    ];
    const action = [
      "missed an open layup",
      "missed a three",
      "made a bad pass",
      "forgot the play",
      "went to poop"
    ];
    const where = [
      "at the buzzer",
      "in the final quarter",
      "during overtime",
      "under the basket",
      "on defense"
    ];

    const randomwho = who[Math.floor(Math.random() * who.length)];
    const randomaction = action[Math.floor(Math.random() * action.length)];
    const randomwhere = where[Math.floor(Math.random() * where.length)];

    return `We lost the game because ${randomwho} ${randomaction} ${randomwhere}.`;
  }

  function reloadExcuse() {
    document.getElementById("excusegenerator").innerHTML = excusegenerator();
  }

  reloadExcuse();

  document.getElementById("reloadButton").onclick = reloadExcuse;
};
