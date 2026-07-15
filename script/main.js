$(document).ready(function () {
  // fullpage toggle
  $("#fullpage").fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    scrollOverflow: true, // 이 옵션을 추가하여 스크롤 가능하게 함
  });

  $(".projects-slider").slick({
    dots: true,
    infinite: true, // 무한 루프 기능 활성화
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
  });
});
