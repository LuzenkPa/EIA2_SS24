"use strict";
// Cloud.ts
var Ententeich;
(function (Ententeich) {
    class Cloud {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        move() {
            this.x += 1;
            if (this.x > Ententeich.crc2.canvas.width)
                this.x = -50;
        }
        draw() {
            Ententeich.crc2.fillStyle = "#FFFFFF";
            Ententeich.crc2.beginPath();
            Ententeich.crc2.arc(this.x, this.y, 20, 0, Math.PI * 2);
            Ententeich.crc2.arc(this.x + 40, this.y, 25, 0, Math.PI * 2);
            Ententeich.crc2.arc(this.x + 80, this.y, 20, 0, Math.PI * 2);
            Ententeich.crc2.closePath();
            Ententeich.crc2.fill();
        }
    }
    Ententeich.Cloud = Cloud;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=cloud.js.map