const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const join = [...arr1, ...arr2];

console.log(join);

const person = {
    name : 'john',
    age : 30,
}

const updated_person = {
    ...person,
    gender : 'male',
}

console.log(person);
console.log(updated_person);