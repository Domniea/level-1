const form = document.addItem //

function createItem() {
    const newItem = document.createElement("li")
    const div = document.createElement("div")

    div.textContent = form.title.value

    const editButton = document.createElement("button")
    const deleteButton = document.createElement("button")

//buttons content
    editButton.textContent = "EDIT"
    deleteButton.textContent = "X"


// appending items
    document.getElementById("list").append(newItem)
    newItem.appendChild(div)
    newItem.appendChild(deleteButton)
    newItem.appendChild(editButton)
    

// delete button grouping
    deleteButton.addEventListener("click", function() {
        this.parentNode.parentNode.removeChild(this.parentNode)
        this.parentNode.removeChild(this)
    })

 //edit button grouping
    editButton.addEventListener("click", function() {
        const inputAdjust = document.createElement("input")
        newItem.prepend(inputAdjust)
        inputAdjust.placeholder = div.textContent
        this.remove(this)

//adust submit button - edit button swap
        const adjustSubmitButton = document.createElement("button")
        adjustSubmitButton.textContent = "SAVE"
        div.appendChild(adjustSubmitButton)

//adjust submit button fire
        adjustSubmitButton.addEventListener("click", function() {
            const adjustedValue = inputAdjust.value
            div.textContent = adjustedValue
            console.log(adjustedValue)
            localStorage.setItem("adam", adjustedValue)
            inputAdjust.remove()
            newItem.appendChild(editButton)
       })
    })
    
}


// adjustSubmitButton.addEventListener("keydown", function() {
//                 if(key === 'enter'){
//             const adjustedValue = inputAdjust.value
//             div.textContent = adjustedValue
//             console.log(adjustedValue)
//             localStorage.setItem("adam", adjustedValue)
//             inputAdjust.remove()
//             newItem.appendChild(editButton)
//        }
//     })



//submit button fire
form.addEventListener("submit", (e) => {
     e.preventDefault ()
    const input = form.title.value
    console.log (input)
    createItem ()
    // for(var i = 0; i < localStorage.length, i++){
    //     localStorage[i].setItem("adam", input)
    // }
    localStorage.setItem("adam", input)
    form.title.value = ""
    })

    

 // item.innerHTML += "<div id ='newItem'>" + form.title.value + "</div>" + "<button id='editButton'>edit</button>" + "<button id='deleteButton' onclick='deleteItem()' >X</button>"

// function deleteItem() {
//     const newItem = document.getElementById("newItem")
//     const editButton = document.getElementById("editButton")
//     const deleteButton = document.getElementById("deleteButton")
//     newItem.remove()
//     editButton.remove()
//     deleteButton.remove()
// }

    
// function createItem2 () {
//     const newItem = document.createElement("div")
//         document.getElementById("list").append(newItem)
// }

// function createEdit () {
//     const editButton = document.createElement("button")
//     editButton.innerHTML = "<button>'edit'</button>"
//     document.getElementById("list").append(editButton)
// }

// function createDelete () {
//     const deleteButton = document.createElement("button")
//     deleteButton.innerHTML = "<button>x</button>"
//     document.getElementById("list").append(deleteButton)
// }


{/* <li>
<div>Milk</div>
<button>edit</button>
<button>X</button>
</li>
<li>
<div>Cheerios</div>
<button>edit</button>
<button>X</button>
</li>
<li>
<div>2 Goats</div>
<button>edit</button>
<button>X</button>
</li> */}