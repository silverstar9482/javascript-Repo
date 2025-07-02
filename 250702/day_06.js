// Object 관련 퀴즈 20개 풀어오기
// https://coding-ghost-leejey.github.io/JavaScript-Quiz/Object/

// 1. users 배열에서 모든 사용자의 이름만 배열로 추출하세요.
const users1 = [
    { name: "Ghost", age: 20 },
    { name: "Irangi", age: 22 },
    { name: "Camel", age: 19 },
];
userName = users1.map((x) => x.name).flat();
console.log(userName);

// 2. user 객체를 복사하여 age만 30으로 바꾼 새 객체를 만드세요.
const user1 = { name: "Ghost", age: 20 };
newUser1 = Object.assign(user1, { age: 20 });
console.log(newUser1);

// 3. person 객체에 동적으로 key와 value를 추가하세요. (key: hobby, value: soccer)
const person1 = { name: "Ghost" };
person1.hobby = "soccer";
console.log(person1);

// 4. 두 객체 obj1, obj2를 합쳐서 새 객체를 만드세요.
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const objArr = Object.assign({}, obj1, obj2);
const objArr2 = { ...obj1, ...obj2 };
console.log(objArr);
console.log(objArr2);

// 5. person 객체의 모든 key와 value를 "key:value" 형태의 문자열 배열로 만드세요.
const person2 = { name: "Ghost", age: 20 };
const person2Arr = Object.entries(person2).map((x, y) => `${x} : ${y}`);
console.log(person2Arr);

// 6. users 배열에서 나이가 20 이상인 사람만 추출하세요.
const users2 = [
    { name: "Ghost", age: 20 },
    { name: "Camel", age: 19 },
    { name: "Irangi", age: 22 },
];
const age20 = users2.filter((x) => x.age >= 20).map((X) => X.name);
console.log(age20);

// 7. person 객체의 key와 value를 모두 대문자로 변환한 새 객체를 만드세요.
const person3 = { name: "Ghost", hobby: "soccer" };

// 8. 중첩 객체에서 내부 값에 접근하세요. (person.info.email)
const person4 = { name: "Ghost", info: { email: "ghost@email.com" } };

console.log([person4.info.email]);

// 9. 객체의 모든 값이 숫자인지 true/false로 판별하세요.
const obj3 = { a: 1, b: 2, c: 3 };
console.log(Number.isNaN(obj3));

// 10. users 배열에서 가장 나이가 많은 사람의 이름을 출력하세요.
const users3 = [
    { name: "Ghost", age: 20 },
    { name: "Camel", age: 19 },
    { name: "Irangi", age: 22 },
];

// 11. 객체 obj를 깊은 복사(Deep Copy)하는 코드를 작성하세요.
const obj4 = { a: 1, b: { c: 2 } };

const deepCopy = JSON.stringify(obj4);
console.log(deepCopy);

// 12. 객체 person에서 name 속성의 값을 출력하세요.
const person5 = { name: "Ghost", age: 20 };
console.log(person5.name);

// 13. 객체 person에 height: 180 속성을 추가하세요.
person5.height = 180;
console.log(person5);

// 14. 객체 person에서 age 속성을 삭제하세요.
// delete person5.age;

console.log(person5);

// 15. 객체 person의 모든 속성(key) 이름을 배열로 출력하세요.
console.log(Object.keys(person5).flat());

// 16. 객체 person의 모든 값(value)만 배열로 출력하세요.
console.log(Object.values(person5).flat());

// 17. for...in문으로 person의 모든 key와 value를 한 줄씩 출력하세요.
for (let key in person5) {
    console.log(key, person5[key]);
}

// 18. person에 'age' 속성이 있는지 true/false로 출력하세요.
console.log("age" in person5);

// 19. 빈 객체 obj를 만들고, 동적으로 key와 value를 추가하세요.
const obj5 = Object.assign(person5, { mbti: "INTP" });
console.log(obj5);

// 20. 객체 person의 key 개수를 출력하세요.
const keyNumber = Object.keys(person5).length;
console.log(`person5의 key의 개수는 ${keyNumber} 입니다.`);
