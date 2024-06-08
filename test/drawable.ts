namespace Test {
    
    // Klasse für zeichenbare Objekte
    export class Drawable {
        x: number;
        y: number;
        color: string;

        // Konstruktor der Drawable Klasse
        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }

        // Methode zum Zeichnen des Objekts
        draw(): void {
            // Zeichenroutine für zeichenbare Objekte
            console.log("Drawing object");
        }
    }
}
