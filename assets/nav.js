/* nav */

window.addEventListener('load', function() {

	console.log('loaded');

	function toggleClassJS(element, myclass) {
	  var classes = element.className;
	  if (classes) {
	    classes = classes.split(" ");
	  } else {
	    classes = [];
	  }
	  var i = classes.indexOf(myclass);
	  if (i < 0) {
	    classes.push(myclass);
	  } else {
	  	classes.splice(i, 1);
	  }
	  element.className = classes.join(" ");
	}

	var mobileNav = document.querySelector('#home_nav .mobile_nav_btn, #pricing_nav .mobile_nav_btn');

	console.log(mobileNav);

	mobileNav.addEventListener("click", (event) => {
	 	console.log('click');
		var nav = document.querySelector("div.nav");
		toggleClassJS(nav, "active");
		var navBtn = document.querySelector(".mobile_nav_btn");
		toggleClassJS(navBtn, "active");
	});

})