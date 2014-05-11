/*!
 * HalfStyle
 * Copyright 2014 Arbel Hakopian
 * Licensed under MIT (https://github.com/arbelh/HalfStyle/blob/master/license.md)
 */
$(document).ready(function(){
	var textToHalfStyle = $('.textToHalfStyle').text();
	var textToHalfStyleChars = textToHalfStyle.split('');
    var hiddenTextForAccessibility = $('.textToHalfStyle').text(); // preserve text for accessibility, like audio screen readers or brail readers for the blind or visually impaired
	$('.textToHalfStyle').html('');
    $('.textToHalfStyle').append('<span style="position: absolute !important;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);">' + hiddenTextForAccessibility + '</span>'); //append the text for accessibility
	$.each(textToHalfStyleChars, function (i, v) { //for accessibility, aria-hidden="true" will prevent the text from being seen by screen readers
	    $('.textToHalfStyle').append('<span aria-hidden="true" class="halfStyle" data-content="' + v + '">' + v + '</span>');
	});
});
