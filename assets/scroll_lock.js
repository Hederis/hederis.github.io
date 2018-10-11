  $( document ).ready(function() {
    // determine if an element is in the viewport
    function isElementVisibleInParent (el) {
      if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
      }
      var parrect = $('#home .bookframe')[0].getBoundingClientRect();
      var rect = el.getBoundingClientRect();
      return (
        rect.bottom <= parrect.bottom
      );
    }

    function isElementInViewport (el) {
      if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
      }
      var rect = el.getBoundingClientRect();

      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    // determine if the last bookpage is in the viewport
    var visible = isElementVisibleInParent($('#aboutus'));
    var parvisible = isElementInViewport($('#home .bookframe'));

    // start things off by unlocking the scroll function
    var locked = false;

    if (window.innerWidth > 768 || document.documentElement.clientWidth > 768) {
      $('body').bind('wheel', function(e) {
        visible = isElementVisibleInParent($('#aboutus'));
        parvisible = isElementInViewport($('#home'));
        if (visible === true) {
          locked = false;
        } else if (visible === false && parvisible === true) {
          locked = true;
        } else if (visible === false && parvisible === false) {
          locked = false;
        }
        // if scrollframe is locked,
        // only scroll the bookframe
        if (locked) {
          var $div = $('#home .bookframe');
          $div.scrollTop($div.scrollTop() - e.originalEvent.wheelDelta);
          return false;
        }
      });
    }

    // if scrolling back up, bind again.

    // var controller = new ScrollMagic.Controller();
    // var scene = new ScrollMagic.Scene({
    //   offset: 0, // starting scene, when reaching this element
    //   duration: 1300 // pin the element for a total of 400px
    // })
    // .setPin('#home'); // the element we want to pin

    // // Add Scene to ScrollMagic Controller
    // controller.addScene(scene);

    // function scrollCarousel() {
    //   if (document.body.scrollTop > 0 && document.body.scrollTop < 100 || document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 100) {
    //     $('.carousel').carousel(0);
    //   }
    //   if (document.body.scrollTop > 100 && document.body.scrollTop < 300 || document.documentElement.scrollTop > 100 && document.documentElement.scrollTop < 300) {
    //     $('.carousel').carousel(1);
    //   }
    //   if (document.body.scrollTop > 300 && document.body.scrollTop < 500 || document.documentElement.scrollTop > 300 && document.documentElement.scrollTop < 500) {
    //     $('.carousel').carousel(2);
    //   }
    //   if (document.body.scrollTop > 500 && document.body.scrollTop < 700 || document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 700) {
    //     $('.carousel').carousel(3);
    //   }
    //   if (document.body.scrollTop > 700 && document.body.scrollTop < 900 || document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 900) {
    //     $('.carousel').carousel(4);
    //   }
    //   if (document.body.scrollTop > 900 && document.body.scrollTop < 1100 || document.documentElement.scrollTop > 900 && document.documentElement.scrollTop < 1100) {
    //     $('.carousel').carousel(5);
    //   }
    // }
  });