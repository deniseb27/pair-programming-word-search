const transpose = require("./transposeMatrix.js")

const wordSearch = (letters, word) => { 

  const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (let l of verticalJoin){
      if (l.includes(word)) return true
    }

    return false
 };



module.exports = wordSearch