$(document).ready(function(){
    $('.readmore').click(function(){
      $('.hidepara').show('slow');
      $('.readmore').hide('1000');
      $('.readless').show('1000');
    });
    $('.readless').click(function(){
      $('.hidepara').hide('slow');
      $('.readmore').show('1000');
      $('.readless').hide('1000');
    });
    
  });