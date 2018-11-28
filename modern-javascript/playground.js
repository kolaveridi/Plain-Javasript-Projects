// function Person(firstName,lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;
  
//   }
  
//   Person.prototype.greeting =function(){
//       return `Hello there ${this.firstName} ${this.lastName}`;
//   }
  
//   const person1=new Person('John','Doe');
  
//   console.log(person1.greeting());
  
//   //Inherit the person prototypr
//   Customer.prototype=Object.create(Person.prototype);
//   // 
//   Customer.prototype.constructor=Customer;
  
//   function Customer(firstName,lastName,phone,membership){
//     Person.call(this,firstName,lastName);
//     this.phone=phone;
//     this.membership=membership;
//   }
//   const Customer1=new Customer('TOM','Smith','66666','Standard');
  
  
//   console.log(Customer1);
  
//   console.log(Customer1.greeting());




//Object.Create

// const personPrototypes={
//     greeting:function(){
//         return `Hello there ${this.firstName} ${this.lastName}`;

//     },
//     getsMarried:function(newLastName){
//       this.lastName=newLastName;
//     }

// }

// const mary=Object.create(personPrototypes);
// mary.firstName='Mary';
// mary.lastName='Williams';
// mary.age=30;

// console.log(mary);
// mary.getsMarried('Doe');
// console.log(mary.greeting());



//classes in javascript 

// class Person{
//     constructor(firstName,lastName,dob){
//      this.firstName=firstName;
//      this.lastName=lastName;
//      this.birthday=dob;
//     }
//     greeting(){
//         return `Hello there ${this.firstName} ${this.lastName}`
//     }
//     calculateage(){
//         const diff= Date.now()-this.birthday.getTime();
//         const ageDate=new Date(diff);
//         return Maths.abs(ageDate.getUTCFullYear()-1970);
//     }
//     getsMarried(newLastName){
//         this.lastName=newLastName;
//     }
//     static  addNUmbers(x,y){
//         return x+y;
//     }
// }

// const mary =new Person('Mary','Williams','11-13-1989');
// console.log(mary);
// mary.getsMarried('Thompson');
// //console.log(mary.calculateage());
// console.log(Person.addNUmbers(19,11));



//Sub-class

// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
//     greeting(){
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     }
// }
// class Customer extends Person{
//     constructor(firstName,lastName,phone,membership){
//          super(firstName,lastName);
//          this.phone=phone;
//          this.membership=membership;
//     }
//     static getMemberShipCost(){
//         return 500;
//     }
// }
// const John=new Customer('John','Doe','1111','Stnadard');
// console.log(John);
// console.log(John.greeting());
// console.log(Customer.getMemberShipCost());