// Method chaining is when a function returns an object,
// The returned object has atl;east one property that is a function,
//  allowing you to call another function on that object.    

// Chaining example - Implementation 1
function customString(initialValue) {
  this.value = initialValue;

  this.infiniteConcat =  function(stringToConcat) {
    return {
      value: this.value + " " + stringToConcat,
      infiniteConcat: this.infiniteConcat,
    };
  }
}

var x = new customString("hello");
// Chaining example - Implementation 2 - Modifies original string object
function customString(initialValue) {
  this.value = initialValue;

  this.infiniteConcat =  function(stringToConcat) {
    this.value  = this.value + " " + stringToConcat;
    return this;
  }
}

// Chaining example - Implementation 3 - Doesn't modify original string object
function customString(initialValue) {
  this.value = initialValue;

  this.infiniteConcat =  function(stringToConcat) {
    let newValue  = this.value + " " + stringToConcat;
    return new customString(newValue);
  }
}

var x = new customString("hello");
x.infiniteConcat("world");

