function filterRange(arr, a, b) {
  return arr.filter(num => num >= a && num <= b);
}
let arr = [5, 3, 8, 1]
let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr );