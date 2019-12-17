$(function(){
  $('.navbar button.navbar-toggler').click(function(){
    $('.navbar .collapse').toggle(400, function(some){
      if ($(this).is(':hidden')){
        $(this).find('.dropdown-menu').hide();
      }
    });
  })

  $('.navbar .nav-item').click(function(event){
    if ($('.navbar button.navbar-toggler').is(':hidden')) return;

    
    var li = $(event.target);
    if (!li.is('.nav-item')){ li = li.parent('.nav-item') }
     
    var dropdown = li.find('.dropdown-menu');
    dropdown.toggle(400, function(){
      if (dropdown.is(':visible')){
        dropdown.css('display', 'flex');

      }
    });
    $('.navbar .nav-item .dropdown-menu').each(function(idx, menu){
      if (!dropdown.is(menu)) $(menu).hide(400);
    })

  })
})