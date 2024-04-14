"use strict";
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.getElementById("div0")?.addEventListener("click", logInfo);
        document.getElementById("div0")?.addEventListener("keyup", logInfo);
        document.getElementById("div1")?.addEventListener("click", logInfo);
        document.getElementById("div1")?.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let span = document.getElementById("span");
        let X = _event.clientX;
        let Y = _event.clientY;
        let offsetX = 10;
        let offsetY = 10;
        if (span) {
            span.innerHTML = `${X}, ${Y}, ${_event.target}`;
            span.style.left = _event.clientX + offsetX + "px";
            span.style.top = _event.clientY + offsetY + "px";
        }
    }
    function logInfo(_event) {
        console.log(_event.type, _event.target, _event.currentTarget, _event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=scribblecode.js.map