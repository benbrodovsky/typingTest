//Start the party
//need to create takeTest, call it on click

var seconds = 60
var timer

function takeTest(){
    if(seconds < 60){
        document.getElementById("timer").innerHTML = seconds
    }
    if(seconds > 0){
        seconds--
    } else{
        clearInterval(timer)
        alert("testMSG")
    }

    //populate text area with words
    //populateWords()

    //Display Timer

    
    //record user input

    //highlight words as typed, letter by letter. red if wrong, green if right

    //
}

// function populateWords(){
//     const textarea = document.getElementById("typingBox")
//     textarea.innerHTML = "These are test words to fill the box up okay"
// }

document.getElementById("startButton").addEventListener("click", function(){
    if(!timer){
        timer = window.setInterval(function(){
            takeTest()
        }, 1000)
    }
})
document.getElementById("timer").innerHTML = "1:00"