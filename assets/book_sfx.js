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


	let $flowchart_background = $('#flowchart_background');
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
	let $circles = $('#circles');
	let $flowchart_pages = $('.flowchart_page');
	let $questionmark = $('#questionmark');

	let $flowchart_how = $('#flowchart_how');
	$flowchart_how.waypoint({
	  handler: function(direction) {
	  	if( direction == 'down') {
	  		$flowchart_background.addClass('active');
	  		$circles.addClass('active');
	  		$flowchart_how.addClass('active');
	  		$questionmark.addClass('active');
	  	} else {
	  		$flowchart_background.removeClass('active');
	  		$circles.removeClass('active');
	  		$flowchart_how.removeClass('active');
	  		$questionmark.removeClass('active');
	  	}
	  },
	  offset: 0
	})

	let $flowchart_word = $('#flowchart_word')
	$flowchart_word.waypoint({
	  handler: function(direction) {
	  	if( direction == 'down') {
	  		$circles.removeClass('active');
	  		$word_doc.addClass('active');
	  		$flowchart_word.addClass('active');
	  		$flowchart_how.removeClass('active');
	  		$questionmark.removeClass('active');
	  	} else {
	  		$circles.addClass('active');
	  		$word_doc.removeClass('active');
	  		$flowchart_word.removeClass('active');
	  		$flowchart_how.addClass('active');
	  		$questionmark.addClass('active');
	  	}
	  },
	  offset: animation_offset
	})

	let $flowchart_upload = $('#flowchart_upload');
	$flowchart_upload.waypoint({
	  handler: function(direction) {
	  	if( direction == 'down') {
	  		$timeline_box.addClass('active');
	  		$flowchart_upload.addClass('active');
	  		$flowchart_word.removeClass('active');
	  	} else {
	  		$timeline_box.removeClass('active');
	  		$flowchart_upload.removeClass('active');
	  		$flowchart_word.addClass('active');
	  	}
	  },
	  offset: animation_offset
	})

	let $flowchart_analyze = $('#flowchart_analyze');
	$flowchart_analyze.waypoint({
	  handler: function(direction) {
	  	if( direction == 'down') {
	  		$timeline_box.removeClass('active');
	  		$word_doc.removeClass('active');
	  		$analyze_doc.addClass('active');
	  		$flowchart_analyze.addClass('active');
	  		$flowchart_upload.removeClass('active');
	  	} else {
	  		$timeline_box.addClass('active');
	  		$word_doc.addClass('active');
	  		$analyze_doc.removeClass('active');
	  		$flowchart_analyze.removeClass('active');
	  		$flowchart_upload.addClass('active');
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

	let $flowchart_eyes_with_grid = $('#flowchart_eyes_with_grid');
	$flowchart_eyes_with_grid.waypoint({
	  handler: function(direction) {
	  	if( direction == 'down') {
	  		$analyze_doc.addClass('left');
	  		$grid_doc.addClass('active');
	  		$flowchart_eyes_with_grid.addClass('active');
	  		$flowchart_analyze.removeClass('active');
	  	} else {
	  		$analyze_doc.removeClass('left');
	  		$grid_doc.removeClass('active');
	  		$flowchart_eyes_with_grid.removeClass('active');
	  		$flowchart_analyze.addClass('active');
	  	}
	  },
	  offset: animation_offset
	})

	let $flowchart_grid_with_eyes = $('#flowchart_grid_with_eyes');
	$flowchart_grid_with_eyes.waypoint({
	  handler: function(direction) {
	  	if( direction == 'down') {
	  		$grid_doc.addClass('center');
	  		$grid_doc_eyes.addClass('active');
	  		$analyze_doc.removeClass('active');
	  		$flowchart_grid_with_eyes.addClass('active');
	  		$flowchart_eyes_with_grid.removeClass('active');
	  	} else {
	  		$grid_doc.removeClass('center');
	  		$grid_doc_eyes.removeClass('active');
	  		$analyze_doc.addClass('active');
	  		$flowchart_grid_with_eyes.removeClass('active');
	  		$flowchart_eyes_with_grid.addClass('active');
	  	}
	  },
	  offset: animation_offset
	})

	let $flowchart_grids_and_grids = $('#flowchart_grids_and_grids');
	$flowchart_grids_and_grids.waypoint({
	  handler: function(direction) {
	  	if( direction == 'down') {
	  		$grid_doc.removeClass('center').addClass('left');
	  		$grid_doc_eyes.removeClass('active');
	  		$timeline_circle.addClass('active');
	  		$grid_stack.addClass('active');
	  		$flowchart_grids_and_grids.addClass('active');
	  		$flowchart_grid_with_eyes.removeClass('active');
	  	} else {
	  		$grid_doc.addClass('center').removeClass('left');
	  		$grid_doc_eyes.addClass('active');
	  		$timeline_circle.removeClass('active');
	  		$grid_stack.removeClass('active');
	  		$flowchart_grids_and_grids.removeClass('active');
	  		$flowchart_grid_with_eyes.addClass('active');
	  	}
	  },
	  offset: animation_offset
	})

	let $flowchart_epubs = $('#flowchart_epubs');
	$flowchart_epubs.waypoint({
	  handler: function(direction) {
	  	if( direction == 'down') {
	  		$grid_doc.removeClass('active');
	  		$grid_stack.removeClass('active');
	  		$epubs.addClass('active');
	  		$timeline_circle.removeClass('active');
	  		$arrows.addClass('active');
	  		$('#timeline').addClass('end');
	  		$flowchart_epubs.addClass('active');
	  		$flowchart_grids_and_grids.removeClass('active');
	  	} else {
	  		$grid_doc.addClass('active');
	  		$grid_stack.addClass('active');
	  		$epubs.removeClass('active');
	  		$timeline_circle.addClass('active');
	  		$arrows.removeClass('active');
	  		$('#timeline').removeClass('end');
	  		$flowchart_epubs.removeClass('active');
	  		$flowchart_grids_and_grids.addClass('active');
	  	}
	  },
	  offset: animation_offset
	})






})