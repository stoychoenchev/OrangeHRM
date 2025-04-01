const numbers = [1, 5, 15, 55, 99];

// Callback function for forEach (Challenge 1)
const numbersFunc = (number, index, array) => {
  console.log(`Value: ${number}, Index: ${index}, Full Array:`, array);
};

numbers.forEach(numbersFunc); // ✅ Includes index and array

// Chaining filter() and map() (Challenge 2)
const filterFunc = (num, index) => {
  console.log(`Filtering index ${index}: ${num}`);
  return num >= 10;
};
const mapFunc = (num, index) => {
  console.log(`Mapping index ${index}: ${num} → ${num * num}`);
  return num * num;
};

const result = numbers.filter(filterFunc).map(mapFunc);
console.log("Filtered & Mapped Result:", result);

// Flattening a nested array with reduce() (Challenge 4)
const nestedArray = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];

const flattened = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log("Flattened Array:", flattened);
