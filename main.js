function openMenu() {
	$('#menu-list').fadeIn('fast');
	$('.menu-btn').css('color', 'black');
	$('.menu-btn').html('EXIT');
	$('.menu-btn').attr('onclick', 'closeMenu()');
}

function closeMenu() {
	$('#menu-list').fadeOut('fast');
	$('.menu-btn').css('color', 'white');
	$('.menu-btn').html('MENU');
	$('.menu-btn').attr('onclick', 'openMenu()');
}