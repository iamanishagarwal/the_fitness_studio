$('document').ready(function(){

  $('ul li a').click(function(){
    $('ul li a').removeClass("active");
    $(this).addClass("active");
  });

  $(".button").hover(
    function(){
      $(this).css({"border" : "solid 4px rgba(103, 241, 200, 1)", "background" : "rgba(103, 241, 200, 1)"});
    },
    function(){
      $(this).css({"border" : "solid 4px black", "background" : "transparent"});
    }
  );

  $('.img1').hover(
    function(){
      $(this).css('background-image' , 'url("img/girl4.jpeg")');
    },
    function(){
      $(this).css('background-image' , 'url("img/girl1.jpeg")');
  });

  $('.img2').hover(
    function(){
      $(this).css('background-image' , 'url("img/girl3.jpeg")');
    },
    function(){
      $(this).css('background-image' , 'url("img/girl2.jpeg")');
  });

      $('.background_light .header_dark_1').animate({
        top : 0,
        opacity : 0.95
      },3000
      );

});
