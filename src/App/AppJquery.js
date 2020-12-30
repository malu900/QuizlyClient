import $ from "jquery";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getGMapRandomColor() {
  return "hsla(" + Math.floor(Math.random() * 360) + ", 100%, 70%, 1)";
}
var arr = ["#f00", "#0f0", "#00f"];
function changeColor() {
  $(".animate-bg").css({
    backgroundColor: getGMapRandomColor(),
    transition: "all 5s",
  });
}
changeColor();
setInterval(changeColor, 5000);
