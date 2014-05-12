#HalfStyle
<hr/>
##style each half of a character, independently and individually.
<hr/>
An easy to use plugin.

HalfStyle is a set of advanced CSS rules that allow styling each half of a character, independently and individually.

Works on any dynamic text, or a single character, and is all automated. All you need to do is add a class on the target text and the rest is taken care of.
<hr/>
#[**See a Demo**][1]
<hr/>
#[**Download**][2]
<hr/>
###For a single character:

Pure CSS. All you need to do is add the class `.halfStyle` class to the element containing the character you want to be half-styled.

For each element containing the character, a data attribute holds the character, for example `data-content="X"`, and the pseudo element uses `content:attr(data-content);` so the `.halfStyle:before` class will be dynamic and you won't need to hard code it for every instance.

###For Any text:

Simply add `.textToHalfStyle` class to the element containing the text.
The included jQuery snippet will do the rest of the job.
<hr/>
##License
- HalfStyle is licensed under the MIT License located at:
- https://github.com/arbelh/HalfStyle/blob/master/license.md
<hr/>

##Changelog
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

##Author
- Email: arbel.hakopian@gmail.com
- GitHub: https://github.com/arbelh
- Los Angeles, CA
<hr/>
[1]: http://jsfiddle.net/pd9yB/400/
[2]: https://github.com/arbelh/HalfStyle/archive/master.zip