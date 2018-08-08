(function($) {
  "use strict"; // Start of use strict
  $(document).ready(function() {
    $('.lazyload' ).each(function() {
      //* set the img src from data-src
      $(this).attr('src', $(this).attr('data-src'));
    });
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();

  //Snap svg animations
  var flower1 = {
    s: null,
    petal1: null,
    petal2: null,
    petal3: null,
    petal4: null,
    petal5: null,
    init: function() {
      var s = Snap("#flower-stage-1");

      Snap.load("/img/animation/flower-petal.svg", function(f) {
        s.append(f);

        var petal1 = s.select('[id="petal1"]');
        var petal2 = s.select('[id="petal2"]');
        var petal3 = s.select('[id="petal3"]');
        var petal4 = s.select('[id="petal4"]');
        var petal5 = s.select('[id="petal5"]');

        petal1.attr({
          fill: "#F0F8EA"
        });
        petal2.attr({
          fill: "#F0F8EA"
        });
        petal3.attr({
          fill: "#F0F8EA"
        });
        petal4.attr({
          fill: "#F0F8EA"
        });
        petal5.attr({
          fill: "#F0F8EA"
        });

        petal1.transform('s0.6');
        petal2.transform('s0.6');
        petal3.transform('s0.6');
        petal4.transform('s0.6');
        petal5.transform('s0.6');

        flower1.petal1 = petal1;
        flower1.petal2 = petal2;
        flower1.petal3 = petal3;
        flower1.petal4 = petal4;
        flower1.petal5 = petal5;

        flower1.s = s;
      });
    },
    animate: function() {
      this.petal1.animate({transform: "s0.6, t6, 1, r15"},700);
      this.petal2.animate({transform: "s0.6, t-6, 1, r-15"},700);
    }
  };

  var flower2 = {
    s: null,
    petal1: null,
    petal2: null,
    petal3: null,
    petal4: null,
    petal5: null,
    init: function() {
      var s = Snap("#flower-stage-2");

      Snap.load("/img/animation/flower-petal.svg", function(f) {
        s.append(f);

        var petal1 = s.select('[id="petal1"]');
        var petal2 = s.select('[id="petal2"]');
        var petal3 = s.select('[id="petal3"]');
        var petal4 = s.select('[id="petal4"]');
        var petal5 = s.select('[id="petal5"]');

        petal1.attr({
          fill: "#F0F8EA"
        });
        petal2.attr({
          fill: "#F0F8EA"
        });
        petal3.attr({
          fill: "#F0F8EA"
        });
        petal4.attr({
          fill: "#F0F8EA"
        });
        petal5.attr({
          fill: "#F0F8EA"
        });

        petal1.transform('s0.6');
        petal2.transform('s0.6');
        petal3.transform('s0.6');
        petal4.transform('s0.6');
        petal5.transform('s0.6');

        flower2.petal1 = petal1;
        flower2.petal2 = petal2;
        flower2.petal3 = petal3;
        flower2.petal4 = petal4;
        flower2.petal5 = petal5;

        flower2.s = s;
      });
    },
    animate: function() {
      this.petal1.animate({transform: "s0.6, t12, 5, r35"},1400);
      this.petal2.animate({transform: "s0.6, t-12, 5, r-35"},1400);
      this.petal3.animate({transform: "s0.6, t6, 1, r15"},1400);
      this.petal4.animate({transform: "s0.6, t-6, 1, r-15"},1400);
    }
  };

  var flower3 = {
    s: null,
    petal1: null,
    petal2: null,
    petal3: null,
    petal4: null,
    petal5: null,
    init: function() {
      var s = Snap("#flower-stage-3");

      Snap.load("/img/animation/flower-petal.svg", function(f) {
        s.append(f);

        var petal1 = s.select('[id="petal1"]');
        var petal2 = s.select('[id="petal2"]');
        var petal3 = s.select('[id="petal3"]');
        var petal4 = s.select('[id="petal4"]');
        var petal5 = s.select('[id="petal5"]');

        petal1.attr({
          fill: "#F0F8EA"
        });
        petal2.attr({
          fill: "#F0F8EA"
        });
        petal3.attr({
          fill: "#F0F8EA"
        });
        petal4.attr({
          fill: "#F0F8EA"
        });
        petal5.attr({
          fill: "#F0F8EA"
        });

        petal1.transform('s0.6');
        petal2.transform('s0.6');
        petal3.transform('s0.6');
        petal4.transform('s0.6');
        petal5.transform('s0.6');

        flower3.petal1 = petal1;
        flower3.petal2 = petal2;
        flower3.petal3 = petal3;
        flower3.petal4 = petal4;
        flower3.petal5 = petal5;

        flower3.s = s;
      });
    },
    animate: function() {
      this.petal1.animate({transform: "s0.6, t17, 7, r45"},2000);
      this.petal2.animate({transform: "s0.6, t-17, 7, r-45"},2000);
      this.petal3.animate({transform: "s0.6, t10, 2, r25"},2000);
      this.petal4.animate({transform: "s0.6, t-10, 2, r-25"},2000);
    }
  };

  flower1.init();
  flower2.init();
  flower3.init();


  var flower1Animated = false;
  var flower2Animated = false;
  var flower3Animated = false;

  //Animate 1st flower when in viewport
  var flower1WP = $('#flower-stage-1').waypoint(function(direction) {
    if (!flower1Animated) {
      flower1.animate();
      flower1Animated = true;
    }
  }, {
    offset: '40%'
  });

  //Animate 2nd flower when in viewport
  var flower2WP = $('#flower-stage-2').waypoint(function(direction) {
    if (!flower2Animated) {
      flower2.animate();
      flower2Animated = true;
    }
  }, {
    offset: '40%'
  });

  //Animate 3rd flower when in viewport
  var flower3WP = $('#flower-stage-3').waypoint(function(direction) {
    if (!flower3Animated) {
      flower3.animate();
      flower3Animated = true;
    }
  }, {
    offset: '40%'
  });


  var coachAnimated = false;

  //Animate coach section when in viewport
  var coachWP = $('#coach').waypoint(function(direction) {
    if (!coachAnimated) {
      $('#coach samp').each(function (index) {
        var item = $(this);
        setTimeout(function () {
          item.addClass('to-secondary-color');
        }, index * 500);
      });
      //$("#coach samp").addClass("bolder");
      coachAnimated = true;
    }
  }, {
    offset: '0'
  });

  var testimoniesAnimated = false;

  //Animate testimonies when in viewport
  var testimoniesWP = $('#testimonies').waypoint(function(direction) {
    if (!testimoniesAnimated) {
      $("#testimony1").addClass("slide-left");
      setTimeout(function(){
        $("#testimony2").addClass("slide-right");
      }, 250);
      setTimeout(function(){
        $("#testimony3").addClass("slide-left");
      }, 500);
      setTimeout(function(){
        $("#testimony4").addClass("slide-right");
      }, 750);
      setTimeout(function(){
        $("#testimony5").addClass("slide-left");
      }, 1000);
      testimoniesAnimated = true;
    }
  }, {
    offset: '25%'
  });

  //Animate contact section when in viewport
  var envelopeFn = function() {
    $('#email').removeClass("fa-envelope");
    $('#email').addClass("fa-envelope-open");
    setTimeout(function(){
      $('#email').removeClass("fa-envelope-open");
      $('#email').addClass("fa-envelope");
    }, 1000);
  }

  var phoneFn = function() {
    $('.fa-phone').addClass("shake");
    setTimeout(function(){
      $('.fa-phone').removeClass("shake");
    }, 1000);
  }

  var contactWP = $('#contact').waypoint(function(direction) {
    envelopeFn();
    setInterval(function(){
      phoneFn();
      setTimeout(function(){
        envelopeFn();
      }, 1000);
    }, 2000);
  }, {
    offset: '50%'
  });

  $(window).scroll(function() {
    // Collapse the navbar when page is scrolled
    navbarCollapse();
  });

  $('#service1_caret').click(function() {
    $('#service1_details').collapse('toggle');
    if($('#service1_caret i').hasClass("fa-caret-down")) {
      $('#service1_caret i').removeClass("fa-caret-down");
      $('#service1_caret i').addClass("fa-caret-up");
    } else {
      $('#service1_caret i').removeClass("fa-caret-up");
      $('#service1_caret i').addClass("fa-caret-down");
    }
  });

  $('#service2_caret').click(function() {
    $('#service2_details').collapse('toggle');
    if($('#service2_caret i').hasClass("fa-caret-down")) {
      $('#service2_caret i').removeClass("fa-caret-down");
      $('#service2_caret i').addClass("fa-caret-up");
    } else {
      $('#service2_caret i').removeClass("fa-caret-up");
      $('#service2_caret i').addClass("fa-caret-down");
    }
  });

  $('#service3_caret').click(function() {
    $('#service3_details').collapse('toggle');
    if($('#service3_caret i').hasClass("fa-caret-down")) {
      $('#service3_caret i').removeClass("fa-caret-down");
      $('#service3_caret i').addClass("fa-caret-up");
    } else {
      $('#service3_caret i').removeClass("fa-caret-up");
      $('#service3_caret i').addClass("fa-caret-down");
    }
  });

})(jQuery); // End of use strict
