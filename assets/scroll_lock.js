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

    function scrollBook (cover) {
      var y = document.querySelector('#home .bookframe').scrollTop;
      var c = y;
      if (c < 0) c = 0;
      else if (c > 400) c = 400;
      c = c * -15 / 100;
      cover.css('transform', `perspective(1600px) rotateY(${c}deg)`);
    }

    // determine if the last bookpage is in the viewport
    var visible = isElementVisibleInParent($('#aboutus'));
    var parvisible = isElementInViewport($('#home .bookframe'));

    // start things off by unlocking the scroll function
    var locked = false;
    var cover = $('#top_book .book_cover');

    $('#abs').bind('mousewheel DOMMouseScroll', function(e) {
      var scrollTo = 0;
      e.preventDefault();
      if (e.type == 'mousewheel') {
          scrollTo = (e.originalEvent.wheelDelta * -1);
          alert("w"+e.originalEvent.wheelDelta);
      }
      else if (e.type == 'DOMMouseScroll') {
          scrollTo = 40 * e.originalEvent.detail;
          alert("d"+e.originalEvent.detail);
      }
      $(this).scrollTop(scrollTo + $(this).scrollTop());
      
    });

    if (window.innerWidth > 768 || document.documentElement.clientWidth > 768) {
      $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(e) {
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
          if (e.type == 'mousewheel') {
            var scrollTo = ($div.scrollTop() - e.originalEvent.wheelDelta);
          }
          else if (e.type == 'DOMMouseScroll') {
            var scrollTo = $div.scrollTop() - e.originalEvent.detail;
          }
          $div.scrollTop(scrollTo);
          scrollBook(cover);
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