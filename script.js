$(document).ready(function(){
  $('a[href*=#]').click(function() {
	//para que quede activo el clickeado
	$('nav ul li a').removeClass('activo');
	$(this).addClass('activo');  
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().left;
        $('html,body')
        .stop().animate({scrollLeft: targetOffset}, 1300, 'easeOutBounce');
       return false;
      }
    }
  });

	
});