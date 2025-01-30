class CreateUser {
    #age
    constructor(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      this.#age = age
    }

    #getthatD = 'some all bullshit'
    nottheD = "nash"
  
    getBirthYear() {
        console.log(this.#getthatD)
        console.log(this.#getFullName());
        return new Date().getFullYear() - this.#age
    }
    #getFullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
  
  const user1 = new CreateUser('Aman', 'Mishra', 23)
  const user2 = new CreateUser('Anurag', 'Singh', 30)