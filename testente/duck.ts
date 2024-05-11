export class Duck {
    x: number;
    y: number;
    color: string;
    state: string; // z.B. "schwimmen", "tauchen", "laufen"
    
    constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
       // this.state = "schwimmen";
    }

    draw(context: CanvasRenderingContext2D) {
    }
}
