//Qualifier//

const h1 = document.createElement("h1")
document.getElementById("header").append(h1)
h1.innerHTML = "<h1>Javacript Made This</h1>"
h1.style.textAlign = "center"
h1.style.color = "white"


const subtitle = document.createElement("subtitle")
document.getElementById("header").append(subtitle)
subtitle.innerHTML = "<h1><span id='name'>Adam</span> wrote this!</h1>"
subtitle.style.textAlign = "center"
subtitle.style.color = "white"

const subtitleName = document.getElementById("name")
subtitleName.style.color = "#65ff7a"

//Bronze//



const messages = document.getElementsByClassName("message");
messages[0].textContent = "Good day sir! What is your favorite color?"
messages[1].textContent ="My favorite color is green"
messages[2].textContent =  "Awesome! thats may favorite color as well, though i really like the color blue"
messages[3].textContent =  "blue is neat, but I still prefer the color green"


const clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", function() {
   for(var i = 0; i < messages.length; i++) {
    messages[i].textContent = ""
   }
})




//Silver//
const selectTheme = document.getElementById("theme-drop-down")
const themeOne = selectTheme.classList.contains("theme-one")
const themeTwo = selectTheme.classList.contains("theme-two")

for (var i = 0; i < messages.length; i++) {
    messages[i].style.color = "brown"
    document.body.style.backgroundColor = "blue"
}


selectTheme.addEventListener("change", function (e) {
    for (var i = 0; i < messages.length; i++) {
        messages[i].classList.toggle("theme-two")
    } if (e.target.value === "theme-two") {
        for (var i = 0; i < messages.length; i++) {
            messages[i].style.color = "red"
            document.body.style.backgroundColor = "grey"
        }      
    } else if (e.target.value === "theme-one") {
        for (var i = 0; i < messages.length; i++) {
            messages[i].style.color = "brown"
            document.body.style.backgroundColor = "blue"
        }      
    }

})


 
//Gold//


const main = document.getElementsByClassName("messages")

const form = document.message 
const chatInput = form.chatInput.value

form.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log("boobs")
    console.log(input)
    }
)



// const input = document.getElementById("input")
// const sendButton = document.getElementsByTagName("button")

// sendButton[1].type = "button"

// function createNewMessage() {
//     const newMessage = document.createElement("div").classList.toggle("message")
//     newMessage.appendChild(newMessage)
//     newMessage.textContent = input.value
// }

// sendButton[1].addEventListener("click", function() {
//     console.log("poop")
//     createNewMessage()
// })
