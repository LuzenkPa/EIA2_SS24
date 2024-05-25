"use strict";
var Ententeich;
(function (Ententeich) {
    window.addEventListener("load", handleLoad);
    let clouds = [];
    let yellowDucks = [];
    let brownDucks = [];
    let bees = [];
    let background;
    let sun;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Ententeich.crc2 = canvas.getContext("2d");
        drawBackground();
        background = Ententeich.crc2.getImageData(0, 0, Ententeich.crc2.canvas.width, Ententeich.crc2.canvas.height);
        for (let i = 0; i < 5; i++) {
            let duck = new Ententeich.Duck(Math.random() * Ententeich.crc2.canvas.width, Math.random() * Ententeich.crc2.canvas.height * 0.7 + Ententeich.crc2.canvas.height * 0.3, "#FFFF00", true);
            yellowDucks.push(duck);
        }
        for (let i = 0; i < 5; i++) {
            let duck = new Ententeich.Duck(Math.random() * Ententeich.crc2.canvas.width, Math.random() * Ententeich.crc2.canvas.height * 0.3 + Ententeich.crc2.canvas.height * 0.7, "#8B4513", false);
            brownDucks.push(duck);
        }
        for (let i = 0; i < 10; i++) {
            let bee = new Ententeich.Bee(Math.random() * Ententeich.crc2.canvas.width, Math.random() * Ententeich.crc2.canvas.height);
            bees.push(bee);
        }
        for (let i = 0; i < 3; i++) {
            let cloud = new Ententeich.Cloud(Math.random() * 500, Math.random() * 100 + 50);
            clouds.push(cloud);
        }
        sun = new Ententeich.Sun(100, 75, 40);
        window.setInterval(update, 20);
        window.setInterval(animateSun, 100);
    }
    function update() {
        Ententeich.crc2.putImageData(background, 0, 0);
        for (let duck of yellowDucks) {
            duck.move();
            duck.draw();
        }
        for (let duck of brownDucks) {
            duck.move();
            duck.draw();
        }
        for (let bee of bees) {
            bee.move();
            bee.draw();
        }
        for (let cloud of clouds) {
            cloud.move();
            cloud.draw();
        }
    }
    function drawBackground() {
        fillBackground();
        sun.draw();
        drawPond();
        drawMountains();
        drawTree(50, Ententeich.crc2.canvas.height * 0.9); // Left tree
        drawTree(Ententeich.crc2.canvas.width - 100, Ententeich.crc2.canvas.height * 0.9); // Right tree
    }
    function drawTree(x, y) {
        Ententeich.crc2.save();
        Ententeich.crc2.translate(x, y);
        Ententeich.crc2.fillStyle = "#8B4513"; // Brown trunk
        Ententeich.crc2.fillRect(-10, 0, 20, 100);
        Ententeich.crc2.fillStyle = "#0B610B"; // Dark green foliage
        Ententeich.crc2.beginPath();
        Ententeich.crc2.arc(0, -30, 50, 0, Math.PI * 2);
        Ententeich.crc2.arc(-30, -60, 50, 0, Math.PI * 2);
        Ententeich.crc2.arc(30, -60, 50, 0, Math.PI * 2);
        Ententeich.crc2.fill();
        Ententeich.crc2.restore();
    }
    function fillBackground() {
        let grassColor = "#90E162"; // Light green
        Ententeich.crc2.fillStyle = grassColor;
        Ententeich.crc2.fillRect(0, 0, Ententeich.crc2.canvas.width, Ententeich.crc2.canvas.height);
        let skyColor = "#48BCE1"; // Light blue
        Ententeich.crc2.fillStyle = skyColor;
        Ententeich.crc2.fillRect(0, 0, Ententeich.crc2.canvas.width, Ententeich.crc2.canvas.height * 0.4);
    }
    function drawPond() {
        Ententeich.crc2.fillStyle = "#6495ED"; // Blue
        Ententeich.crc2.beginPath();
        Ententeich.crc2.ellipse(Ententeich.crc2.canvas.width / 2, Ententeich.crc2.canvas.height * 0.7, 250, 100, 0, 0, Math.PI * 2);
        Ententeich.crc2.fill();
    }
    function drawMountains() {
        Ententeich.crc2.fillStyle = "#707070"; // Dark grey
        Ententeich.crc2.beginPath();
        Ententeich.crc2.moveTo(200, 250);
        Ententeich.crc2.quadraticCurveTo(400, -40, 600, 250);
        Ententeich.crc2.closePath();
        Ententeich.crc2.fill();
        Ententeich.crc2.fillStyle = "gray"; // Gray
        Ententeich.crc2.beginPath();
        Ententeich.crc2.moveTo(0, 250);
        Ententeich.crc2.quadraticCurveTo(150, 100, 370, 250);
        Ententeich.crc2.closePath();
        Ententeich.crc2.fill();
    }
    function animateSun() {
        sun.move();
        sun.draw();
    }
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=script.js.map