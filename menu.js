$(document).ready(function(){
    $("#all-catg").click(function(){
     //todo try using list.
     $(".lunch-item").slideDown();
      $(".breakfast-item").slideDown();
      $(".dinner-item").slideDown();
    });
  
    $("#breakfast-catg").click(function(){
      $(".breakfast-item").animate({
        height:'show'
      });
  
      $(".lunch-item").hide();
      $(".dinner-item").hide();
    });
  
    $("#lunch-catg").click(function(){
      $(".lunch-item").slideDown();
      $(".breakfast-item").hide();
      $(".dinner-item").hide();
  
  
    });
  
    $("#dinner-catg").click(function(){
     $(".breakfast-item").hide();
     $(".lunch-item").hide();
     $(".dinner-item").slideDown();
    });
  
    $("#aloo-paratha").hover( function(){
      $("#a").slideToggle();
    });
  
    $("#chai").hover( function(){
      $("#b").slideToggle();
    });
  
    $("#chole-bhature").hover( function(){
      $("#c").slideToggle();
    });
  
    $("#lassi").hover( function(){
      $("#d").slideToggle();
    });
  
    $("#kadai-paneer").hover( function(){
      $("#kp").slideToggle();
    });
  
    $("#dal-makhni").hover( function(){
      $("#f").slideToggle();
    });
  
    $("#lachha-paratha").hover( function(){
      $("#g").slideToggle();
    });
  
    $("#rice").hover( function(){
      $("#h").slideToggle();
    });
  
  });