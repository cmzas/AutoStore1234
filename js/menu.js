    // jquery ready start
    $(document).ready(function() {
        // jQuery code
        //////////////////////// Prevent closing from click inside dropdown
          $(document).on('click', '.dropdown-menu', function (e) {
            e.stopPropagation();
          });
        });
           //  $('.megamenu a').click(function(){
    //    $('.dropdown-menu.show').hide();
    //  });
    
    
      $('.sbc').click(function () {
        // $('.dropdown-menu.show').show('fast');
        $('.megamenu').toggleClass('sbccss'); 
      
      });
    
      
    
  
  // jquery end