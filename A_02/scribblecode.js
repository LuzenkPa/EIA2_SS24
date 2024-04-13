"use strict";
var scribblecode;
(function (scribblecode) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mouse_move", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.getElementsByTagName("div").addEventListener("click", logInfo);
        document.getElementsByTagName("div").addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        console.log(_event);
    }
    ;
    function setInfoBox() {
    }
    ;
    function logInfo() {
    }
    ;
})(scribblecode || (scribblecode = {}));
//# sourceMappingURL=scribblecode.js.map