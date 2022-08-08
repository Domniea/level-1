const form = document.myForm
var submit = form.submit


form.addEventListener("submit", (e) => {
        e.preventDefault()
        let firstName = form.fName.value;
        let lastName = form.lName.value;
        let age = form.age.value;
        let gender = form.gender.value;
        let location = form.location.value;
        let diet = [];
        if (form.diet.value === "vegan") {
            diet.push(document.getElementById("vegan").value);
        }
        if (form.diet.value === "gF") {
            diet.push(document.getElementById('gluten').value);
        }
        if (form.diet.value ==="paleo") {
            diet.push(document.getElementById('paleo').value);
        }
        alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
})
