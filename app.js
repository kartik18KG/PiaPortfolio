// NAVBAR ACTIVE LINKS
$("nav li a ").click(function() {
  console.log("clicked");
  $("nav li a.active").removeClass("active");
  $(this).addClass("active");
});

const windowHeight = window.innerHeight;
$(window).on("scroll", function(e) {
  const scroll = window.scrollY;
  // console.log(window)
  if (scroll >= windowHeight && scroll < windowHeight * 2) {
    $('nav li a[href="#home"]').removeClass("active");
    $('nav li a[href="#projects"]').removeClass("active");
    $('nav li a[href="#contact"]').removeClass("active");
    $('nav li a[href="#about"]').addClass("active");
  }
  if (scroll >= windowHeight * 2 && scroll < windowHeight * 3) {
    $('nav li a[href="#home"]').removeClass("active");
    $('nav li a[href="#contact"]').removeClass("active");
    $('nav li a[href="#about"]').removeClass("active");
    $('nav li a[href="#projects"]').addClass("active");
  }
  if (scroll >= windowHeight * 3 && scroll < windowHeight * 5) {
    $('nav li a[href="#home"]').removeClass("active");
    $('nav li a[href="#projects"]').removeClass("active");
    $('nav li a[href="#about"]').removeClass("active");
    $('nav li a[href="#contact"]').addClass("active");
  }
});

//ON SCROLL ANIMATIONS
const $animation_elements = $(".animation-element");
const $window = $(window);

$window.on("scroll resize", check_if_in_view);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.addClass("in-view");
    } else {
      $element.removeClass("in-view");
    }
  });
}
