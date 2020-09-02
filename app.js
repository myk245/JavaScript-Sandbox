// Object Literal
// const cindy = {
//    name: 'Cindy', 
//    age: '28'
// }

// Person constructor
function Person(firstName, lastName, dob) {
   this.firstName = firstName;
   this.lastName = lastName; 
   // this.birthday = new Date(dob); 
   // this.calculateAge = function () {
   //    const diff = Date.now() - this.birthday.getTime();
   //    const ageDate = new Date(diff);
   //    return Math.abs(ageDate.getUTCFullYear() - 1970); 
   // }
}

// Calculate Age - prototype method
Person.prototype.calculateAge = function() {
   const diff = Date.now() - this.birthday.getTime();
   const ageDate = new Date(diff);
   return Math.abs(ageDate.getUTCFullYear() - 1970); 
}

// Get Full Name
Person.prototype.getFullName = function() {
   return `${this.firstName} ${this.lastName}`; 
}

// Gets Married
Person.prototype.getsMarried = function(newLastName) {
   this.lastName = newLastName; 
}

// Greeting
Person.prototype.greeting = function() {
   return `Hello there ${this.firstName} ${this.lastName}`;
}

const cindy = new Person('Cindy', 'Kei', '03/10/1992'); 
const david = new Person('David', 'Messer', '01/03/1991')

// console.log(cindy);
// console.log(david.calculateAge());
// console.log(cindy.getFullName()); 

// cindy.getsMarried('Evans'); 
// console.log(cindy.getFullName());  

// console.log(cindy.hasOwnProperty('firstName')); // true
// console.log(cindy.hasOwnProperty('getFullName')); // false

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
   Person.call(this, firstName, lastName);
   
   this.phone = phone; 
   this.membership = membership; 
}

// Create customer 
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard'); 

console.log(customer1); 
