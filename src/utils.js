var log = console.log.bind(console);

var utils = {};

utils.isHTMLElement = function (el) {
    if (el instanceof HTMLElement) {
        return true;
    }
    throw Error(JSON.stringify(el) + " 不是HTML元素");
}
utils.getElement = function (el) {
    var tmp = el;
    if (typeof el === 'string') {
        el = document.querySelector(el);
    }
    if (el instanceof HTMLElement) {
        return el;
    }
    throw Error('输入错误: ' + JSON.stringify(tmp));
}
utils.trim = function (str) {
    if (!String.prototype.trim) {
      String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      };
    }
    return str.trim();
}
utils.hasClass = function (el, className) {
    if (utils.isHTMLElement(el)) {
        var classes = utils.trim(el.className).split(/\s+/);
        className = utils.trim(className) || '';
        if (classes.indexOf(className) !== -1) {
            return true;
        }
    }
    return false;
}
utils.addClass = function (el, className) {
    if (!utils.hasClass(el, className)) {
        el.className += ' ' + className;
    }
}
utils.removeClass = function (el, className) {
    if (utils.hasClass(el, className)) {
        el.className = el.className.replace(className, '');
    }
}