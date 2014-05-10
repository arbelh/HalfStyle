/*!
 * HalfStyle
 * Copyright 2014 Arbel Hakopian
 * Licensed under MIT (https://github.com/arbelh/HalfStyle/license.md)
 */
$(document).ready(function(){
	var textToHalfStyle = $('.textToHalfStyle').text();
	var textToHalfStyleChars = textToHalfStyle.split('');
	$('.textToHalfStyle').html('');
	$.each(textToHalfStyleChars, function (i, v) {
	    $('.textToHalfStyle').append('<span class="halfStyle" data-content="' + v + '">' + v + '</span>');
	});
});
