"use strict";
var Test;
(function (Test) {
    // Klasse für zeichenbare Objekte
    class Drawable {
        x;
        y;
        color;
        // Konstruktor der Drawable Klasse
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        // Methode zum Zeichnen des Objekts
        draw() {
            // Zeichenroutine für zeichenbare Objekte
            console.log("Drawing object");
        }
    }
    Test.Drawable = Drawable;
})(Test || (Test = {}));
//# sourceMappingURL=drawable.js.map