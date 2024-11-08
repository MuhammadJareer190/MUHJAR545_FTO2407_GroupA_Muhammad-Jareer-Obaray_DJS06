// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Exercise 1: ForEach Basics
console.log("Exercise 1:");
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// Exercise 2: Uppercase Transformation
console.log("\nExercise 2:");
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);

// Exercise 3: Name Lengths
console.log("\nExercise 3:");
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Exercise 4: Sorting
console.log("\nExercise 4:");
const sortedProvinces = [...provinces].sort(); // Spread to avoid mutating the original array
console.log(sortedProvinces);

// Exercise 5: Filtering Cape
console.log("\nExercise 5:");
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

// Exercise 6: Finding 'S'
console.log("\nExercise 6:");
const hasS = names.map(name => name.includes('S'));
console.log(hasS);

// Exercise 7: Creating Object Mapping
console.log("\nExercise 7:");
const provinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(provinceMapping);
