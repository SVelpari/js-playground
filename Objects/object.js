// Accessing Object Methods

//1.dot property accessor
// const hero = {
//   name: 'Batman'
// };
// console.log(hero.name);

//2. square bracket property accessor
// const hero = {
//   name: 'Batman',
//   'prop-2': 25,
// };
// console.log(hero['prop-2']); //25


// //3. Destructuring the object
// const hero = {
//   name: 'Batman'
// };
// const { name } = hero; // Object destructuring:
// console.log(name); // Batman

// //3.1 alias while destructuring
// const {name: superhero} = hero;
// console.log(superhero); //Batman

// // 3.2 dynamic property name
// const property = 'name';
// const hero = {
//   name: 'Batman'
// };
// const { [property]: name } = hero;
// console.log(name); // => 'Batman'


// 4. If the accessed property doesn't exist, all 3 accessor syntaxes evalute to undefined:

// const hero = {
//   characterName: 'Batman'
// };
// console.log(hero.name);    //undefined
// console.log(hero['name']); //undefined
// const { name } = hero;
// console.log(name);         //undefined