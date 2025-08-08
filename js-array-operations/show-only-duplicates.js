//show duplicates
let a = [1, 2, 2, 3, 4, 9, 9, 10, 5, 7, 4, 5];
let b = structuredClone(a);
let c = structuredClone(a);

let fDatas = a
    .filter((cd, i, array) => array.indexOf(cd) !== i && array.lastIndexOf(cd) === i);

console.log(fDatas);


//show all duplicates
let fDatasAll = b.filter((cd, i, array) => array.indexOf(cd) != i || array.lastIndexOf(cd) != i);

console.log(fDatasAll);

// apart from duplicates
// this will show only the elements that are not duplicates
// i.e., it will show elements that appear only once in the array
// for example, in the array [1, 2, 2, 3, 4, 9, 9, 10, 5, 7, 4, 5]
// it will show [1, 3, 10, 7]
// this is the opposite of showing duplicates
// ans 1
let apartFromDupliAll = c.filter((cd, i, array) => array.indexOf(cd) === i && array.lastIndexOf(cd) === i);

console.log(apartFromDupliAll);
