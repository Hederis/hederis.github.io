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
        rect.top >= 0
      );
    }

    function scrolledToNext (el) {
      if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
        rect.top <= 0
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
        if (scrolledToNext($('#whyswitch'))) {
          // Reset bookframe to first page
          var childel = document.getElementById('bookopener');
          var topPos = childel.offsetTop;
          document.querySelector('#home .bookframe').scrollTop = topPos;
        }
      });
    }
  });