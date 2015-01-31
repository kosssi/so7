
/**
cbpAnimatedHeader.js v1.0.0
http://www.codrops.com

Licensed under the MIT license.
http://www.opensource.org/licenses/mit-license.php

Copyright 2013, Codrops
http://www.codrops.com
 */
var cbpAnimatedHeader;

cbpAnimatedHeader = (function() {
  var changeHeaderOn, didScroll, docElem, header, init, scrollPage, scrollY;
  init = function() {
    window.addEventListener("scroll", (function(event) {
      var didScroll;
      if (!didScroll) {
        didScroll = true;
        setTimeout(scrollPage, 250);
      }
    }), false);
  };
  scrollPage = function() {
    var didScroll, sy;
    sy = scrollY();
    if (sy >= changeHeaderOn) {
      classie.add(header, "navbar-shrink");
    } else {
      classie.remove(header, "navbar-shrink");
    }
    didScroll = false;
  };
  scrollY = function() {
    return window.pageYOffset || docElem.scrollTop;
  };
  docElem = document.documentElement;
  header = document.querySelector(".navbar-fixed-top");
  didScroll = false;
  changeHeaderOn = 300;
  init();
})();
