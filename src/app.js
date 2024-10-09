/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const excusegenerator = () =>
    [
      "the point guard",
      "the center",
      "the coach",
      "the star player",
      "the rookie"
    ][Math.floor(Math.random() * 5)] +
    " " +
    [
      "missed an open layup",
      "missed a three",
      "made a bad pass",
      "forgot the play",
      "went to poop"
    ][Math.floor(Math.random() * 5)] +
    " " +
    [
      "at the buzzer",
      "in the final quarter",
      "during overtime",
      "under the basket",
      "on defense"
    ][Math.floor(Math.random() * 5)];

  function reloadExcuse() {
    document.getElementById("excusegenerator").innerHTML = excusegenerator();
  }

  reloadExcuse();

  document.getElementById("reloadButton").onclick = reloadExcuse;
};
