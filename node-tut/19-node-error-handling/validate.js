function calculateRectangleArea(length, width) {
  // Check for correct data types
  if (typeof length !== 'number' || typeof width !== 'number') {
    throw new TypeError('Both length and width must be numbers.');
  }
  
  // Check for logical value constraints
  if (length <= 0 || width <= 0) {
    throw new RangeError('Length and width must be greater than zero.');
  }
  
  return length * width;
}

// Test different scenarios
const testCases = [
  [5, 10],         // Valid
  ['5', 10],       // Triggers TypeError
  [5, -3]          // Triggers RangeError
];

testCases.forEach(([l, w]) => {
  try {
    console.log(`\nTesting: length = ${l}, width = ${w}`);
    const result = calculateRectangleArea(l, w);
    console.log(`✅ Success! Area is: ${result}`);
  } catch (err) {
    // You can handle different error types differently if needed!
    console.error(`❌ Caught ${err.name}: ${err.message}`);
  }
});