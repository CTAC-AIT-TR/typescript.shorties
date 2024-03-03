interface Animal {
  readonly id: number
  name: string
  age: number
  color?: string
  size: {
    width: number
    height: number
  }
  eat(food: string): void
  sleep(hours: number): void
}

const cat: Animal = {
  id: 111,
  name: 'Kesha',
  age: 15,
  size: {
    width: 20,
    height: 30
  },
  eat(food: string) {
    console.log(food);
  },
  sleep(hours: number) {
    console.log(hours);
  }
}
cat.color = 'black';
cat.eat('meat');
cat.sleep(8);
console.log(cat);

const dog = {} as Animal;
const fish = <Animal>{};

console.log(cat, dog, fish);
console.log(typeof cat);

console.log('<----------------------->');

interface AnimalWithArea extends Animal {
  getArea: () => number
}

const lion: AnimalWithArea = {
  id: 222,
  name: 'Leon',
  age: 60,
  size: {
    width: 200,
    height: 300
  },
  eat(food: string) {
    console.log(food);
  },
  sleep(hours: number) {
    console.log(hours);
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

console.log(lion.getArea());

console.log('<---------Взаимодействие с классами------------->');

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}
// Интерфейс с большим количеством динамических ключей
interface Styles {
  [key: string]: string
}
const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}
