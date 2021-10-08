let input = document.getElementById("txtid")
let count = document.getElementById("count")

input.addEventListener("keyup", function() {
    let wordCount = 0
    let words = input.value.split(" ")
    for ( let i = 0; i < words.length; i++ ) {
        if ( words[i] != "" ) {
            wordCount += 1
        }
    }
    count.textContent = wordCount
})