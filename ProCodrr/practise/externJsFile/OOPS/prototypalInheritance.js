class User {
    constructor(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }
  
    getBirthYear() {
      return new Date().getFullYear() - this.age
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  
    set fullName(value) {
      const [firstName, lastName] = value.split(' ')
      this.firstName = firstName
      this.lastName = lastName
    }
  }

const user1 = new User('Aman', 'Mishra', 32)
  
class Students extends User {
    constructor(firstName, lastName, age, standard){
      super(firstName, lastName, age)
      this.standard = standard
    }

    getstudy(){
      console.log("Studying");
    }
}

const student1 = new Students('Jignesh', 'Vasava', 24, "Master's")

class Employee extends User {
    constructor(firstName, lastName, age,company) {
      super(firstName, lastName, age)
      this.company = company
    }
    getwork(){
      console.log("Current;y working");
    }
}

const Employee1 = new Employee('Gaurav', 'Patel', 35,'google')


  