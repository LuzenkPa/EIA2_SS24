import { Vector } from './vector';

namespace Teste {
    export class Moveable {
        x: number;
        y: number;
        velocity: Vector;

        constructor(x: number, y: number, velocity: Vector) {
            this.x = x;
            this.y = y;
            this.velocity = velocity;
        }

        move(): void {
            this.x += this.velocity.x;
            this.y += this.velocity.y;
        }
    }
}

