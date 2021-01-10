const animal = {
  name: 'animal',
  age: 7,
  hasTail: true,
};

// console.log(animal);

class Animal {
  static type = 'ANIMAL'; //статические свойства доступны только самому классу

  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }

  voice(sound = 'nosound') {
    console.log(`${this.name} says ${sound}`);
  }
}

const dog = new Animal({
  name: 'dog',
  age: 10,
  hasTail: false,
});

// console.log(Animal.type);

// console.log(dog);
// console.log(dog.voice('woof'));

// С помощью классов можно делать полноценное наследование

class Cat extends Animal {
  static type = 'CAT';

  constructor(options) {
    super(options); //
    this.color = options.color;
  }

  voice(sound) {
    //дочерний метод перетирает родительский
    super.voice(sound); //поэтому сначала вызываем из родетеля
    console.log('I am a cat!');
  }

  get ageInfo() {
    // this.age * 9;
    return console.log(`${this.name} age is ${this.age * 9}`);
  }

  set ageInfo(newAge) {
    this.age = newAge;
  }
}

const cat = new Cat({
  name: 'Cat',
  age: 2,
  hasTail: true,
  color: 'black',
});

console.log(cat.type); // undefined - type может использовать только class Cat

console.log(cat);
console.log(cat.voice('Meow')); //можем использовать методы определенные в родительском классе

cat.ageInfo; //Cat age is 18
cat.ageInfo = 3;
cat.ageInfo; //Cat age is 27

// =================================================

// Классы это удобный синтаксис для создания объектов
// Мы можем выносить определенную логику в базовые классы
// Задавать на определенных этапах меоды на прототипах

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = 'none';
  }

  show() {
    this.$el.style.display = 'block';
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);  // selector это строка!

    this.$el.style.height = this.$el.style.width = options.size + 'px';
    this.$el.style.background = options.color;
  }
}

const box1 = new Box({
  selector: '#box1',
  size: 300,
  color: 'palevioletred',
});

class Circle extends Box {
  constructor(options) {
    super(options);

    this.$el.style.borderRadius = '50%';
  }
}

const c = new Circle({
  selector: '#circle',
  size: 300,
  color: 'lightblue',
});

c.hide();

c.show();
