$('document').ready(function(){
  $(".button").hover(
    function(){
      $(this).css({"border" : "solid 4px #B2EBF2", "background" : "#B2EBF2"});
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

});
