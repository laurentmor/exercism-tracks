export default class Word{

  count(s:String): Map<String,number>{

          return s
              .trim()
              .toLowerCase()
              .split(/\s+/)
              .reduce((map, word) => map.set(word, map.get(word) + 1 || 1), new Map());

  }
}
