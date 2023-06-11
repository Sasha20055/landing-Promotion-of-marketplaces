$(function () {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $('.content'),
  })
})

$(function () {
  $('.confidence__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true
  })
})