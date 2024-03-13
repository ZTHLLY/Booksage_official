import $ from "./jquery.js";

$(function() {
  "use strict"; // Start of use strict
  
  // 获取轮播元素和轮播项
  var carousel = $(".carousel-navigation");
  var slides = carousel.find("ul li");

  // 设置默认显示的轮播项
  var defaultSlideIndex = 0; // 你可以更改这个索引值
  slides.removeClass("default-slide"); // 移除之前的默认项
  slides.eq(defaultSlideIndex).addClass("default-slide"); // 设置新的默认项

  $(".numbers-row").append('<div class="inc button">+</div><div class="dec button">-</div>');

  $(".button").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }

    $button.parent().find("input").val(newVal);
  });
});
