// Protypical Inheritance
// Achived thorugh Protype or Prototype chain

var arr = [1, 2, 3];

callBackFunction1 = (value, index)=> {
    console.log(index)
    console.log(value)
}

arr.forEach(callBackFunction1)

Array.prototype.forEachCustom = function(callBackFunction) {
    console.log(this);
    for(let i = 0; i< this.length; i++) {
        callBackFunction(this[i], i)
    }
}

multiplyBy2Callback = (value)=> {
    return value * 2
}

arr.map(multiplyBy2Callback)

Array.prototype.mapCustom = function(callBackFunction) {
    let updatedArray = []
    for(let i = 0; i< this.length; i++) {
        let returnValue = callBackFunction(this[i])
        updatedArray.push(returnValue)
    }

    return updatedArray
}
arr.map(multiplyBy2Callback)
arr.forEachCustom(callBackFunction1)