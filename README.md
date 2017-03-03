#Lab Kenneth 36

##Firebase vs Mongo Authentication

In Firebase, there is no need for a signup authentication and then a login authentication.
There is also no need to generate a hash for authentication such as we need to in Mongo.  


##::before vs. ::after

*::after* is a pseudo element which allows you to insert content onto a page from CSS (without it needing to be in the HTML). While the end result is not actually in the DOM, it appears on the page as if it is

*::before* is exactly the same only it inserts the content before any other content in the HTML instead of after.


## static - relative - absolute  - fixed

### Static
HTML elements are positioned static by default.

Static positioned elements are not affected by the top, bottom, left, and right properties.

An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page.

###Relative
Relative elements are positioned relative to their normal position.

Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

###Absolute
Absoluete elements are positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

###Fixed
Fixed elements are positioned relative to their viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

A fixed element does not leave a gap in the page where it would normally have been located.

## inline - block - inline-block

### Inline

Inline elements:
1. respect left & right margins and padding, but not top & bottom
2. cannot have a width and height set
3. allow other elements to sit to their left and right.

###block
1. respect all of those
2. force a line break after the block element

###Inline-block

1. allow other elements to sit to their left and right
2. respect top & bottom margins and padding
3. respect height and width
