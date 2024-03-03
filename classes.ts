class Typescript {
  version: string;
  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

const ts = new Typescript('2.0');
console.log(ts.info('Current'));

// class Car {
//   readonly model: string;
//   readonly numberOfWheels: number = 4;
//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }
class Car {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}

// ==============Модификаторы доступа=====================

class Animal {
  protected voice: string = '';
  public color: string = 'black';

  constructor() {
    this.go();
  }

  private go() {
    console.log('Go');
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.setVoice('Meow');
console.log(cat.color);

// ==============Абстрактные классы=====================

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log('Component render');
  }
  info(): string {
    return 'This is info';
  }
}