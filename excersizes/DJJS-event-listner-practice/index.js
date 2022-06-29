const square = document.getElementById("square")

const mouseOver = square.addEventListener("mouseover", function() {
    square.style.backgroundColor = "blue";
})

const mousedown = square.addEventListener("mousedown", function() {
    square.style.backgroundColor = "red"
})

const mouseUp = square.addEventListener("mouseup", function() {
    square.style.backgroundColor = "yellow"
})

const dbClick = square.addEventListener("dblclick", function() {
    square.style.backgroundColor = "green"
})

const wheel = document.addEventListener("wheel", function() {
    square.style.backgroundColor = "orange"
})

const keyCommands = document.addEventListener("keydown", function (event) {
    if (event.key === "b") {
        (square.style.backgroundColor = "blue")
    } else if (event.key === "r") {
        (square.style.backgroundColor = "red")
    } else if (event.key === "y") {
        (square.style.backgroundColor = "yellow")
    } else if (event.key === "g") {
        (square.style.backgroundColor = "green")
    } else if (event.key === "o") {
        (square.style.backgroundColor = "orange")
    }
})

