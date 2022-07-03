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
    messageLeft[0].textContent = ""
    messageLeft[1].textContent = ""
    messageRight[0].textContent = ""
    messageRight[1].textContent = ""
})

//Silver//

const selectTheme = document.getElementById("theme-drop-down")
const themeOne = document.querySelector("option[theme-one]") 

selectTheme.addEventListener("change", function() {
    if (themeOne) {
        messages.style.color = "blue"
    } else messages.style.color = "red"
})
   

//Gold//

