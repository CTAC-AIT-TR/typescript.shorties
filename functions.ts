//funnction type number
function add(a: number, b: number): number {
  return a + b;
}

const result = add(1, 2);
console.log(result);

// function type string
function toUpperCase(str: string): string {
  return str.trim().toUpperCase();
}

//overloading

interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  default: number;
}

function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number): MyPosition | MyPositionWithDefault {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }

  if (a && !b) {
    return { x: a, y: undefined, default: a };
  }

  return { x: a, y: b };
}

console.log("Empty: ", position());
console.log("One param: ", position(34));
console.log("Two params: ", position(10, 20));
