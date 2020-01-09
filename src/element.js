
const element = {
     /**
     *  @function element.get Get an HTML Element
     *  @param {String} arg The id or class of the element
     *  @return {Element} HTML Element
    */
    get:function (arg){
        return document.querySelector(arg);
    }
}