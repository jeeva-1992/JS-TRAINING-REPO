sayhello(); //works before declartion
function sayhello() {
  console.log('hello');
}
sayhello(); //works after declartion

//let,var & const example
sayHelloVar; //no error but jumps to next line
sayHelloLet(); //TypeError: sayHello is not a function
const sayHelloLet = function () {
  console.log('hello let,var,const');
};
sayHelloLet(); //works after declartion
