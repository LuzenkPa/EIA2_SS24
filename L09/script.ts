namespace Ententeich {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;

    let clouds: Cloud[] = [];
    let yellowDucks: Duck[] = [];
    let brownDucks: Duck[] = [];
    let bees: Bee[] = [];
    let background: ImageData;
    let sun: Sun;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let i = 0; i < 5; i++) {
            let duck = new Duck(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height * 0.7 + crc2.canvas.height * 0.3, "#FFFF00", true);
            yellowDucks.push(duck);
        }

        for (let i = 0; i < 5; i++) {
            let duck = new Duck(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height * 0.3 + crc2.canvas.height * 0.7, "#8B4513", false);
            brownDucks.push(duck);
        }

        for (let i = 0; i < 10; i++) {
            let bee = new Bee(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height);
            bees.push(bee);
        }

        for (let i = 0; i < 3; i++) {
            let cloud = new Cloud(Math.random() * 500, Math.random() * 100 + 50);
            clouds.push(cloud);
        }

        sun = new Sun(100, 75, 40);

        window.setInterval(update, 20);
        window.setInterval(animateSun, 100);
    }

    function update(): void {
        crc2.putImageData(background, 0, 0);

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

    function drawBackground(): void {
        fillBackground();
        sun.draw();
        drawPond();
        drawMountains();
        drawTree(50, crc2.canvas.height * 0.9); // Left tree
        drawTree(crc2.canvas.width - 100, crc2.canvas.height * 0.9); // Right tree
    }

    function drawTree(x: number, y: number): void {
        crc2.save();
        crc2.translate(x, y);

        crc2.fillStyle = "#8B4513"; // Brown trunk
        crc2.fillRect(-10, 0, 20, 100);

        crc2.fillStyle = "#0B610B"; // Dark green foliage
        crc2.beginPath();
        crc2.arc(0, -30, 50, 0, Math.PI * 2);
        crc2.arc(-30, -60, 50, 0, Math.PI * 2);
        crc2.arc(30, -60, 50, 0, Math.PI * 2);
        crc2.fill();

        crc2.restore();
    }

    function fillBackground(): void {
        let grassColor: string = "#90E162"; // Light green
        crc2.fillStyle = grassColor;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        let skyColor: string = "#48BCE1"; // Light blue
        crc2.fillStyle = skyColor;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height * 0.4);
    }

    function drawPond(): void {
        crc2.fillStyle = "#6495ED"; // Blue
        crc2.beginPath();
        crc2.ellipse(crc2.canvas.width / 2, crc2.canvas.height * 0.7, 250, 100, 0, 0, Math.PI * 2);
        crc2.fill();
    }

    function drawMountains(): void {
        crc2.fillStyle = "#707070"; // Dark grey
        crc2.beginPath();
        crc2.moveTo(200, 250);
        crc2.quadraticCurveTo(400, -40, 600, 250);
        crc2.closePath();
        crc2.fill();

        crc2.fillStyle = "gray"; // Gray
        crc2.beginPath();
        crc2.moveTo(0, 250);
        crc2.quadraticCurveTo(150, 100, 370, 250);
        crc2.closePath();
        crc2.fill();
    }

    function animateSun(): void {
        sun.move();
        sun.draw();
    }
}
