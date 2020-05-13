let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t",
"h", "a", "t", "y", "o", "u", "s", "h", "o", "u", "l", "d", "b",
"u", "y", "t", "h", "e", "y", "a", "r", "e", "c", "h", "e", "a",
"p", "a", "n", "d", "w", "o", "n", "d", "e", "r", "f", "u", "l",
 "f", "o", "r", "t", "h", "e", "s", "u", "m", "m", "e", "r"]
 
 let note = "give me the ferbie or else"




const buildHistogram = (magazine) => {
    let magazineMap = {}
    for(let i = 0; i < magazine.length; i++){

      if(magazineMap[magazine[i]]) {
       magazineMap[magazine[i]] += 1
      } else {
        magazineMap[magazine[i]] = 1
      }
    }

    return magazineMap
}

const canBuildNote = (magazine, note) => {
  debugger

  let hashMap = buildHistogram(magazine)
  for(let i =0; i < note.length; i++){
    if (hashMap[note[i]]) {
      hashMap[note[i]] = hashMap[note[i]] - 1
    } else {
      return false
    }
  }
  return true

}