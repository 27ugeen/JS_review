const person = Object.create(
  {
    calculateAge() {
      console.log('Age: ', new Date().getFullYear() - this.birthYear);
    },
  },
  {
    name: {
      value: 'Gin',
      enumerable: true, //позволяет перебирать по ключам
      writable: true, //позволяет перезаписывать ключ
      configurable: true, //позволяет удалять ключ
    },
    birthYear: {
      value: 1994,
      enumerable: false,
      writable: false,
      configurable: false,
    },
    age: {
      get() {
        // console.log('hello');
        console.log(new Date().getFullYear() - this.birthYear);
        // return document.body.backgroundColor = "red";
      },
      set(value) {
        // document.body.style.background = 'red';
        console.log('Set age:', value);
      },
    },
  },
);

person.age;
person.age = 100;

person.calculateAge();

// console.log(person);

for (let key in person) {
  //проходится про прототипу, поэтому надо запретить методом hasOwnProperty()
  if (person.hasOwnProperty(key)) {
    console.log('Key is:', key, 'Value is:', person[key]);
  }
}

console.log(Object.entries(person));
