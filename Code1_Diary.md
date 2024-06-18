**Code 1 Diary** 

**Entry 18.06.24 HTML**

HTML (Hypertext Markup Language) determines the structure of web pages.

Hypertext 
Text that is organized in order to connect related items, referst to links that connect web pages to one another (within a single website or between different ones)

Markup
Markup suggest the use of tags to define elements and add information. The markup includes special elements, which consists of the element name sourrounded by "<" and ">". Examples are: <head>, <body>, <canvas>, <audio>, <title>, <img>, <nav> etc.

Language 
Syntax refers to the rules and principles to write a correct code. Semantic means that the tags convey (transfer, provide, vermitteln) the actual meaning of what they are used for. 

Tags
You have opening tags (<ElementName>) and closing tags (</ElementName>). In between the two tags the content is written. Both tags and the content form an element. It is possible to put an element inside another element. Tags are used to define different types of content on a webpage. 
Different categories of tags:
- structure tags for the overall structure of the webpage 
- image tags
- formatting tags to change font, color etc. of the shown text 
- navigation tags to define connections with other resources 
- input (form) tags to collect information and enable input 
- audio and viedeo tags 
- style and programming tags to define the program 
- meta tags for non-visible information 

For further information about tags and their use:
https://www.tutorialstonight.com/html-tags-list-with-examples?utm_content=cmp-true
https://webcode.tools/


Attributes
Attributes contain extra information about the element or adjust their behavior.
<ElementName AttributeName="value"> 
For further information about attributes and their elements:
https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes 

Void elements
These elements does not contain any inner content or closing tags, beacause they do not wrap content to affect it, for example images. 

Form element
AIt's an element that is used to collect user#s information. 

The structure of an html document
1. <!DOCTYPE html> a required preamble to make sure the doc behaves correctly.
2. <html> </html> this element wraps the content of the entire pages (root element).
3. <head></head> it contains all the stuff i want to include on the html page, but isn't the content the viewers gonna see.
3. <meta charset="utf-8"> this element sets the character the doc should use (UTF-8 includes the majority of most characters of written languages). 
4. <meta name="viewport" content="width=device-width"> ensures the page renders at the width of viewport.
5. <title></title> sets the title of the page.
6. <body></body> contains all the content the web users gonna see. 