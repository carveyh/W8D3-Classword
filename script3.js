class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

Function.prototype.myBind = function(someArg){
	// ES5:
	// that = this;
	// return function() {
	// 	return that.call(someArg);
	// }

	// ES6:
	return () => {
		return this.call(someArg);
	}
};

// What's the difference btwn .bind and .apply (and .call)?

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"