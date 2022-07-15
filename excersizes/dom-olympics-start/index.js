//Qualifier//

var h1 = document.createElement("h1")
document.getElementById("header").append(h1)
h1.innerHTML = "<h1>Javacript Made This</h1>"
h1.style.textAlign = "center"
h1.style.color = "white"


var subtitle = document.createElement("subtitle")
document.getElementById("header").append(subtitle)
subtitle.innerHTML = "<h1><span id='name'>Adam</span> wrote this!</h1>"
subtitle.style.textAlign = "center"
subtitle.style.color = "white"

var subtitleName = document.getElementById("name")
subtitleName.style.color = "#65ff7a"

//Bronze//



var messages = document.getElementsByClassName("message");
messages[0].textContent = "Good day sir! What is your favorite color?"
messages[1].textContent ="My favorite color is green"
messages[2].textContent =  "Awesome! thats may favorite color as well, though i really like the color blue"
messages[3].textContent =  "blue is neat, but I still prefer the color green"


var clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", function() {
   for(var i = 0; i < messages.length; i++) {
    messages[i].textContent = ""
   }
})




//Silver//
var selectTheme = document.getElementById("theme-drop-down")
// var themeOne = document.getElementsByClassName("messages")
// var themeTwo = document.getElementsByClassName("messages")
for (var i = 0; i < messages.length; i++) {
    messages[i].style.color = "brown"
    document.body.style.backgroundColor = "#00d1ff"
}

function themeChange(event) {
    for (var i = 0; i < messages.length; i++) {
    } if (event.target.value === "theme-two") {
        for (var i = 0; i < messages.length; i++) {
            messages[i].style.color = "red"
            document.body.style.backgroundColor = "grey"
        }      
    } else if (event.target.value === "theme-one") {
        for (var i = 0; i < messages.length; i++) {
            messages[i].style.color = "brown"
            document.body.style.backgroundColor = "#00d1ff"
        }      
    }
}

selectTheme.addEventListener("change", themeChange)

 
//Gold//


var main = document.getElementById("messageContainer")
var form = document.forms.form

function themeCheck(reply) {
    if (selectTheme.value === "theme-one") {
        reply.style.color = "brown"
    } else {
    reply.style.color = "red"
    }
}

for(var i = 0; i < messages.length; i++) {
    messages[i].classList.toggle("theme-one")
}
form.addEventListener("submit", function(event) {
    event.preventDefault()
    var input = form.input
    console.log("boobs")
    var reply = document.createElement("div")
    reply.classList.add("message")
    reply.classList.toggle("theme-two")
    reply.textContent = input.value
    main.append(reply)
    input.value = ""
    themeCheck(reply)
}
)





