
// Прототип - это некий объект, с помощю которого можно расширять
// свойства другого обьекта или класса
// а так же настроить наследование внутри JavaScript

const person = new Object({
    name: "Max",
    age: 27,
    greet() {
        console.log('Greet')
    }
})

Object.prototype.sayHello = function () {
    console.log('Hello!')
}

console.log(person.sayHello())

const newPerson = Object.create(person)
newPerson.name = "Anna"

console.log(newPerson)
console.log(newPerson.greet())
console.log(newPerson.sayHello())

// const str = new String('I am a string!')
//
// console.log(str)
