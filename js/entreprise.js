(function($) {
  "use strict"; // Start of use strict

  $('video').hover(
    function() {
      $(this).trigger('play');
    },
    function() {
      $(this).trigger('pause');
    }
  );

  //Animate coach section when in viewport
  var leftTeamAnimated = false;
  var rightTeamAnimated = false;
  $('#corpoteam').waypoint(function(direction) {
    if (!leftTeamAnimated) {
      $('#corpoteam .col-lg-6:nth-child(1) samp').each(function (index) {
        var item = $(this);
        setTimeout(function () {
          item.addClass('to-white-color');
        }, index * 500);
      });
      leftTeamAnimated = true;
    }
  }, {
    offset: '0'
  });
  $('#corpoteam').waypoint(function(direction) {
    if (!rightTeamAnimated) {
      $('#corpoteam .col-lg-6:nth-child(2) samp').each(function (index) {
        var item = $(this);
        setTimeout(function () {
          item.addClass('to-white-color');
        }, index * 500);
      });
      rightTeamAnimated = true;
    }
  }, {
    offset: '0'
  });

  $('#servicecorpo1').click(function() {
    $('#servicecorpo1').toggleClass('focused');
    $('#servicecorpo1_details').collapse('toggle');
  });
  $('#servicecorpo2').click(function() {
    $('#servicecorpo2').toggleClass('focused');
    $('#servicecorpo2_details').collapse('toggle');
  });
  $('#servicecorpo3').click(function() {
    $('#servicecorpo3').toggleClass('focused');
    $('#servicecorpo3_details').collapse('toggle');
  });
  $('#servicecorpo4').click(function() {
    $('#servicecorpo4').toggleClass('focused');
    $('#servicecorpo4_details').collapse('toggle');
  });
  $('#servicecorpo5').click(function() {
    $('#servicecorpo5').toggleClass('focused');
    $('#servicecorpo5_details').collapse('toggle');
  });
  $('#servicecorpo6').click(function() {
    $('#servicecorpo6').toggleClass('focused');
    $('#servicecorpo6_details').collapse('toggle');
  });

  $('#servicecorpo1_details').on('shown.bs.collapse', function() {
    $('html, body').animate({
      scrollTop: $('#servicecorpo1').offset().top - 50
    }, 1000, "easeInOutExpo");
  });
  $('#servicecorpo2_details').on('shown.bs.collapse', function() {
    $('html, body').animate({
      scrollTop: $('#servicecorpo2').offset().top - 50
    }, 1000, "easeInOutExpo");
  });
  $('#servicecorpo3_details').on('shown.bs.collapse', function() {
    $('html, body').animate({
      scrollTop: $('#servicecorpo3').offset().top - 50
    }, 1000, "easeInOutExpo");
  });
  $('#servicecorpo4_details').on('shown.bs.collapse', function() {
    $('html, body').animate({
      scrollTop: $('#servicecorpo4').offset().top - 50
    }, 1000, "easeInOutExpo");
  });
  $('#servicecorpo5_details').on('shown.bs.collapse', function() {
    $('html, body').animate({
      scrollTop: $('#servicecorpo5').offset().top - 50
    }, 1000, "easeInOutExpo");
  });
  $('#servicecorpo6_details').on('shown.bs.collapse', function() {
    $('html, body').animate({
      scrollTop: $('#servicecorpo6').offset().top - 50
    }, 1000, "easeInOutExpo");
  });

  $('#servicecorpo4_details').on('hidden.bs.collapse', function() {
    $('html, body').animate({
      scrollTop: $('#servicecorpo1_details').closest('section').offset().top
    }, 1000, "easeInOutExpo");
  });
  $('#servicecorpo5_details').on('hidden.bs.collapse', function() {
    $('html, body').animate({
      scrollTop: $('#servicecorpo1_details').closest('section').offset().top
    }, 1000, "easeInOutExpo");
  });
  $('#servicecorpo6_details').on('hidden.bs.collapse', function() {
    $('html, body').animate({
      scrollTop: $('#servicecorpo1_details').closest('section').offset().top
    }, 1000, "easeInOutExpo");
  });

  // man at desk svg
  var man_at_desk = Snap.select("#man-at-desk"),
      man = man_at_desk.select("#man"),
      head = man_at_desk.select("#head"),
      desk = man_at_desk.select("#desk"),
      chair = man_at_desk.select("#chair"),
      screen = man_at_desk.select("#screen");

  function flashScreen() {
    screen.animate({fill: '#89B829'}, 500, function() {
      screen.animate({fill: '#C9EC83'}, 500);
    });
  }

  function rotateHead() {
    head.animate({transform: 'r5'}, 1000, mina.ease, function() {
      head.animate({transform: 'r-5'}, 1000, mina.ease);
    });
  }

  setInterval(flashScreen, 2000);
  setInterval(rotateHead, 2000);

  // man meditating
  var man_meditating = Snap.select("#man-meditating"),
      head_2 = man_meditating.select("#head"),
      chest = man_meditating.select("#chest");

  function scaleChest() {
    chest.animate({transform: 's1.03'}, 1000, function() {
      chest.animate({transform: 's1'}, 1000);
    });
  }

  function moveHead() {
    head_2.animate({cy: '26.5'}, 1000, mina.ease, function() {
      head_2.animate({cy: '27'}, 1000, mina.ease);
    });
  }

  setInterval(scaleChest, 2000);
  setInterval(moveHead, 2000);

  // Bubbles 1
  var bubbles1 = Snap.select('#bubbles1');
  $("#bubbles1").width($("#man-at-desk").width());
  $("#bubbles1").height($('#man-at-desk').position().top - $('#problem').position().top);
  var bubbles1_width = $("#bubbles1").width();
  var bubbles1_height = $("#bubbles1").height();
  $('#bubbles1').css( "transform", 'translate(0px,-' + bubbles1_height + 'px)');

  function addBubble1() {
    var bubble = bubbles1.circle(45 + Math.random()*(bubbles1_width-90), bubbles1_height-25, 20);

    var images = ['thumbs-down', 'sad', 'angry'];
    var image = images[Math.floor(Math.random()*images.length)];

    bubble.attr({
      fill: "url(#" + image + "-image)"
    });
    bubble.transform('s0');

    var liftBubble = function() {
      bubble.animate({cy: $('#bubbles1').position().bottom}, 5000, mina.easeout, reduceBubble);
    }

    var reduceBubble = function() {
      bubble.animate({transform: 's0'}, 200, mina.easeout, killBubble);
    }

    var killBubble = function() {
      bubble.remove();
    }

    bubble.animate({transform: 's1'}, 200, mina.easeout, liftBubble);


    var x = parseFloat(bubble.attr("cx"));
    var xOffset = 10;
    var swayBubble = function() {
      xOffset = -xOffset;
      x = x + xOffset;
      bubble.animate({cx: x}, 1000, mina.easeinout, swayBubble);
    }

    swayBubble();
  }

  var bubbles1Appearing = false;
  var bubbles1SummonSpeed = 3;

  var startBubbles1Timeout = function() {
    if(bubbles1Appearing) {
      addBubble1();
      setTimeout(startBubbles1Timeout, 600*bubbles1SummonSpeed + Math.random()*700);
      if(bubbles1SummonSpeed > 1) {
        bubbles1SummonSpeed -= 1;
      }
    }
  }

  $('#problem').waypoint(function(direction) {
    if(!bubbles1Appearing && direction == "down") {
      bubbles1Appearing = true;
      startBubbles1Timeout();
    }
  }, {
    offset: '30%'
  });
  $('#problem').waypoint(function(direction) {
    if(!bubbles1Appearing && direction == "up") {
      bubbles1Appearing = true;
      startBubbles1Timeout();
    }
  }, {
    offset: '-10%'
  });

  $('#problem').waypoint(function(direction) {
    if(direction == "down") {
      bubbles1Appearing = false;
    }
  }, {
    offset: '-50%'
  })
  $('#problem').waypoint(function(direction) {
    if(direction == "up") {
      bubbles1Appearing = false;
    }
  }, {
    offset: '20%'
  })

  // Bsubbles 2
  var bubbles2 = Snap.select('#bubbles2');
  $("#bubbles2").width($("#man-meditating").width());
  $("#bubbles2").height($('#man-meditating').position().top - $('#solution').position().top);
  var bubbles2_width = $("#bubbles2").width();
  var bubbles2_height = $("#bubbles2").height();
  $('#bubbles2').css( "transform", 'translate(0px,-' + bubbles2_height + 'px)');

  function addBubble2() {
    var bubble = bubbles2.circle(45 + Math.random()*(bubbles2_width-90), bubbles2_height-25, 20);

    var images = ['like', 'like', 'love', 'love', 'haha'];
    var image = images[Math.floor(Math.random()*images.length)];

    bubble.attr({
      fill: "url(#" + image + "-image)"
    });
    bubble.transform('s0');

    var liftBubble = function() {
      bubble.animate({cy: $('#bubbles2').offset().bottom + 20}, 5000, mina.easeout, reduceBubble);
    }

    var reduceBubble = function() {
      bubble.animate({transform: 's0'}, 200, mina.easeout, killBubble);
    }

    var killBubble = function() {
      bubble.remove();
    }

    bubble.animate({transform: 's1'}, 200, mina.easeout, liftBubble);


    var x = parseFloat(bubble.attr("cx"));
    var xOffset = 10;
    var swayBubble = function() {
      xOffset = -xOffset;
      x = x + xOffset;
      bubble.animate({cx: x}, 1000, mina.easeinout, swayBubble);
    }

    swayBubble();
  }

  var bubbles2Appearing = false;
  var bubbles2SummonSpeed = 1;

  var startBubbles2Timeout = function() {
    if(bubbles2Appearing) {
      addBubble2();
      setTimeout(startBubbles2Timeout, 600*bubbles2SummonSpeed + Math.random()*700);
      if(bubbles2SummonSpeed < 3) {
        bubbles2SummonSpeed += 1;
      }
    }
  }

  $('#solution').waypoint(function(direction) {
    if(!bubbles2Appearing && direction == "down") {
      bubbles2Appearing = true;
      startBubbles2Timeout();
    }
  }, {
    offset: '30%'
  });
  $('#solution').waypoint(function(direction) {
    if(!bubbles2Appearing && direction == "up") {
      bubbles2Appearing = true;
      startBubbles2Timeout();
    }
  }, {
    offset: '-10%'
  });

  $('#solution').waypoint(function(direction) {
    if(direction == "down") {
      bubbles2Appearing = false;
    }
  }, {
    offset: '-50%'
  })
  $('#solution').waypoint(function(direction) {
    if(direction == "up") {
      bubbles2Appearing = false;
    }
  }, {
    offset: '20%'
  })

  console.log(document.documentElement.lang);

  if (document.documentElement.lang == "fr") {
    console.log("what");
    window.odometerOptions = {
      format: '(ddd),dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
      duration: 2000, // Change how long the javascript expects the CSS animation to take
    };
  } else if(document.documentElement.lang == "en") {
    console.log("whaaaaat");
    window.odometerOptions = {
      format: '( ddd).dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
      duration: 2000, // Change how long the javascript expects the CSS animation to take
    };
  }

  //Animate odometers when in viewport
  $('#odometer-1').waypoint(function(direction) {
    $('#odometer-1').html('55.4');
  }, {
    offset: '90%'
  });
  $('#odometer-2').waypoint(function(direction) {
    $('#odometer-2').html('2000');
  }, {
    offset: '90%'
  });
  $('#odometer-3').waypoint(function(direction) {
    $('#odometer-3').html('51');
  }, {
    offset: '92%'
  });
  $('#odometer-4').waypoint(function(direction) {
    $('#odometer-4').html('22');
  }, {
    offset: '90%'
  });
  $('#odometer-5').waypoint(function(direction) {
    $('#odometer-5').html('1100');
  }, {
    offset: '90%'
  });
  $('#odometer-6').waypoint(function(direction) {
    $('#odometer-6').html('3000');
  }, {
    offset: '90%'
  });

})(jQuery); // End of use strict
