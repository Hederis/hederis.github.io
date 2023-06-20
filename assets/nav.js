/* nav */

$(function() {

	$('.mobile_nav_btn').on('click', function() {
		console.log('click');
		$('div.nav').toggleClass('active');
	})

}