class USER {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log('hello ', this.name);
  }
}

let user = new USER('jeeva');
user.greet();

function setUser(mname) {
  let username = mname;

  return {
    greet: function () {
      console.log('hello ', username);
    },
  };
}

let outerSetUser = setUser('jeeva');
outerSetUser.greet();
