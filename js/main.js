// let carts=document.querySelectorAll('.addtocart');

// for(i=0;i<=carts.length;i++){
//     carts[i].addEventListener("click",function(){
//         cartNumber();
//     });

// }
// function onLoad(){
//     let productNumbers=localStorage.getItem('cartNumber');
//     if(productNumbers){
  
//   document.querySelector('.login a i span').textContent=productNumbers;
//   document.querySelector('.login-second a i span').textContent=productNumbers;

// }


// }
// function cartNumber(){
//     document.querySelector('.login a i span').style.display = "block";
//     document.querySelector('.login-second a i span').style.display = "block";
//     let productNumbers=localStorage.getItem('cartNumber');
//     productNumbers=parseInt(productNumbers);
//     if(productNumbers){
//         localStorage.setItem('cartNumber',productNumbers+1);
//   document.querySelector('.login a i span').textContent=productNumbers+1;
//   document.querySelector('.login-second a i span').textContent=productNumbers+1;
//     }
//     else{
//         localStorage.setItem('cartNumber',1);
//         document.querySelector('.login a i span').textContent=1;
//         document.querySelector('.login-second a i span').textContent=1;
//     }
// }

// onLoad();


$(document).ready(function($){

    // button for going top------------------------------------
    $('.topbutton').hide();
//Check to see if the window is top if not then display button
$(window).scroll(function(){
  if ($(this).scrollTop() > 150) {
      $('.topbutton').show('slow').fadeIn();
  } else {
      $('.topbutton').fadeOut().hide('slow');
  }
});
//Click event to scroll to top
$('.topbutton').click(function(){
  $('html, body').animate({scrollTop : 0},0);
  return false;
});

// main slider------------------------------------------------
$('.slider').slick({
    autoplay:true,
    prevArrow: '<i class="fa fa-angle-left prev1"></i>',
    nextArrow: '<i class="fa fa-angle-right next1"></i>',
infinite: true,
speed: 500,
slidesToShow: 4,
// arrows:false,
slidesToScroll: 4,
dots:true,

responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      
      infinite: true,
     
    }
  },
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      
      dots:true
     
    }
  },
  {
    breakpoint: 620,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      dots:true
     
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


// car care product slider and on small screen------------------------------------
$('.slidertwo').slick({
     
    infinite: true,
    prevArrow: '<i class="fa fa-angle-left prev1"></i>',
        nextArrow: '<i class="fa fa-angle-right next1"></i>',
    speed: 300,
    slidesToShow: 1,
    // arrows:false,
    slidesToScroll: 1,
    // dots:true,
  });


   // Hide displayed product---------------------------------------------
   $(".hide-btn").click(function(){
    $(".product-row-two").hide("slow");
      $(".hide-btn").hide(1000);
      $(".show-btn").show(1000);
     
      // $("p.fast").hide(1000);
      // $("p.slow").hide(2000);
      // $("p.very-fast").hide(3000);
      // $("p.very-slow").hide(4000);
  });
    // Hide2 displayed product 
    $(".hide-btn2").click(function(){
    $(".product-row-two2").hide("slow");
      $(".product-row-three2").hide("slow");
      $(".hide-btn2").hide(1000);
      $(".show-btn2").show(1000);
     
      // $("p.fast").hide(1000);
      // $("p.slow").hide(2000);
      // $("p.very-fast").hide(3000);
      // $("p.very-slow").hide(4000);
  });
    // Hide3 displayed product 
    $(".hide-btn3").click(function(){
    $(".product-row-two3").hide("slow");
      $(".product-row-three3").hide("slow");
      $(".hide-btn3").hide(1000);
      $(".show-btn3").show(1000);
     
      // $("p.fast").hide(1000);
      // $("p.slow").hide(2000);
      // $("p.very-fast").hide(3000);
      // $("p.very-slow").hide(4000);
  });
    // Hide4 displayed product 
    $(".hide-btn4").click(function(){
    $(".product-row-two4").hide("slow");
      $(".product-row-three4").hide("slow");
      $(".hide-btn4").hide(1000);
      $(".show-btn4").show(1000);
     
      // $("p.fast").hide(1000);
      // $("p.slow").hide(2000);
      // $("p.very-fast").hide(3000);
      // $("p.very-slow").hide(4000);
  });
    // Hide5 displayed product 
  $(".hide-btn5").click(function(){
    $(".product-row-two5").hide("slow");
      $(".product-row-three5").hide("slow");
      $(".hide-btn5").hide(1000);
      $(".show-btn5").show(1000);
     
      // $("p.fast").hide(1000);
      // $("p.slow").hide(2000);
      // $("p.very-fast").hide(3000);
      // $("p.very-slow").hide(4000);
  });
     // Hide6 displayed product 
     $(".hide-btn6").click(function(){
    $(".product-row-two6").hide("slow");
      $(".product-row-three6").hide("slow");
      $(".hide-btn6").hide(1000);
      $(".show-btn6").show(1000);
     
      // $("p.fast").hide(1000);
      // $("p.slow").hide(2000);
      // $("p.very-fast").hide(3000);
      // $("p.very-slow").hide(4000);
  });
  
  // Show hidden product
  
  $(".show-btn").click(function(){
      $(".product-row-two").show("slow");
     
      $(".hide-btn").show(1000);
      $(".show-btn").hide(1000);
      

      // $("p.fast").show("fast");
      // $("p.slow").show("slow");
      // $("p.very-fast").show(1000);
      // $("p.very-slow").show(2000);
  });
  $(".show-btn2").click(function(){
      $(".product-row-two2").show("slow");
      $(".product-row-three2").show("slow");
      $(".hide-btn2").show(1000);
      $(".show-btn2").hide(1000);
      

      // $("p.fast").show("fast");
      // $("p.slow").show("slow");
      // $("p.very-fast").show(1000);
      // $("p.very-slow").show(2000);
  });
  $(".show-btn3").click(function(){
      $(".product-row-two3").show("slow");
      $(".product-row-three3").show("slow");
      $(".hide-btn3").show(1000);
      $(".show-btn3").hide(1000);
      

      // $("p.fast").show("fast");
      // $("p.slow").show("slow");
      // $("p.very-fast").show(1000);
      // $("p.very-slow").show(2000);
  });
  $(".show-btn4").click(function(){
      $(".product-row-two4").show("slow");
      $(".product-row-three4").show("slow");
      $(".hide-btn4").show(1000);
      $(".show-btn4").hide(1000);
      

      // $("p.fast").show("fast");
      // $("p.slow").show("slow");
      // $("p.very-fast").show(1000);
      // $("p.very-slow").show(2000);
  });
  $(".show-btn5").click(function(){
      $(".product-row-two5").show("slow");
      $(".product-row-three5").show("slow");
      $(".hide-btn5").show(1000);
      $(".show-btn5").hide(1000);
      

      // $("p.fast").show("fast");
      // $("p.slow").show("slow");
      // $("p.very-fast").show(1000);
      // $("p.very-slow").show(2000);
  });
  $(".show-btn6").click(function(){
      $(".product-row-two6").show("slow");
      $(".product-row-three6").show("slow");
      $(".hide-btn6").show(1000);
      $(".show-btn6").hide(1000);
      

      // $("p.fast").show("fast");
      // $("p.slow").show("slow");
      // $("p.very-fast").show(1000);
      // $("p.very-slow").show(2000);
  });



  // right side last product on resize go to hide section---------------------------------------------
// car care

$(function() {
    var product4=$('.care:eq(3)').html();
    var product3=$('.care:eq(2)').html();
    var product2=$('.care:eq(1)').html();
    $(window).bind("resize", function () {
      // console.log($(this).width())
      if ($(this).width() <= 991) {
          $('.care:eq(3)').css('display','none');
          $('.product-row-two .row:last .col-md-3:eq(0)').html(product4);
      } else {
        $('.care:eq(3)').css('display','block');
        $('.product-row-two .row:last .col-md-3:eq(0)').html("");
      }
      if ($(this).width() <= 767) {
          $('.care:eq(2)').css('display','none');
          $('.product-row-two .row:last .col-md-3:eq(1)').html(product3);
      } else {
        $('.care:eq(2)').css('display','block');
        $('.product-row-two .row:last .col-md-3:eq(1)').html("");
      }
      
  
     
  })
       
  });
  // Audio
  
  $(function() {
    var product4=$('.audio:eq(3)').html();
    var product3=$('.audio:eq(2)').html();
    var product2=$('.audio:eq(1)').html();
    $(window).bind("resize", function () {
      // console.log($(this).width())
      if ($(this).width() <= 991) {
          $('.audio:eq(3)').css('display','none');
          $('.product-row-two2 .row:last .col-md-3:eq(0)').html(product4);
      } else {
        $('.audio:eq(3)').css('display','block');
        $('.product-row-two2 .row:last .col-md-3:eq(0)').html("");
      }
      if ($(this).width() <= 767) {
          $('.audio:eq(2)').css('display','none');
          $('.product-row-two2 .row:last .col-md-3:eq(1)').html(product3);
      } else {
        $('.audio:eq(2)').css('display','block');
        $('.product-row-two2 .row:last .col-md-3:eq(1)').html("");
      }
      
  
     
  })
       
  });
  // exterior
  
  $(function() {
    var product4=$('.exterior:eq(3)').html();
    var product3=$('.exterior:eq(2)').html();
    var product2=$('.exterior:eq(1)').html();
    $(window).bind("resize", function () {
      // console.log($(this).width())
      if ($(this).width() <= 991) {
          $('.exterior:eq(3)').css('display','none');
          $('.product-row-two3 .row:last .col-md-3:eq(0)').html(product4);
      } else {
        $('.exterior:eq(3)').css('display','block');
        $('.product-row-two3 .row:last .col-md-3:eq(0)').html("");
      }
      if ($(this).width() <= 767) {
          $('.exterior:eq(2)').css('display','none');
          $('.product-row-two3 .row:last .col-md-3:eq(1)').html(product3);
      } else {
        $('.exterior:eq(2)').css('display','block');
        $('.product-row-two3 .row:last .col-md-3:eq(1)').html("");
      }
      
  
     
  })
       
  });
  // engine
  
  $(function() {
    var product4=$('.eng:eq(3)').html();
    var product3=$('.eng:eq(2)').html();
    var product2=$('.eng:eq(1)').html();
    $(window).bind("resize", function () {
      // console.log($(this).width())
      if ($(this).width() <= 991) {
          $('.eng:eq(3)').css('display','none');
          $('.product-row-two4 .row:last .col-md-3:eq(0)').html(product4);
      } else {
        $('.eng:eq(3)').css('display','block');
        $('.product-row-two4 .row:last .col-md-3:eq(0)').html("");
      }
      if ($(this).width() <= 767) {
          $('.eng:eq(2)').css('display','none');
          $('.product-row-two4 .row:last .col-md-3:eq(1)').html(product3);
      } else {
        $('.eng:eq(2)').css('display','block');
        $('.product-row-two4 .row:last .col-md-3:eq(1)').html("");
      }
      
  
     
  })
       
  });
  // interior
  
  $(function() {
    var product4=$('.inter:eq(3)').html();
    var product3=$('.inter:eq(2)').html();
    var product2=$('.inter:eq(1)').html();
    $(window).bind("resize", function () {
      // console.log($(this).width())
      if ($(this).width() <= 991) {
          $('.inter:eq(3)').css('display','none');
          $('.product-row-two5 .row:last .col-md-3:eq(0)').html(product4);
      } else {
        $('.inter:eq(3)').css('display','block');
        $('.product-row-two5 .row:last .col-md-3:eq(0)').html("");
      }
      if ($(this).width() <= 767) {
          $('.inter:eq(2)').css('display','none');
          $('.product-row-two5 .row:last .col-md-3:eq(1)').html(product3);
      } else {
        $('.inter:eq(2)').css('display','block');
        $('.product-row-two5 .row:last .col-md-3:eq(1)').html("");
      }
      
  
     
  })
       
  });
  // Lights
  
  $(function() {
    var product4=$('.electric:eq(3)').html();
    var product3=$('.electric:eq(2)').html();
    var product2=$('.electric:eq(1)').html();
    $(window).bind("resize", function () {
      // console.log($(this).width())
      if ($(this).width() <= 991) {
          $('.electric:eq(3)').css('display','none');
          $('.product-row-two6 .row:last .col-md-3:eq(0)').html(product4);
      } else {
        $('.electric:eq(3)').css('display','block');
        $('.product-row-two6 .row:last .col-md-3:eq(0)').html("");
      }
      if ($(this).width() <= 767) {
          $('.electric:eq(2)').css('display','none');
          $('.product-row-two6 .row:last .col-md-3:eq(1)').html(product3);
      } else {
        $('.electric:eq(2)').css('display','block');
        $('.product-row-two6 .row:last .col-md-3:eq(1)').html("");
      }
      
  
     
  })
       
  });



  //display animate on scroll-------------------------------------------------------------
$(function() {
    $('.featurepart').waypoint(function (direction){
      $('.featurepart').addClass('animated fadeInDown');
    
      
    },{
      offset:'400px'
    });
    
  });



  // add span tag in all addtocartbutton---------------------------------------
$(document).ready(function(){
    $('.addtocart').each(function(){
      var content = $(this).html();
      $(this).empty().html('<span>' + content + '</span>');
  });
  });








});