import $ from "jquery";

// $('.rounded-circle').c() {

// }
$(function () {
  function unifyHeights() {
    var maxHeight = 0;
    $("#content-container")
      .children("#center-content")
      .each(function () {
        var height = $(this).outerHeight();
        // alert(height);
        if (height > maxHeight) {
          maxHeight = height;
        }
      });
    $("#navigation, #content").css("height", maxHeight);
  }
  unifyHeights();
});
function expandToWindow(element) {
  var margin = 10;

  if (element.style.height < window.innerHeight) {
    element.style.height = window.innerHeight - 2 * margin;
  }
}
