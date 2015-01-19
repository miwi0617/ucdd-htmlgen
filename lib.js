var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) {
    return "<h" + level + ">" + text + "</h" + level + ">"
}

lib.generateOrderedList = function(arrayOfText) {
 	var myString = "<ol>";
 	for(var i = 0; i < arrayOfText.length; i++)
 	{
 		myString += "<li>" + arrayOfText[i] + "</li>";
 	}
 	myString += "</ol>";
 	return myString
}

lib.generateUnorderedList = function(arrayOfText) {
    var list = "<ul>"
    for (var i = 0; i < arrayOfText.length; i++) {
    	list += "<li>" + arrayOfText[i] + "</li>"
    }
    list += "</ul>"
    return list
}

lib.generateTableRow = function (arrayOfText) {
    var list = "<tr>"
    for (var i = 0; i<arrayOfText.length; i++) {
	list += "<td>" + arrayOfText[i] + "</td>"
    }
    list += "</tr>"
    return list
}

lib.generateTable = function(twoDimensionalArrayOfText) {
var list = "<td>"
   for (var i = 0; i<twoDimensionalArrayOfText.length; i++) {
	for (var j = 0; j<twoDimensionalArrayOfText[i]; j++) {
	   
	   list += twoDimensionalArrayOfText[i]
           
        }
   
   }
list += "</td>"
    return list
}

lib.generateHyperLink = function(url, text) {
    return "<a href'" + url + "'>" + text + "</a>"
}

lib.generateFormTextField = function(name) {
    return "<input type='text' name='" + name + "'>"
}

lib.generateFormTextFieldWithLabel = function(name, label) {
    return '<label>' + label + '</label> <input type="text" name="'+ name+'">'
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    var list = "<select>"
    for (var i = 0; i < arrayOfText.length; i++) {
    	list += "<option value=" + arrayOfValues[i] + ">" + arrayOfText[i]+ "</option>"
    	
}
list += "</select>"
    return list
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    return "<iframe width=" + "'" + width + "'" + " height=" + "'" + height + "'" + " src=" + "'" + "//www.youtube.com/embed/" + videoId + "'" + " allowfullscreen" + "></iframe>"
    
}

module.exports = lib
