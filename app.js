// Object Literal
// const cindy = {
//    name: 'Cindy', 
//    age: '28'
// }

// Person constructor
function Person(name, dob) {
   this.name = name;
   // this.age = age; 
   this.birthday = new Date(dob); 
   this.calculateAge = function () {
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970); 
   }
}

// const cindy = new Person('Cindy', 28); 
// const david = new Person('David', 29); 

const cindy = new Person('Cindy', '3/10/1992'); 
console.log(cindy.calculateAge());