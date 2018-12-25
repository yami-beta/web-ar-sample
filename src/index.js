(() => {
  if (typeof AFRAME === "undefined") {
    return;
  }

  AFRAME.registerComponent("handle-marker-event", {
    init() {
      const marker = this.el;
      const frame = document.getElementById("marker-event-frame");
      marker.addEventListener("markerFound", () => {
        console.log("markerFound");
        frame.classList.add("found-marker");
      });
      marker.addEventListener("markerLost", () => {
        console.log("markerLost");
        frame.classList.remove("found-marker");
      });
    }
  });
})();
