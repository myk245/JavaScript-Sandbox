// Object Literal
// const cindy = {
//    name: 'Cindy', 
//    age: '28'
// }

// Person constructor
function Person(firstName, lastName, dob) {
   this.firstName = firstName;
   this.lastName = lastName; 
   // this.age = age; 
   this.birthday = new Date(dob); 
   // this.calculateAge = function () {
   //    const diff = Date.now() - this.birthday.getTime();
   //    const ageDate = new Date(diff);
   //    return Math.abs(ageDate.getUTCFullYear() - 1970); 
   // }
}

// calculate age - prototype method
Person.prototype.calculateAge = function() {
   const diff = Date.now() - this.birthday.getTime();
   const ageDate = new Date(diff);
   return Math.abs(ageDate.getUTCFullYear() - 1970); 
}

// get full name
Person.prototype.getFullName = function () {
   return `${this.firstName} ${this.lastName}; `
}

const cindy = new Person('Cindy', 'Kei', '03/10/1992'); 
const david = new Person('David', 'Messer', '01/03/1991')

console.log(cindy);
console.log(david.calculateAge());
console.log(cindy.getFullName()); 