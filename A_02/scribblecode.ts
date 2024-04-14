namespace EventInspector {
  window.addEventListener("load", handleLoad);

  function handleLoad(): void {
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

  function setInfoBox(_event: MouseEvent) {
    let span: HTMLElement | null = document.getElementById("span");
    let X: number = _event.clientX;
    let Y: number = _event.clientY;
    let offsetX: number = 10;
    let offsetY: number = 10;
    if (span) {
      span.innerHTML = `${X}, ${Y}, ${_event.target}`;
      span.style.left = _event.clientX + offsetX + "px";
      span.style.top = _event.clientY + offsetY + "px";
    }
  }

  function logInfo(_event: Event) {
    console.log(_event.type, _event.target, _event.currentTarget, _event);
  }
}