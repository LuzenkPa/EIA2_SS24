"use strict";
// main.ts
/// <reference path="bee.ts" />
/// <reference path="duck.ts" />
var Testente;
(function (Testente) {
    window.addEventListener("load", handleLoad);
    let clouds = [];
    let yellowDucks = [];
    let brownDucks = [];
    let bees = [];
    let background;
    let sunAngle = 0;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Testente.crc2 = canvas.getContext("2d");
        drawBackground();
        background = Testente.crc2.getImageData(0, 0, Testente.crc2.canvas.width, Testente.crc2.canvas.height);
        // Gelbe Enten im Teich generieren
        for (let i = 0; i < 4; i++) {
            let duck = new Testente.Duck(350 + i * 50, 400, "#FFFF00", true, 0.1);
            yellowDucks.push(duck);
        }
        // Braune Enten draußen generieren
        let brownDuck1 = new Testente.Duck(200, 520, "#8B4513", false, 1);
        brownDucks.push(brownDuck1);
        let brownDuck2 = new Testente.Duck(-50, 450, "#A0522D", false, 1.5);
        brownDucks.push(brownDuck2);
        let brownDuck3 = new Testente.Duck(700, 400, "#8B4513", false, 1);
        brownDucks.push(brownDuck3);
        // Wolken generieren
        for (let i = 0; i < 7; i++) {
            let cloud = new Testente.Cloud(Math.random() * 500, Math.random() * 200);
            clouds.push(cloud);
        }
        // Bienen generieren
        for (let i = 0; i < 3; i++) {
            let bee = new Testente.Bee(Math.random() * Testente.crc2.canvas.width, Math.random() * Testente.crc2.canvas.height);
            bees.push(bee);
        }
        // Animation starten
        setInterval(update, 80);
    }
    function drawBackground() {
        // Wiese
        Testente.crc2.fillStyle = "#90E162";
        Testente.crc2.fillRect(0, 0, Testente.crc2.canvas.width, Testente.crc2.canvas.height);
        // Himmel
        Testente.crc2.fillStyle = "#48BCE1";
        Testente.crc2.fillRect(0, 0, Testente.crc2.canvas.width, Testente.crc2.canvas.height * 0.4);
        // Sonne
        Testente.crc2.save();
        Testente.crc2.translate(50, 50);
        drawSun();
        Testente.crc2.restore();
        // See
        Testente.crc2.fillStyle = "#4676E0";
        Testente.crc2.beginPath();
        Testente.crc2.ellipse(Testente.crc2.canvas.width / 2, Testente.crc2.canvas.height * 0.7, 150, 60, 0, 0, 2 * Math.PI);
        Testente.crc2.fill();
        Testente.crc2.closePath();
        // Baum links vom Teich
        drawTree(150, Testente.crc2.canvas.height * 0.7);
    }
    function drawSun() {
        // Sonnenkreis
        Testente.crc2.fillStyle = "yellow";
        Testente.crc2.beginPath();
        Testente.crc2.arc(0, 0, 40, 0, Math.PI * 2);
        Testente.crc2.fill();
        Testente.crc2.closePath();
        // Sonnenstrahlen
        Testente.crc2.strokeStyle = "yellow";
        for (let i = 0; i < 8; i++) {
            let angle = (i / 8) * (2 * Math.PI);
            let startX = 40 * Math.cos(angle);
            let startY = 40 * Math.sin(angle);
            let endX = (40 + 20) * Math.cos(angle);
            let endY = (40 + 20) * Math.sin(angle);
            Testente.crc2.beginPath();
            Testente.crc2.moveTo(startX, startY);
            Testente.crc2.lineTo(endX, endY);
            Testente.crc2.stroke();
        }
    }
    function drawTree(x, y) {
        Testente.crc2.save();
        Testente.crc2.translate(x, y);
        // Stamm
        Testente.crc2.fillStyle = "#8B4513";
        Testente.crc2.fillRect(-10, 0, 20, 50);
        // Blätter
        Testente.crc2.fillStyle = "green";
        Testente.crc2.beginPath();
        Testente.crc2.ellipse(0, -20, 35, 60, 0, 0, 2 * Math.PI);
        Testente.crc2.ellipse(0, -50, 30, 50, 0, 0, 2 * Math.PI);
        Testente.crc2.ellipse(0, -70, 25, 40, 0, 0, 2 * Math.PI);
        Testente.crc2.fill();
        Testente.crc2.closePath();
        Testente.crc2.restore();
    }
    function update() {
        Testente.crc2.putImageData(background, 0, 0);
        // Sonne drehen
        sunAngle += 0.001; // Drehgeschwindigkeit
        Testente.crc2.save();
        Testente.crc2.translate(50, 50); // Verschieben zum Mittelpunkt der Sonne
        Testente.crc2.rotate(sunAngle);
        drawSun();
        Testente.crc2.restore();
        // Objekte aktualisieren und zeichnen
        for (let cloud of clouds) {
            cloud.move();
            cloud.draw();
        }
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
    }
})(Testente || (Testente = {}));
//# sourceMappingURL=script.js.map