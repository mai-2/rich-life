$('.js-menu').on('touchend', function (e) {
  e.preventDefault();
  if (
    $(this)
      .parent()
      .siblings()
      .children('.js-menu')
      .hasClass('.is-open')
  ) {
    $('.js-menu').toggleClass('is-open');
    $('.js-menu').next().stop().fadeToggle(300);
  } else {
    $(this).toggleClass('is-open');
    $(this).next().stop().slideToggle('is-open');
    $('.js-overlay').toggleClass('is-open');
  }
});

$(document).on('touchend', (function (e) {
  if (!$(e.target).closest('.js-dropdown').length) {
    $('.js-menu').removeClass('is-open');
    $('.js-menu').next().stop().slideUp(300);
    $('.js-overlay').toggleClass('is-open');
  }
}));

$('.js-dropdown').on('mouseover', function(e) {
  e.preventDefault();
  $(this).children('.js-menu').addClass('is-open');
  $(this).children('.js-content').stop().fadeIn(300);
  $('.js-overlay').addClass('is-open');
});

$('.js-dropdown').on('mouseleave', function (e) {
  e.preventDefault();
  $(this).children('.js-menu').removeClass('is-open');
  $(this).children('.js-content').stop().fadeOut(300);
  $('.js-overlay').removeClass('is-open');
});

$('.p-faq-box__head').on('click', function () {
  $(this).next().slideToggle();
  $(this).toggleClass('is-open');
});
