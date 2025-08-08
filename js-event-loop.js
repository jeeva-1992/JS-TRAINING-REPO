console.log('1');

setTimeout(() => {
  console.log('2');
  Promise.resolve().then(() => console.log('3'));
}, 0);

Promise.resolve().then(() => {
  console.log('4');
  queueMicrotask(() => console.log('5'));
});

(async () => {
  console.log('6');
  await null;
  console.log('7');
  setTimeout(() => console.log('8'), 0);
})();

queueMicrotask(() => console.log('9'));

console.log('10');

// console.log('a');
// setTimeout(() => { console.log('c') }, 100);
// setTimeout(() => { console.log('b') }); // 0 delay
// new Promise((resolve, reject) => {
//   resolve('d');
// });
// console.log('e');

/*ai output 
1  
6  
10  
4  
5  
9  
7  
2  
3  
8
*/
