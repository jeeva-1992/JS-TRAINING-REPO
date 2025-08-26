// //using setTimeout
// let i=0;

// function tick(){
//     i++;
//     console.log('settimeout..',i);
//     if(i < 100){
//         setTimeout(tick,100);
//     }
// }

// tick()

// //using setinterval

// let i2 = 0;

// let id = setInterval(() => {
//     i2++;
//     if(i2 <= 100){
//         console.log('setInterval..',i2);
//     }else{
//         clearInterval(id);
//     }
// },100)


// //using rxjs
// import { interval, take } from 'rxjs';

// interval(1000).pipe(take(100)).subscribe(n => console.log('rxjs..',n+1))

// //using for loop and promise

// const sleep = (ms) => new Promise(t => setTimeout(t,ms));

// async function run(){
//     for(let i=0;i<100;i++){
//         console.log(i+1);
//         await sleep(100);
//     }
// }

// run();


let bookList = [
  { 
    name: 'Angular Basics', 
    author: 'Misko', 
    rating: 4,
    details: { year: 2010, publisher: "Google" }, 
    tags: ["Angular", "Frontend"]
  },
  { 
    name: 'RxJS Deep Dive', 
    author: 'Ben Lesh', 
    rating: 5,
    details: { year: 2018, publisher: "RxJS Org" },
    tags: ["RxJS", "Streams"]
  }
];

import { flatten } from "flat";
console.log(flatten(bookList, {
    transformKey: (key, prevKey) => {
        console.log(key,prevKey);
        if(!prevKey){
            return "bookList." + key   // add prefix to every key
        }
        
        return key;
    }
}));