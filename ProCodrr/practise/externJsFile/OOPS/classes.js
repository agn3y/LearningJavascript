class Createuser {
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        console.log(firstName, lastName, age)
    } 
     
    getAgeYear () {
        return new Date().getFullYear() - this.age
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
    
    getCurrentAge() {
        return this.age
    }
}

user1 = new Createuser('Agney','Patel',23)
user2 = new Createuser('Agney','Patel',23)