// JSON - JavaScript Object Notation

const a = `{
  "firstName": "Ilya",
  "age": 24,
  "skills": [
    "CSS",
    "JS"
  ],
  "languages": {
    "key": "value"
  }
}`;

const obj = {
  a: 1, print() {
    console.log('Hello');
  }
};
console.log(JSON.stringify(obj));

const myObj = JSON.parse(a);
console.log(myObj);


