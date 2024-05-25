"use strict";
// Sun.ts
var Ententeich;
(function (Ententeich) {
    class Sun {
        x;
        y;
        radius;
        angle;
        constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.angle = 0;
        }
        move() {
            this.angle += 0.01;
        }
        draw() {
            let sunX = this.x + Math.cos(this.angle) * this.radius * 2;
            let sunY = this.y + Math.sin(this.angle) * this.radius;
            Ententeich.crc2.beginPath();
            Ententeich.crc2.arc(sunX, sunY, this.radius, 0, Math.PI * 2);
            Ententeich.crc2.closePath();
            Ententeich.crc2.fillStyle = "yellow";
            Ententeich.crc2.fill();
            let lineLength = 20;
            Ententeich.crc2.strokeStyle = "yellow";
            for (let i = 0; i < 8; i++) {
                let angle = (i / 8) * (2 * Math.PI);
                let startX = sunX + this.radius * Math.cos(angle);
                let startY = sunY + this.radius * Math.sin(angle);
                let endX = startX + lineLength * Math.cos(angle);
                let endY = startY + lineLength * Math.sin(angle);
                Ententeich.crc2.beginPath();
                Ententeich.crc2.moveTo(startX, startY);
                Ententeich.crc2.lineTo(endX, endY);
                Ententeich.crc2.stroke();
                Ententeich.crc2.closePath();
            }
        }
    }
    Ententeich.Sun = Sun;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=sun.js.map