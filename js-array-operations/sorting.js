//asending-decending
let data = [40, 100, 1, 5, 25, 10, 20, 56, 35];

let ascending = structuredClone(data.sort((a, b) => a - b));

console.log('ascending..', ascending);

let decending = data.sort((a, b) => b - a);

console.log('decending..', decending);