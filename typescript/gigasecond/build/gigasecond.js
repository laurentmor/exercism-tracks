"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gigamillisecond = Math.pow(10, 9) * 1000;
class Gigasecond {
    constructor(date) {
        this.currentDate = date;
    }
    date() {
        return new Date(this.currentDate.valueOf() + gigamillisecond);
    }
}
exports.default = Gigasecond;
//# sourceMappingURL=gigasecond.js.map