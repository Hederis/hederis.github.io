/* nav */

$(function() {

	console.log("loaded!");

	$('.mobile_nav_btn').on('click', function() {
		console.log('click');
		$('div.nav').toggleClass('active');
	})

})