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


namespace Ententeich {
    window.addEventListener("load", handleLoad)
    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawScene();
    }

    function drawScene(): void {
        drawBackground();
        drawMountains();
        drawTeich();
        drawSun();
        drawCloud(200, 100, 30);
        drawCloud(400, 50, 40);
        drawDucks();
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0.2, "#87CEEB"); // Himmelblau
        gradient.addColorStop(0.8, "#F5F5DC"); // Sandbeige

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawMountains(): void {
        crc2.fillStyle = "#D3D3D3"; // Leichtes Grau
        crc2.beginPath();
        crc2.moveTo(800, 100);
        crc2.lineTo(600, 400); 
        crc2.lineTo(1000, 400); 
        crc2.closePath();
        crc2.fill();
    }

    function drawTeich(): void {
        crc2.fillStyle = "#6495ED"; // Blau
        crc2.beginPath();
        crc2.ellipse(crc2.canvas.width / 2, crc2.canvas.height * 0.7, 400, 150, 0, 0, Math.PI * 2);
        crc2.fill();
    }

    function drawSun(): void {
        crc2.fillStyle = "#FFFF00"; // Gelb
        crc2.beginPath();
        crc2.arc(50, 50, 40, 0, Math.PI * 2);
        crc2.fill();
    }

    function drawCloud(x: number, y: number, radius: number): void {
        crc2.fillStyle = "#FFFFFF"; 
        crc2.beginPath();
        crc2.arc(x, y, radius, Math.PI * 0.5, Math.PI * 1.5);
        crc2.arc(x + radius * 1.2, y - radius * 0.8, radius * 0.6, Math.PI * 1, Math.PI * 2);
        crc2.arc(x + radius * 2.4, y, radius, Math.PI * 1.5, Math.PI * 0.5);
        crc2.closePath();
        crc2.fill();
    }

    function drawDucks(): void {
        drawDuck(300, 500);
        drawDuck(500, 550);
        drawDuck(700, 520);
    }

    function drawDuck(x: number, y: number): void {
        crc2.fillStyle = "#FFA500"; // Orange
        crc2.beginPath();
        crc2.arc(x, y, 30, 0, Math.PI * 2);
        crc2.fill();

        // Kopf
        crc2.fillStyle = "#FFA500"; 
        crc2.beginPath();
        crc2.arc(x + 25, y - 10, 10, 0, Math.PI * 2);
        crc2.fill();

        // Schnabel
        crc2.fillStyle = "#FFA500"; 
        crc2.beginPath();
        crc2.moveTo(x + 35, y - 10);
        crc2.lineTo(x + 50, y - 10);
        crc2.lineTo(x + 35, y);
        crc2.closePath();
        crc2.fill();
    }
}
