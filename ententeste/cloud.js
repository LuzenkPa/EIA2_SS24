"use strict";
// cloud.ts
var Testenten;
(function (Testenten) {
    class Cloud {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        move() {
            this.x += 1;
            if (this.x > Testenten.crc2.canvas.width) {
                this.x = -50;
            }
        }
        draw() {
            Testenten.crc2.fillStyle = "#FFFFFF"; // Weiß
            Testenten.crc2.beginPath();
            Testenten.crc2.arc(this.x, this.y, 30, Math.PI * 0.5, Math.PI * 1.5);
            Testenten.crc2.arc(this.x + 30, this.y - 20, 30 * 0.6, Math.PI * 1, Math.PI * 2);
            Testenten.crc2.arc(this.x + 60, this.y, 30, Math.PI * 1.5, Math.PI * 0.5);
            Testenten.crc2.closePath();
            Testenten.crc2.fill();
        }
    }
    Testenten.Cloud = Cloud;
})(Testenten || (Testenten = {}));
//# sourceMappingURL=cloud.js.map