import $ from "jquery";

// var colours = ["blue", "orange", "pink"];
// var counter = 0;
// function cycleBackground() {
//   console.log("test");
//   $(".animate-bg").animate({ backgroundColor: colours[counter] }, 500);
//   counter++;
//   if (counter == colours.length) {
//     counter = 0;
//   }
// }
// cycleBackground();
// $(".animate-bg").css("backgroundColor:", "pink");
var arr = ["#f00", "#0f0", "#00f"];
function changeColor() {
  $(".animate-bg").css({
    "background-color":
      "rgba(" +
      Math.floor(Math.random() * 255) +
      1 +
      "," +
      Math.floor(Math.random() * 255) +
      1 +
      "," +
      Math.floor(Math.random() * 255) +
      1 +
      ", 0.7)",
    transition: "all 8s",
  });
}
changeColor();
setInterval(changeColor, 5000);
// setInterval(cycleBackground, 10000);

// // $('.rounded-circle').c() {

// // }
// $(function () {
//   function unifyHeights() {
//     var maxHeight = 0;
//     $("#content-container")
//       .children("#center-content")
//       .each(function () {
//         var height = $(this).outerHeight();
//         // alert(height);
//         if (height > maxHeight) {
//           maxHeight = height;
//         }
//       });
//     $("#navigation, #content").css("height", maxHeight);
//   }
//   unifyHeights();
// });
// function expandToWindow(element) {
//   var margin = 10;

//   if (element.style.height < window.innerHeight) {
//     element.style.height = window.innerHeight - 2 * margin;
//   }
// }
