var person = {
  name: 'Saravanaa',
  age: 20,
  hello: function (thing) {
    console.log(`${this.name} says hello ${thing}`);
  }
} 

// person.hello('world'); 
//Saravanaa says hello world

// let Sindu = {
//   name: 'Sindu'
// }

// person.hello.call(Sindu,'world');  
// Sindu says hello world

// person.hello.apply(Sindu,['world']);  
// Sindu says hello world

// let newFunc = person.hello.bind(Sindu);
// newFunc('world');

//note: bind returns a completely new function with the applied argument

// console.log(wizard.heal.call(god,30,30)) //returns undefined
// console.log(wizard.heal.apply(god,[20,50])); //retunrs undefined
// console.log(wizard.heal.bind(god,20,20)); //returns a function

// -------------------------------------------------------------------------------------------------

const wizard = {
  name:'bill',
  health:50,
  heal(x,y){
      this.health += x+y;
      console.log(this.health);
  }
}

wizard.heal(10,10); //50 + 10 + 10 = 70 & this.health is updated to 70 inside the 'wizard'
wizard.heal(10,10); //70 + 10 + 10 = 90

const god = {
  name: 'appollo',
  health:30,
}

console.log('0',god.health) //30

wizard.heal.call(god,30,30);
console.log('1',god.health); //30 + 30 + 30 = 90

wizard.heal.apply(god,[20,50]);
console.log('2', god.health); //90+20+50 = 160

const healgod = wizard.heal.bind(god,20,20); //160 + 20 + 20 = 200
healgod();

console.log('3',god.health);

console.log('4', wizard.health); //already updated value of 90


