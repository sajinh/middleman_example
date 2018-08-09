# Preliminaries

In the following, data refers to the content of any webpage, excluding html tags.  Part of this content may be built dynamically from data stores. Middleman supports data stores in YAML and JSON formats, off the shelf; I guess that one can extend it to use other formats such as CSV.

# Organizing the source files for a web project

All source files should be under the 'source' directory. Separate sub-folders should be used for javascript and stylesheets. The html content may be separated into parts that change and that do not change. The former includes headers and footers of a page, navigation bars, menus etc.

## Layout
A layout file describes the structure of the html page. There can be different layouts for a web project. The layouts are stored under sub-folder 'layouts', and should be in a template format (erb is the default template used in middleman).

## Dynamic parts of the web project
The contents that change are stored in separate files; this arrangement helps maintain web projects easily regardless of their size. For example, the file index.html.erb, to be found under the source directory, only has information that is unqiue to the 'landing page'. The content that it shares with other pages are kept in layouts, partials, javascripts, and stylesheets directories.

## Stylesheets
Stylesheets may be maintained in css files, but it is more convenient to use a CSS pre-processor like SASS for this. In this project, SASS files are used. I have used the Kickstart CSS library for styling---i just copied certain files from their github repository (https://github.com/adamjgrant/kickstart), and adapted it to my needs.

## Javascript
Here, I use the JQuery library (version 3.3.1). I played around with coffeescript, but found no special need to use it. 
