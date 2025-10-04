// How imports an exports work in JS
// Named imports and exports
export function sum(...items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum = sum + items[i];
  }
  return sum;
}

export function substract(...items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum = sum + items[i];
  }
  return sum;
}
