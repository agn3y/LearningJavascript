class CreateUser {
    #age
    constructor(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      this.#age = age
    }

    static gateaway = function (){
        console.log("philips monitor");
    }
    
    static {
        function gateaway(data){
            console.log(data);
        }
    }

    getBirthYear() {
        console.log(this.getFullName());
        return new Date().getFullYear() - this.#age
    }
    getFullName() {
      return this.firstName + ' ' + this.lastName
    }
}
  
const user1 = new CreateUser('Aman', 'Mishra', 23)
const user2 = new CreateUser('Anurag', 'Singh', 30)