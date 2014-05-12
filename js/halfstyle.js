/*!
 * HalfStyle
 * Copyright 2014 Arbel Hakopian
 * Licensed under MIT (https://github.com/arbelh/HalfStyle/blob/master/license.md)
 */
jQuery(function($) {
    var text, chars, $el, i;

    // Iterate over all class occurences
    $('.textToHalfStyle').each(function(idx, el) {
        $el = $(el);
        text = $el.text();
        chars = text.split('');

        // Set the screen-reader text
        $el.html('<span style="position: absolute !important;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);">' + text + '</span>');

        // Iterate over all chars in the text
        for (i = 0; i < chars.length; i++) {
            // Create a styled element for each character and append to container
            $el.append('<span aria-hidden="true" class="halfStyle" data-content="' + chars[i] + '">' + chars[i] + '</span>');
        }
    });
});
