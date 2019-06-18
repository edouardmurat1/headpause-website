(function($) {
  "use strict"; // Start of use strict

  var lang = $('html').attr('lang')

  var isTouchDevice = function() {
    return (('ontouchstart' in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0));
  };

  // lazy loading of images with data-src tag
  $('.lazy').lazy();

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 80)
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
      if(lang=='fr') {
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

  document.addEventListener("DOMContentLoaded",function() {
    var defaultView = (isTouchDevice()) ? 'listWeek' : 'month';
    var locale = (lang=='fr') ? 'fr' : 'en';

    var calendarEl = document.getElementById('eventcalendar');
    var calcal = new FullCalendar.Calendar(calendarEl, {
      locale: locale,
      resourceAreaWidth: 230,
      editable: false,
      aspectRatio: 1,
      scrollTime: '00:00',
      header: {
        left: 'title',
        center: false,
        right: 'prev,next'
      },
      defaultView: defaultView,
      eventLimit: 2,
      hiddenDays: [0],
      weekends: true,
      events: [
        {
          title: 'Méditation gratuite',
          description: 'Groupe de méditation de pleine conscience gratuit',
          startTime:'18:30:00',
          endTime: '20:00:00',
          daysOfWeek: [5],
          startRecur: '2019-06-21',
          endRecur: '2019-07-27',
          url: 'https://tinyurl.com/yxrd38hd'
        },
        {
          title: 'Marche / Walk',
          description: 'Marche consciente au Mont Royal / Mindful walk on Mount Royal',
          startTime: '18:00:00',
          endTime: '19:30:00',
          daysOfWeek: [3],
          startRecur: '2019-06-05',
          endRecur: '2019-06-26',
          url: 'https://tinyurl.com/y2b22dgr'
        },
        {
          title: 'Pleine Conscience 101',
          description: 'Pleine Conscience 101: Atelier d\'introduction à la pleine conscience',
          start: '2019-06-11T18:00:00',
          end: '2019-06-11T20:00:00',
          url:'https://tinyurl.com/y64fqsr7'
        },
        {
          title:'Mindfulness 101',
          description: 'Mindfulness 101: Introductory workshop to mindfulness',
          start: '2019-06-13T18:00:00',
          end: '2019-06-13T20:00:00',
          url:'https://tinyurl.com/y3hlp645'
        },
        {
          title:'Méditation en nature',
          description: 'Groupe de méditation de pleine conscience en nature',
          start:'2019-06-15T10:00:00',
          end:'2019-06-15T11:00:00',
          url: 'https://tinyurl.com/yy3byab4'
        },
        {
          title: 'Introduction FR',
          description: 'Introduction à la pleine conscience',
          start: '2019-07-04T11:30:00',
          end: '2019-07-04T12:30:00',
          url:'https://tinyurl.com/y5mabmy2'
        },
        {
          title:'Méditation guidée',
          description: 'Séance de méditation de pleine conscience',
          start: '2019-07-04T12:30:00',
          end: '2019-07-04T13:30:00',
          url:'https://tinyurl.com/yyc538jp'
        },
        {
          title: 'Introduction EN',
          description: 'Introduction to mindfulness',
          start: '2019-07-05T11:30:00',
          end: '2019-07-05T12:30:00',
          url:'https://tinyurl.com/yxtytqyj'
        },
        {
          title:'Guided meditation',
          description: 'Meditation session to practice mindfulness',
          start: '2019-07-05T12:30:00',
          end: '2019-07-05T13:30:00',
          url:'https://tinyurl.com/yy8p6d4g'
        },
        {
          title:'Méditation au parc',
          description: 'Méditation au parc, pleine conscience en nature',
          startTime: '10:30:00',
          endTime: '11:30:00',
          daysOfWeek: [3,4],
          startRecur: '2019-06-18',
          endRecur: '2019-06-28',
          url:'https://tinyurl.com/y4yceuqz'
        }
      ],
      eventMouseEnter: function (mouseEnterInfo) {
        $(mouseEnterInfo.el).tooltip({
          title: mouseEnterInfo.event.extendedProps.description
        });
      },
      eventClick: function(info) {
        if (info.event.url) {
          info.jsEvent.preventDefault();
          window.open(info.event.url, "_blank");
          return false;
        }
      }
    }).render();

  });

})(jQuery); // End of use strict
