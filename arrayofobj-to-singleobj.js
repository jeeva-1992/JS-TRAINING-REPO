const a = [
  { key: 'a', value: 10 },
  { key: 'b', value: 20 },
  { key: 'c', value: 30 },
];

let data = a.reduce((pObj, cObj) => {
  pObj[cObj.key] = cObj.value;
  return pObj;
}, {});

console.log(data);
