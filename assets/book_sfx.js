$(function() {

	let animation_offset = 100
	let spin = .01 /* higher number == faster */



	/* scroll-based f/x (not counting timeline) */

	let $cover = $('#top_book .book_cover');
	let $bottom_cover = $('#bottom_book .book_cover');
	let $pinwheel = $('#flowchart_background');

	window.onscroll = (e) => {
		let y = document.body.scrollTop;

		var c = y;
		if (c < 0) c = 0;
		else if (c > 400) c = 400;
		c = c * -15 / 100;
		$cover.css('transform', `perspective(1600px) rotateY(${c}deg)`);

		var b = document.body.scrollHeight - window.innerHeight;
		var cc = y
		ccc = (cc - b) * 15 / 100;
		if(ccc < -50) ccc = -50;
		if(ccc > 0) ccc = 0
		$bottom_cover.css('transform', `perspective(1600px) rotateY(${ccc}deg)`);

		let z = y * spin;
		$pinwheel.css('transform', `rotateZ(${z}deg)`);
	}








	/* nav */

	$('div.nav h1').on('click', () => {
		console.log('click')
		$('div.nav').toggleClass('active');
		$('.mobile_nav_btn').toggleClass('active');
	})





	/* flowchart animations */

	let $timeline = $('#timeline');
	var waypoint_timeline_start = new Waypoint({
	  element: document.getElementById('flowchart_word'),
	  handler: function(direction) {
	  	if( direction == 'down') {
	  		$('#timeline').addClass('fixed').removeClass('end');
	  	} else {
	  		$('#timeline').removeClass('fixed').removeClass('end');
	  	}
	  }
	})



	let $word_doc = $('#word_doc');
	let $analyze_doc = $('#analyze_doc');
	let $analyze_doc_eyes = $('#analyze_doc .eyes');
	let $grid_doc = $('#grid_doc');
	let $grid_doc_eyes = $('#grid_doc .eyes');
	let $grid_stack = $('#grid_stack');
	let $epubs = $('#epubs');
	let $timeline_box = $('#timeline_box');
	let $timeline_circle = $('#timeline_circle');
	let $arrows = $('#arrows');

	var waypoint_word_doc_start = new Waypoint({
	  element: document.getElementById('flowchart_word'),
	  handler: function(direction) {
	  	if( direction == 'down') {
	  		$word_doc.addClass('active');
	  	} else {
	  		$word_doc.removeClass('active');
	  	}
	  },
	  offset: animation_offset
	})

	var waypoint_word_upload = new Waypoint({
	  element: document.getElementById('flowchart_upload'),
	  handler: function(direction) {
	  	if( direction == 'down') {
	  		$timeline_box.addClass('active');
	  	} else {
	  		$timeline_box.removeClass('active');
	  	}
	  },
	  offset: animation_offset
	})

	var waypoint_word_doc_end = new Waypoint({
	  element: document.getElementById('flowchart_analyze'),
	  handler: function(direction) {
	  	if( direction == 'down') {
	  		$timeline_box.removeClass('active');
	  		$word_doc.removeClass('active');
	  		$analyze_doc.addClass('active');
	  	} else {
	  		$timeline_box.addClass('active');
	  		$word_doc.addClass('active');
	  		$analyze_doc.removeClass('active');
	  	}
	  },
	  offset: animation_offset
	})

	var waypoint_analyze_eyes = new Waypoint({
	  element: document.getElementById('flowchart_eyes'),
	  handler: function(direction) {
	  	if( direction == 'down') {
	  		$analyze_doc_eyes.addClass('active');
	  	} else {
	  		$analyze_doc_eyes.removeClass('active');
	  	}
	  },
	  offset: animation_offset
	})

	var waypoint_eyes_with_grid = new Waypoint({
	  element: document.getElementById('flowchart_eyes_with_grid'),
	  handler: function(direction) {
	  	if( direction == 'down') {
	  		$analyze_doc.addClass('left');
	  		$grid_doc.addClass('active');
	  	} else {
	  		$analyze_doc.removeClass('left');
	  		$grid_doc.removeClass('active');
	  	}
	  },
	  offset: animation_offset
	})

	var waypoint_grid_with_eyes = new Waypoint({
	  element: document.getElementById('flowchart_grid_with_eyes'),
	  handler: function(direction) {
	  	if( direction == 'down') {
	  		$grid_doc.addClass('center');
	  		$grid_doc_eyes.addClass('active');
	  		$analyze_doc.removeClass('active');
	  	} else {
	  		$grid_doc.removeClass('center');
	  		$grid_doc_eyes.removeClass('active');
	  		$analyze_doc.addClass('active');
	  	}
	  },
	  offset: animation_offset
	})

	var waypoint_grids_and_grids = new Waypoint({
	  element: document.getElementById('flowchart_grids_and_grids'),
	  handler: function(direction) {
	  	if( direction == 'down') {
	  		$grid_doc.removeClass('center').addClass('left');
	  		$grid_doc_eyes.removeClass('active');
	  		$timeline_circle.addClass('active');
	  		$grid_stack.addClass('active');
	  	} else {
	  		$grid_doc.addClass('center').removeClass('left');
	  		$grid_doc_eyes.addClass('active');
	  		$timeline_circle.removeClass('active');
	  		$grid_stack.removeClass('active');
	  	}
	  },
	  offset: animation_offset
	})

	var waypoint_epubs = new Waypoint({
	  element: document.getElementById('flowchart_epubs'),
	  handler: function(direction) {
	  	if( direction == 'down') {
	  		$grid_doc.removeClass('active');
	  		$grid_stack.removeClass('active');
	  		$epubs.addClass('active');
	  		$timeline_circle.removeClass('active');
	  		$arrows.addClass('active');
	  		$('#timeline').addClass('end');
	  	} else {
	  		$grid_doc.addClass('active');
	  		$grid_stack.addClass('active');
	  		$epubs.removeClass('active');
	  		$timeline_circle.addClass('active');
	  		$arrows.removeClass('active');
	  		$('#timeline').removeClass('end');
	  	}
	  },
	  offset: animation_offset
	})






})