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

const messageLeft = document.getElementsByClassName("message left")
const messageRight = document.getElementsByClassName("message right")
messageLeft[0].textContent = "Good day sir! What is your favorite color?"
messageRight[0].textContent = "My favorite color is green"
messageLeft[1].textContent = "Awesome! thats may favorite color as well, though i really like the color blue"
messageRight[1].textContent = "blue is neat, but I still prefer the color green"

const clearButton = document.getElementById("clear-button")

clearButton.addEventListener("click", function() {
    messageLeft[0].textContent = ""
    messageLeft[1].textContent = ""
    messageRight[0].textContent = ""
    messageRight[1].textContent = ""

})

//Silver//







//Gold//

