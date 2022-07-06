const form = document.addItem
const list = document.getElementById("list")


function createItem (){
    const item = document.createElement("li")
    document.getElementById("list").append(item)
    item.innerHTML += "<div id ='newItem'>" + form.title.value + "</div>" + "<button id='editButtont'>edit</button>" + "<button id='deleteButton' onclick='deleteItem()' >X</button>"
}

/*function createItem2 () {
    const newItem = document.createElement("div")
        document.getElementById("list").append(newItem)
}

function createEdit () {
    const editButton = document.createElement("button")
    editButton.innerHTML = "<button>'edit'</button>"
    document.getElementById("list").append(editButton)
}

function createDelete () {
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "<button>x</button>"
    document.getElementById("list").append(deleteButton)
}*/
form.addEventListener("submit", (e) => {
    const input = form.title.value
        e.preventDefault ()
        console.log (input)
        createItem ()
        form.title.value = ""
    })

    function deleteItem() {
    const newListItem = document.getElementById("newItem")
    item.remove()
    editButton.remove()
    deleteButton.remove()
    }

    