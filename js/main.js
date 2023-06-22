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

var popUp = document.getElementById('header__popUp')
var container = document.getElementsByClassName('container')

function openPopUp() {
  popUp.classList.add("open__popUp")
  for(let i = 0; i < container.length; i++ ){
    container[i].classList.add('containerBlur')}
}

function closePopUp() {
  popUp.classList.remove("open__popUp")
  for(let i = 0; i < container.length; i++ ){
    container[i].classList.remove('containerBlur')}
}