function counter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(count);
    },

    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

let fn = counter();
fn.increment();
fn.increment();
fn.decrement();
