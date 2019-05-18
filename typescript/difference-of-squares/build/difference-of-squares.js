"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Square {
    constructor(limit) {
        this.squareOfSum = 0;
        this.sumOfSquares = 0;
        this.difference = 0;
        this.limit = 0;
        let sum = 0;
        this.limit = limit;
        for (let i = 0; i <= this.limit; i++) {
            sum += i;
            this.sumOfSquares += (i * i);
        }
        this.squareOfSum = (sum * sum);
        this.difference = (this.squareOfSum - this.sumOfSquares);
    }
}
exports.default = Square;
//# sourceMappingURL=difference-of-squares.js.map