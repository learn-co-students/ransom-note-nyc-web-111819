buildHistogram =(magazine)=>{

    let histogram = {}

    magazine.sort()
    magazine.forEach(function(letter){
    
    histogram[letter] ? 
    histogram[letter] ++
    : 
        histogram[letter] = 1
    })
return histogram
}

function canBuildNote(magazine, note){

    let histogram = buildHistogram(magazine)

    let noteArray = note.split("")

     noteArray.sort()


     for(let i = 0; i<noteArray.length; i++){
        if(histogram[noteArray[i]] > 0){
            histogram[noteArray[i]] --
        }
        else{
            return false
        }
     }
return true
}