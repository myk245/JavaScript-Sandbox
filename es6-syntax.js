class Person {
   constructor(firstName, lastName, dob) {
      this.firstName = firstName; 
      this.lastName = lastName; 
      this.birthday = new Date(dob); 
   }

   greeting() {
      return `Hello there, ${this.firstName} ${this.lastName}`; 
   }

   calculateAge() {
      const diff = Date.now() - this.birthday.getTime(); 
      const ageDate = new Date(diff); 
      return Math.abs(ageDate.getUTCFullYear() - 1970); 
   }

   getsMarried(newLastName) {
      this.lastName = newLastName;
   }

   static addNumbers(x, y) {
      return x + y; 
   }
}

const cindy = new Person('Cindy', 'Kei', '03-10-1992');

cindy.getsMarried('Evans'); 

console.log(cindy); 

console.log(Person.addNumbers(1, 2)); 