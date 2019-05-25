"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Word {
    count(s) {
        return s
            .trim()
            .toLowerCase()
            .split(/\s+/)
            .reduce((map, word) => map.set(word, map.get(word) + 1 || 1), new Map());
    }
}
exports.default = Word;
//# sourceMappingURL=word-count.js.map