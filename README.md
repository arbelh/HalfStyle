# HalfStyle
<hr/>

## Style each half or third of a character, vertically or horizontally, independently and individually.

<hr/>

An easy to use plugin.

HalfStyle is a set of advanced CSS rules that allow styling each half or third of a character, vertically or horizontally, independently and individually.

Works on any dynamic text, or a single character, and is all automated. All you need to do is add a class on the target text and the rest is taken care of.

It also preservs the original text's accessibility for screen readers for the blind or visually impaired.

<hr/>

# [**See a Demo**][1] or [**Another Demo**][3]

<hr/>

# [**Download Zip**][2]

<hr/>

### For a single character:

Pure CSS. All you need to do is add the classes `.halfStyle [-CustomClassName-]` to the element containing the character you want to be half-styled.

For each element containing the character, a data attribute holds the character, for example `data-content="X"`, and the pseudo element uses `content:attr(data-content);` so the `.halfStyle.[-CustomClassName-]:before` class will be dynamic and you won't need to hard code it for every instance.

### For Any text:

Simply add `.textToHalfStyle` class and data attribute `data-halfstyle="[-CustomClassName-]"` to the element containing the text.
The included jQuery snippet will do the rest of the job.

You can also define multiple Half-Style style-sets and tell the plugin which one to use on your desired element.

The included `demo.html` file holds several examples for you.
<hr/>

## License
- HalfStyle is licensed under the MIT License located at:
- https://github.com/arbelh/HalfStyle/blob/master/license.md
<hr/>

## Changelog
- v2.0.1
 - Fixes a Chrome 59 and above issue - Addresses a Chrome bug where Chrome fails to correctly render and repaint pseudo elements - I came up with this fix after many different tests.

- v2.0.0
 - Customized Half-Styles dynamic support is the major update. The plugin can use a customized Half-Style style-set via `data-halfstyle="[-CustomClassName-]"` on the target `.textToHalfStyle` elements. You can define multiple Half-Style style-sets and tell the plugin which one to use.
 - Prefixed javascript variable names to avoid conflicts with other scripts.
 - Added multiple demos in `demo.html`
- v1.2.0
 - Moving DOM write to outside of loop (better performance)
- v1.1.0
 - Replaced DOM ready function with the short version with failsafe $ alias
 - Initializing vars only once in each scope
 - Removed unnecessary searches in the DOM ( multiple $('') statements for the same item )
 - Shortened some code
 - Now supports more than one element with HalfStyle full text replacement (multiple `.textToHalfStyle` elements)
- v1.0.1
 - Added support for accessibility, like audio screen readers or brail readers for the blind or visually impaired.
 - Now the base char is selectable by mouse.
- v1.0.0 - First Version
<hr/>

## Author
- Email: arbel.hakopian@gmail.com
- GitHub: https://github.com/arbelh
- Los Angeles, CA
<hr/>

[1]: http://jsfiddle.net/arbel/pd9yB/1354/
[2]: https://github.com/arbelh/HalfStyle/archive/master.zip
[3]: http://jsfiddle.net/arbel/pd9yB/1353/