$(document).ready(function () {
  $('.bannerContainer').slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
$('.openMenu a').on('click', function (e) {
  e.preventDefault();
  $('.mobileMenu').addClass('open');
  $('body').css('overflow', 'hidden');
});

$('.closeMenu').on('click', function (e) {
  e.preventDefault();
  $('.mobileMenu').removeClass('open');
  $('body').css('overflow', '');
});