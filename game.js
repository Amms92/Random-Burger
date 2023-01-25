const componentOne = ['cheese', 'tomato', 'onion', 'tongue', 'egg'];
const componentTwo = ['Patty', 'Grilloumi', 'Plant patty',];
const componentThree = ['Ketchup', 'Mayonnaise', 'Mustard', 'Barbecue sauce', 'blood'];

const getRandomComponent = array => array[Math.floor(Math.random() * array.length)];

const makeBurger = () => {
    console.log(`You make a burger consisting of a Top bun - ${getRandomComponent(componentOne)} - ${getRandomComponent(componentTwo)} - middle bun - ${getRandomComponent(componentOne)} - ${getRandomComponent(componentThree)} and a bottom bun.`);
};

console.log(getRandomComponent(componentOne));
makeBurger();