//remove duplicates
let a = [1, 2, 2, 3, 4, 9, 9, 10, 5, 7, 4, 5];

//ans 1
let b = [...new Set(a)];
console.log(b);

//ans 2
let fDatas = a.filter((cd, i, array) => array.indexOf(cd) === i);

console.log(fDatas);


