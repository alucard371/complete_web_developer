// reference doctype

var object1 = {
  10
};
var object2 = object1;
var object3 = {
  10
};

// context vs scope

cosnt object4 = {
  a: function() {
    console.log(this);
  }
}

object4.a()

// instantiation

class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi i am ${this.name} and i am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    //in order to call the constructor function
    super(name, type)
  }

  play() {
    console.log(`WEEEEE i'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Bobby', 'Healer');
const wizard2 = new Wizard('Shaun', 'Dark magic');