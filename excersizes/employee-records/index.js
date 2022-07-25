employees = []

function Employee(name, jobtitle, salary, status) {
    this.name = name
    this.jobtitle = jobtitle
    this.salary = salary
    this.status = "Full Time"
}

Employee.prototype.print =  function() {
    console.log(this.name, this.jobtitle, this.salary, this.status)
}



let frank = new Employee("frank", "bartender", "5hr" )
employees.push(frank)
let bob = new Employee("bob", "janitor", "18hr")
employees.push(bob)
let brett = new Employee("brett", "cook", "15hr")
employees.push(brett)



brett.status = "part-time"
brett.print()
frank.print()
bob.print
