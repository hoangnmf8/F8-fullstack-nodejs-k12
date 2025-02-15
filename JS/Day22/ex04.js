const obj1 = { emai: "hoang@gmail.com", a: { x: 10 } };
const obj2 = { password: "123456" };

// const objResult = Object.assign(obj1, obj2, { address: "BG" }, { address: "HN" });

// console.log(obj1);
// console.log(objResult);
// console.log(obj1 === objResult);

// objResult.age = 33;

// console.log(obj1);

const product1 = { title: "san pham A", price: 200 };

const product2 = product1;

product2.price = 1000;

console.log(product1);

// console.log(obj2);

const objCopy = Object.assign({}, obj1);
// console.log(objCopy);
// console.log(obj1);

// console.log(objCopy === obj1);

objCopy.a.x = 20;
console.log(objCopy);
console.log(obj1);

const objDeepCopy = structuredClone(obj1);
console.log(objDeepCopy);

objDeepCopy.a.x = 1000;

console.log(obj1.a.x);
console.log(objDeepCopy.a.x);
