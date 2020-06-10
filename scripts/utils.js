//_PROTOTYPES_METHODS_
Element.prototype.addElement = function (type = "div", attributes = {}) {
    var elem = document.createElement(type);
    this.appendChild(elem);
    for (var indAttr in attributes) {
        //special attributes (setters/other)
        if (attributes._text) { elem.textContent = attributes._text; continue; }
        if (attributes._html) { elem.innerHTML = attributes._html; continue; }
        elem.setAttribute(indAttr, attributes[indAttr]);
    }
    return elem;
};