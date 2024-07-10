// $(".toggle").click(function(){

//   $("header").toggleClass("menuToggle");

// });

// $(".toggle").click(function() {
//     $(".main-header").addClass("menuToggle");
// });
// $(".close").click(function() {
//     $(".main-header").removeClass("menuToggle");
// });

$(".toggle").click(function(){
  $(".main-header").toggleClass("menuToggle");
});



$(window).scroll(function(){
    if ($(window).scrollTop() >= 30) {
        $('body').addClass('fixed-header');
        $('body').addClass('visible-title');
    }
    else {
        $('body').removeClass('fixed-header');
        $('body').removeClass('visible-title');
    }
});





// $('.contless-button').click(function() {
//   $('.moretextt').slideToggle();
//   if ($('.contless-button').text() == "En savoir plus") {
//     $(this).text("lire moins")
//   } else {
//     $(this).text("En savoir plus")
//   }
// });

$('.contless-button').click(function() {
  $(this).prev('.moretextt').slideToggle();
  if ($('.contless-button').text() == "En savoir plus") {
    $(this).text("lire moins")
  } else {
    $(this).text("En savoir plus")
  }
});

// $('.contless-button').click(function() {
//   $(this).next('.moretextt').slideToggle();
//   if ($(this).text() === "En savoir plus") {
//     $(this).text("lire moins");
//   } else {
//     $(this).text("En savoir plus");
//   }
// });
// $('.contless-button').click(function() {
//   $(this).next('.moretextt').slideToggle();
//   if ($(this).text() === "En savoir plus") {
//     $(this).text("lire moins");
//   } else {
//     $(this).text("En savoir plus");
//   }
// });

$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "En savoir plus") {
    $(this).text("lire moins")
  } else {
    $(this).text("En savoir plus")
  }
});
AOS.init({
    duration: 1200,
  })