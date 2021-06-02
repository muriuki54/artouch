$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > 350) {
        $(".step1").addClass("step2");
        $(".inner-step1").addClass("fadeOut");

        setTimeout(() => {
          $(".step2").addClass("step2_fade");
        }, 500);
    } else {
        $(".step2").removeClass("step2_fade");
        $(".step1").removeClass("step2");
        $(".inner-step1").removeClass("fadeOut");
    }

 
    if (scroll > 700) {
		$(".inner-step2").addClass("fadeIn");
        $(".step1").addClass("step3");
        
    } else {
		$(".inner-step2").removeClass("fadeIn");
        $(".step1").removeClass("step3");
    }

    if (scroll > 1050) {

		  $(".inner-step3").addClass("fadeIn");
      $(".step1").addClass("step4");

      $(".fixed_logo").addClass("show");
      $(".fixed_logo").removeClass("hide");

      $(".fixed_logo_inner_text").addClass("fadeIn");
        
    } else {
		$(".inner-step3").removeClass("fadeIn");
        $(".step1").removeClass("step4");

      $(".fixed_logo").removeClass("show");
      $(".fixed_logo").addClass("hide");

      $(".fixed_logo_inner_text").removeClass("fadeIn");
    }

});
