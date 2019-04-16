(function($) {
  "use strict"; // Start of use strict

  // lazy loading of images with data-src tag
  $('.lazy').Lazy();

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 50)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // replace share-buttons with html
  $("[data-share-buttons]").load("/templates/share-buttons.html", function() {
    var url = ($(this).data("share-buttons")) ? $(this).data("share-buttons") : window.location;
    $(this).find("a").each(function(){
      this.href = this.href.replace('#currentUrl', url);
    });
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

  // Mailchimp popup modifications
  var checkPopupExist = setInterval(function() {

    if ($('#PopupSignupForm_0').length) {
      $("iframe").contents().find("#mc-MEDITATION").val("NO");
      $("iframe").contents().find("#mc-LANGUAGE").val("EN");
      $("iframe").contents().find(".content__button input").css('font-size', "18px");

      // translate for french users
      if($('html').attr('lang')=='fr') {
        $("iframe").contents().find("#mc-LANGUAGE").val("FR");

        $("iframe").contents().find(".content__titleDescription span").text('Obtenez Votre Guide Gratuit Maintenant: "Comment méditer en ville?"');
        $("iframe").contents().find(".content__titleDescription div:eq(1)").text('Inscrivez-vous gratuitement aujourd\'hui et nous vous informerons des événements et promotions à venir.');
        $("iframe").contents().find("label").text('Adresse Email');
        $("iframe").contents().find(".content__button input").val('Obtenez-le Maintenant');
        $("iframe").contents().find(".modalContent__image").css("background-image", "url(/media/ebook-cover-fr.png)");

        // Check submit
        $("iframe").contents().find(".content__button").click(function(){
          // french users
          var checkSuccessPopupExist = setInterval(function() {

            if ($("iframe").contents().find(".popup-signup-success").length) {
              $("iframe").contents().find(".popup-signup-success").text('Votre guide gratuit vous a été envoyé!');
              clearInterval(checkSuccessPopupExist);
            }
          }, 100);
        });
      }

      // Hide language field
      $("iframe").contents().find("#uniqName_3_1").hide();

      // Hide meditation field
      $("iframe").contents().find("#uniqName_3_2").hide();

      clearInterval(checkPopupExist);
    }
  }, 100);

  var aboutAnimated = false;

  //Animate coach section when in viewport
  var aboutWP = $('#about').waypoint(function(direction) {
    if (!aboutAnimated) {
      $('#about samp').each(function (index) {
        var item = $(this);
        setTimeout(function () {
          item.addClass('to-primary-color');
        }, index * 500);
      });
      //$("#coach samp").addClass("bolder");
      aboutAnimated = true;
    }
  }, {
    offset: '50%'
  });

  //Animate coach section when in viewport
  var leftTeamAnimated = false;
  var rightTeamAnimated = false;
  $('#team').waypoint(function(direction) {
    if (!leftTeamAnimated) {
      $('#team .col-lg-6:nth-child(1) samp').each(function (index) {
        var item = $(this);
        setTimeout(function () {
          item.addClass('to-secondary-color');
        }, index * 500);
      });
      leftTeamAnimated = true;
    }
  }, {
    offset: '0'
  });
  $('#team').waypoint(function(direction) {
    if (!rightTeamAnimated) {
      $('#team .col-lg-6:nth-child(2) samp').each(function (index) {
        var item = $(this);
        setTimeout(function () {
          item.addClass('to-secondary-color');
        }, index * 500);
      });
      rightTeamAnimated = true;
    }
  }, {
    offset: '0'
  });

  var testimoniesAnimated = false;

  //Animate testimonies when in viewport
  var testimoniesWP = $('#testimonies').waypoint(function(direction) {
    if (!testimoniesAnimated) {
      $("#testimony1").addClass("slide-right");
      setTimeout(function(){
        $("#testimony2").addClass("slide-right");
      }, 250);
      setTimeout(function(){
        $("#testimony3").addClass("slide-right");
      }, 500);
      setTimeout(function(){
        $("#testimony4").addClass("slide-right");
      }, 750);
      setTimeout(function(){
        $("#testimony5").addClass("slide-right");
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

  // Services collapse
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
  $('#service1_details').on('shown.bs.collapse', function() {
    var target;
    console.lo

    if($('#service1_details').height() + 100 > $(window).height()) {
      target = $('#service1_caret').offset().top -
      $('#service1_caret').height() - 50;
    } else {
      target = $('#service1_details').offset().top -
      $(window).height() + $('#service1_details').height() + 50
    }

    if(target > $('html, body').scrollTop()) {
      $('html, body').animate({
        scrollTop: target
      }, 1000, "easeInOutExpo");
    }
  });
  $('#service1_details').on('hidden.bs.collapse', function() {
    $('html, body').animate({
      scrollTop: $('#service1_details').closest('section').offset().top
    }, 1000, "easeInOutExpo");
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
  $('#service2_details').on('shown.bs.collapse', function() {
    var target;
    if($('#service2_details').height() + 100 > $(window).height()) {
      target = $('#service2_caret').offset().top -
      $('#service2_caret').height() - 50;
    } else {
      target = $('#service2_details').offset().top -
      $(window).height() + $('#service2_details').height() + 50
    }

    if(target > $('html, body').scrollTop()) {
      $('html, body').animate({
        scrollTop: target
      }, 1000, "easeInOutExpo");
    }
  });
  $('#service2_details').on('hidden.bs.collapse', function() {
    $('html, body').animate({
      scrollTop: $('#service2_details').closest('section').offset().top
    }, 1000, "easeInOutExpo");
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
  $('#service3_details').on('shown.bs.collapse', function() {
    var target;
    if($('#service3_details').height() + 100 > $(window).height()) {
      target = $('#service3_caret').offset().top -
      $('#service3_caret').height() - 50;
    } else {
      target = $('#service3_details').offset().top -
      $(window).height() + $('#service3_details').height() + 50
    }

    if(target > $('html, body').scrollTop()) {
      $('html, body').animate({
        scrollTop: target
      }, 1000, "easeInOutExpo");
    }
  });
  $('#service3_details').on('hidden.bs.collapse', function() {
    $('html, body').animate({
      scrollTop: $('#service3_details').closest('section').offset().top
    }, 1000, "easeInOutExpo");
  });

  // Opinions
  $('#meditation_thumbs-up').click(function() {
    $('#meditation_thumbs-down i').removeClass("active");
    $('#meditation_thumbs-up i').addClass("active");
    $('#meditation-opinion').collapse('show');
    $('#meditation-opinion').removeClass("bg-light-secondary");
    $('#meditation-opinion').addClass("bg-light-primary");
    $('#meditation-opinion form input:first').focus();
  });
  $('#meditation_thumbs-down').click(function() {
    $('#meditation_thumbs-up i').removeClass("active");
    $('#meditation_thumbs-down i').addClass("active");
    $('#meditation-opinion').collapse('show');
    $('#meditation-opinion').removeClass("bg-light-primary");
    $('#meditation-opinion').addClass("bg-light-secondary");
    $('#meditation-opinion form input:first').focus();
  });
  $("#meditation-opinion form").submit(function(event) {
    var feedback = $("#meditation-opinion form input:first").val();
    if(feedback != "" ) {
      $.get("https://api.myjson.com/bins/dfte6", function(data, textStatus, jqXHR) {
        data.meditation.push(feedback);
        $.ajax({
          url:"https://api.myjson.com/bins/dfte6",
          type:"PUT",
          data:JSON.stringify(data),
          contentType:"application/json; charset=utf-8",
          dataType:"json",
          success: function(data, textStatus, jqXHR){
            $("#meditation-opinion span" ).text("Merci!").show();
          }
        });
      });
    } else {
      $("#meditation-opinion span").text( "Invalide" ).show().fadeOut( 3000 );
    }
    event.preventDefault();
  });

  $('#workshop_thumbs-up').click(function() {
    $('#workshop_thumbs-down i').removeClass("active");
    $('#workshop_thumbs-up i').addClass("active");
    $('#workshop-opinion').collapse('show');
    $('#workshop-opinion').removeClass("bg-light-secondary");
    $('#workshop-opinion').addClass("bg-light-primary");
    $('#workshop-opinion form input:first').focus();
  });
  $('#workshop_thumbs-down').click(function() {
    $('#workshop_thumbs-up i').removeClass("active");
    $('#workshop_thumbs-down i').addClass("active");
    $('#workshop-opinion').collapse('show');
    $('#workshop-opinion').removeClass("bg-light-primary");
    $('#workshop-opinion').addClass("bg-light-secondary");
    $('#workshop-opinion form input:first').focus();
  });
  $("#workshop-opinion form").submit(function(event) {
    var feedback = $("#workshop-opinion form input:first").val();
    if(feedback != "" ) {
      $.get("https://api.myjson.com/bins/dfte6", function(data, textStatus, jqXHR) {
        data.workshop.push(feedback);
        $.ajax({
          url:"https://api.myjson.com/bins/dfte6",
          type:"PUT",
          data:JSON.stringify(data),
          contentType:"application/json; charset=utf-8",
          dataType:"json",
          success: function(data, textStatus, jqXHR){
            $("#workshop-opinion span" ).text("Merci!").show();
          }
        });
      });
    } else {
      $("#workshop-opinion span").text( "Invalide" ).show().fadeOut( 3000 );
    }
    event.preventDefault();
  });

  $('#mindfulday_thumbs-up').click(function() {
    $('#mindfulday_thumbs-down i').removeClass("active");
    $('#mindfulday_thumbs-up i').addClass("active");
    $('#mindfulday-opinion').collapse('show');
    $('#mindfulday-opinion').removeClass("bg-light-secondary");
    $('#mindfulday-opinion').addClass("bg-light-primary");
    $('#mindfulday-opinion form input:first').focus();
  });
  $('#mindfulday_thumbs-down').click(function() {
    $('#mindfulday_thumbs-up i').removeClass("active");
    $('#mindfulday_thumbs-down i').addClass("active");
    $('#mindfulday-opinion').collapse('show');
    $('#mindfulday-opinion').removeClass("bg-light-primary");
    $('#mindfulday-opinion').addClass("bg-light-secondary");
    $('#mindfulday-opinion form input:first').focus();
  });
  $("#mindfulday-opinion form").submit(function(event) {
    var feedback = $("#mindfulday-opinion form input:first").val();
    if(feedback != "" ) {
      $.get("https://api.myjson.com/bins/dfte6", function(data, textStatus, jqXHR) {
        data.mindfulday.push(feedback);
        $.ajax({
          url:"https://api.myjson.com/bins/dfte6",
          type:"PUT",
          data:JSON.stringify(data),
          contentType:"application/json; charset=utf-8",
          dataType:"json",
          success: function(data, textStatus, jqXHR){
            $("#mindfulday-opinion span" ).text("Merci!").show();
          }
        });
      });
    } else {
      $("#mindfulday-opinion span").text( "Invalide" ).show().fadeOut( 3000 );
    }
    event.preventDefault();
  });

})(jQuery); // End of use strict
