$(window).scroll(function () {
  $('#title').css('transform', 'translateY(' + $(window).scrollTop() + 'px)');

  if ($(window).scrollTop() <= 40) {
    $('#bg').css('clipPath', 'circle(50% at 50% 150%)');
  } else {
    $('#bg').css('clipPath', 'circle(' + ($(this).scrollTop() / 2 + 10) + '% at 50% 150%)');
  }

  if ($(window).scrollTop() >= 240) {
    $('#bg').css('clipPath', 'circle(130% at 50% ' + (150 - $(this).scrollTop() / 2) + '%)');
    $('#bg h2:nth-child(1)').css('transform', 'translateX(' + (1500 - $(this).scrollTop() * 3) + 'px)');
    $('#bg h2:nth-child(2)').css('transform', 'translateX(' + (-1500 + $(this).scrollTop() * 3) + 'px)');
  } else {
    $('#bg h2:nth-child(1)').css('transform', 'translateX(1500px)');
    $('#bg h2:nth-child(2)').css('transform', 'translateX(-1500px)');
  }

  if ($(window).scrollTop() >= 320) {
    $('#title').css('transform', 'translateY(320px)  rotate3d(1, 1, 1, ' + $(window).scrollTop() + 'deg)');
  }

  if ($(window).scrollTop() > 400) {
    $('#bg').css('clipPath', 'circle(100% at 50% ' + (150 - $(this).scrollTop() / 2) + '%)');
  }

  if ($(window).scrollTop() > 440) {
    $('#bg').css('clipPath', 'circle(50% at 50% ' + (150 - $(this).scrollTop() / 2) + '%)');
    $('#title').css('transform', 'translateY(320px) rotate3d(1, 1, 1, 720deg)');
  }

  if ($(window).scrollTop() > 120 && $(window).scrollTop() < 480) {
    $('#title').css('color', '#f9f9f9');
  } else {
    $('#title').css('color', '#101010');
  }

  if ($(window).scrollTop() >= 560) {
    $('#content , .the-feature').css('display', 'grid');
  } else {
    $('#content').css('display', 'none');
  }

  if ($(window).scrollTop() >= 600) {
    $('#intro').css('display', 'none');
    $('.the-feature:first img , .the-feature:first h2').css('transform', 'translateY(-105vh)');
  } else {
    $('#intro').css('display', 'block');
    $('.the-feature:first img , .the-feature:first h2').css('transform', 'translateY(200vh)');
  }

  if ($(window).scrollTop() >= 640) {
    $('.the-feature:nth-child(1) img, .the-feature:nth-child(1) h2').css('transform', 'translateY(-200vh)');
    $('.the-feature:nth-child(2) img, .the-feature:nth-child(2) h2').css('transform', 'translateY(-100vh)');
  } else {
    $('.the-feature:nth-child(2) img, .the-feature:nth-child(2) h2').css('transform', 'translateY(200vh)');
  }
  if ($(window).scrollTop() >= 680) {
    $('.the-feature:nth-child(2) img, .the-feature:nth-child(2) h2').css('transform', 'translateY(-200vh)');
    $('.the-feature:nth-child(3) img, .the-feature:nth-child(3) h2').css('transform', 'translateY(-100vh)');
  } else {
    $('.the-feature:nth-child(3) img, .the-feature:nth-child(3) h2').css('transform', 'translateY(200vh)');
  }

  console.log($(window).scrollTop());
});

setInterval(function () {
  var iFirst = Math.round(Math.random() * 11);
  var iSecond = Math.round(Math.random() * 11);
  var iThird = Math.round(Math.random() * 11);

  if ($('.the-feature:nth-child(1) h2 span').eq(iFirst).css('animation') == '0.7s ease-out 0s 1 normal none running skew') {
    $('.the-feature:nth-child(1) h2 span').eq(iFirst).css('animation', '');
  } else {
    $('.the-feature:nth-child(1) h2 span').eq(iFirst).css('animation', 'skew 0.7s ease-out');
  }

  if ($('.the-feature:nth-child(2) h2 span').eq(iSecond).css('animation') == '0.7s ease-out 0s 1 normal none running skew') {
    $('.the-feature:nth-child(2) h2 span').eq(iSecond).css('animation', '');
  } else {
    $('.the-feature:nth-child(2) h2 span').eq(iSecond).css('animation', 'skew 0.7s ease-out');
  }

  if ($('.the-feature:nth-child(3) h2 span').eq(iThird).css('animation') == '0.7s ease-out 0s 1 normal none running skew') {
    $('.the-feature:nth-child(3) h2 span').eq(iThird).css('animation', '');
  } else {
    $('.the-feature:nth-child(3) h2 span').eq(iThird).css('animation', 'skew 0.7s ease-out');
  }
}, 1000);
