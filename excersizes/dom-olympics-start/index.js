//Qualifier//

const h1 = document.createElement("h1")
document.getElementById("header").append(h1)
h1.innerHTML = "<h1>Javacript Made This</h1>"
h1.style.textAlign = "center"

const subtitle = document.createElement("subtitle")
document.getElementById("header").append(subtitle)
subtitle.innerHTML = "<h1><span id='name'>Adam</span> wrote this!</h1>"
subtitle.style.textAlign = "center"

const subtitleName = document.getElementById("name")
subtitleName.style.color = "green"

//Bronze//



const messages = document.getElementsByClassName("message");
messages[0].textContent = "Good day sir! What is your favorite color?"
messages[1].textContent ="My favorite color is green"
messages[2].textContent =  "Awesome! thats may favorite color as well, though i really like the color blue"
messages[3].textContent =  "blue is neat, but I still prefer the color green"


const clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", function() {
    messages[0].textContent = ""
    messages[1].textContent = ""
    messages[2].textContent = ""
    messages[3].textContent = ""
})

//Silver//

for (var i = 0; i < messages.length; i++){
messages[i].classList.toggle("theme-two")
}

const selectTheme = document.getElementById("theme-drop-down")
const themeOne = document.getElementsByClassName("theme-one")
const themeTwo = document.getElementsByClassName("theme-two")

selectTheme.addEventListener("change", function(e) {
    if (themeTwo) {
       for (i = 0; i < messages.length; i++)
        messages[i].style.color = "red"
        document.body.style.backgroundColor = "grey"
    } 
 })

//Gold//
const main = document.getElementsByClassName("messages")

const input = document.getElementById("input")
const sendButton = document.getElementsByTagName("button")
sendButton[1].type = "button"

function createNewMessage() {
    const newMessage = document.createElement("div")
    main[0].appendChild(newMessage)
    newMessage.textContent = input.value
}

sendButton[1].addEventListener("click", function() {
    console.log("poop")
    createNewMessage()
})



