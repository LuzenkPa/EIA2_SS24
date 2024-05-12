"use strict";
/*import { Background } from "./background";
import { Mountain } from "./mountain";
import { Sun } from "./sun";
import { Teich } from "./teich";
import { Duck } from "./duck";
import { Bee } from "./bee";

class Main {
    constructor() {
        this.init();
    }

    init() {
        const szene = new szene();
        szene.animate();
    }
}

new Main();*/
var Ententeich;
(function (Ententeich) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Ententeich.crc2 = canvas.getContext("2d");
        drawScene();
    }
    function drawScene() {
        drawBackground();
        drawMountains();
        drawTeich();
        drawSun();
        drawCloud(200, 100, 30);
        drawCloud(400, 50, 40);
        drawDucks();
    }
    function drawBackground() {
        let gradient = Ententeich.crc2.createLinearGradient(0, 0, 0, Ententeich.crc2.canvas.height);
        gradient.addColorStop(0.2, "#87CEEB"); // Himmelblau
        gradient.addColorStop(0.8, "#F5F5DC"); // Sandbeige
        Ententeich.crc2.fillStyle = gradient;
        Ententeich.crc2.fillRect(0, 0, Ententeich.crc2.canvas.width, Ententeich.crc2.canvas.height);
    }
    function drawMountains() {
        Ententeich.crc2.fillStyle = "#D3D3D3"; // Leichtes Grau
        Ententeich.crc2.beginPath();
        Ententeich.crc2.moveTo(800, 100);
        Ententeich.crc2.lineTo(600, 400);
        Ententeich.crc2.lineTo(1000, 400);
        Ententeich.crc2.closePath();
        Ententeich.crc2.fill();
    }
    function drawTeich() {
        Ententeich.crc2.fillStyle = "#6495ED"; // Blau
        Ententeich.crc2.beginPath();
        Ententeich.crc2.ellipse(Ententeich.crc2.canvas.width / 2, Ententeich.crc2.canvas.height * 0.7, 400, 150, 0, 0, Math.PI * 2);
        Ententeich.crc2.fill();
    }
    function drawSun() {
        Ententeich.crc2.fillStyle = "#FFFF00"; // Gelb
        Ententeich.crc2.beginPath();
        Ententeich.crc2.arc(50, 50, 40, 0, Math.PI * 2);
        Ententeich.crc2.fill();
    }
    function drawCloud(x, y, radius) {
        Ententeich.crc2.fillStyle = "#FFFFFF";
        Ententeich.crc2.beginPath();
        Ententeich.crc2.arc(x, y, radius, Math.PI * 0.5, Math.PI * 1.5);
        Ententeich.crc2.arc(x + radius * 1.2, y - radius * 0.8, radius * 0.6, Math.PI * 1, Math.PI * 2);
        Ententeich.crc2.arc(x + radius * 2.4, y, radius, Math.PI * 1.5, Math.PI * 0.5);
        Ententeich.crc2.closePath();
        Ententeich.crc2.fill();
    }
    function drawDucks() {
        drawDuck(300, 500);
        drawDuck(500, 550);
        drawDuck(700, 520);
    }
    function drawDuck(x, y) {
        Ententeich.crc2.fillStyle = "#FFA500"; // Orange
        Ententeich.crc2.beginPath();
        Ententeich.crc2.arc(x, y, 30, 0, Math.PI * 2);
        Ententeich.crc2.fill();
        // Kopf
        Ententeich.crc2.fillStyle = "#FFA500";
        Ententeich.crc2.beginPath();
        Ententeich.crc2.arc(x + 25, y - 10, 10, 0, Math.PI * 2);
        Ententeich.crc2.fill();
        // Schnabel
        Ententeich.crc2.fillStyle = "#FFA500";
        Ententeich.crc2.beginPath();
        Ententeich.crc2.moveTo(x + 35, y - 10);
        Ententeich.crc2.lineTo(x + 50, y - 10);
        Ententeich.crc2.lineTo(x + 35, y);
        Ententeich.crc2.closePath();
        Ententeich.crc2.fill();
    }
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=script.js.map