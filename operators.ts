interface Person {
  name: string;
  age: number;
}

function logPerson(person: Person) {
  console.log(
    ` - ${person.name} is ${person.age} year(s) old.`
  );
}
logPerson({ name: "Anna", age: 32 });


type PersonKeys = keyof Person; // 'name' | 'age
let key: PersonKeys = "name";
key = "age";

// Exclude and Pick methods

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};
type UserKeysNoMeta = Exclude<keyof User, "_id" | "createdAt">; // 'name' | 'email
type UserKeysNoMeta2 = Pick<User, "name" | "email">; // 'name' | 'email

let user1: UserKeysNoMeta = "name";
user1 = "email";
// user1 = "_id"; // error