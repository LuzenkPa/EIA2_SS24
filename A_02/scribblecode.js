"use strict";
var scribblecode;
(function (scribblecode) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.getElementById("div0")?.addEventListener("keyup", logInfo);
        document.getElementById("div0")?.addEventListener("click", logInfo);
        document.getElementById("div1")?.addEventListener("keyup", logInfo);
        document.getElementById("div1")?.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
    }
    ;
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let span = document.getElementById("span");
        span.style.top = y + "px";
        span.style.left = x + "px";
        span.innerHTML = "Mouseposition " + x + " " + y + _event.target;
    }
    ;
    function logInfo(_event) {
        console.log("type: " + _event.type);
        console.log("target: " + _event.target);
        console.log("currentTarget: " + _event.currentTarget);
        console.log("event: " + _event);
    }
})(scribblecode || (scribblecode = {}));
//# sourceMappingURL=scribblecode.js.map