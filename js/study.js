'use strict';

const fruits = ["사과","배","바나나","딸기","수박"];

fruits.forEach(fruit => console.log(fruit));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// 배열에 값 추가(뒤로 추가) - push(), unshift()
fruits.push("참외", "키위", "오렌지");
console.log(fruits);

// 앞으로 추가
console.log("+++++++++++++++++++++++++++++");
fruits.unshift("앵두","자두");
console.log(fruits);

console.log("><><><><><><><><><><><><><><><><");
// 배열값 삭제(앞) - pop(), shift()
fruits.pop();
fruits.pop();
console.log(fruits);

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
// 배열값 삭제(뒤)
fruits.shift();
fruits.shift();
console.log(fruits);

console.log("================================");
// 특정요소위치부터 지정개수만큼 제거(splice(인덱스번호, 개수))
fruits.splice(2, 1);
console.log(fruits);

fruits.splice(3); // splice()에 인덱스번호만 적으면 그 위치부터 모두 제거한다.
console.log(fruits);
console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");

fruits.splice(1,1,"옥수수","자몽","토마토");
console.log(fruits);

fruits.splice(0,1,"감자");
console.log(fruits);

console.clear();
console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
// slice() : 배열의 지정된 위치부터 자료를 가져온다.
let imsiFruits = fruits.slice(1);
console.log(imsiFruits);
console.log(fruits);

// fruits 배열의 인덱스 1번째부터 4번째 앞까지 가져오시오.
imsiFruits = fruits.slice(1,4);
console.log(imsiFruits);
console.log(fruits);

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$");
// 결합(붙이기) : concat()
const concatFruits = fruits.concat(imsiFruits);
console.log(concatFruits);

// 배열의 자료 검색 : includes() - 있으면 true, 없으면 false
console.log(concatFruits.includes("옥수수"));
console.log(concatFruits.includes("옥소수"));

// indexOF() : 있으면 위치값, 없으면 -1
console.log(concatFruits.indexOf("옥수수"));
console.log(concatFruits.indexOf("옥소수"));

// lastindexOF() : 뒤에서부터 검색 : 있으면 위치값, 없으면 -1
console.log(concatFruits.lastIndexOf("옥수수"));
console.log(concatFruits.lastIndexOf("옥소수"));
