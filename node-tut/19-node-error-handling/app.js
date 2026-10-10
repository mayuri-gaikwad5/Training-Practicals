const fs = require('fs');

function loadConfiguration(filePath) {
  try {
    console.log(`Attempting to read file: ${filePath}`);
    
    // This will throw an error if the file doesn't exist
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // This will throw a SyntaxError if the content isn't valid JSON
    const config = JSON.parse(fileContent);
    
    console.log("Success! Configuration loaded:", config);
  } catch (err) {
    // Catch block handles any error thrown in the try block
    console.error("❌ Caught an error during configuration loading:");
    console.error(`Error Type: ${err.name}`);
    console.error(`Error Message: ${err.message}`);
  } finally {
    console.log("--- Execution finished for this attempt ---\n");
  }
}

// Test 1: Try reading a file that doesn't exist yet
loadConfiguration('config.json');

// Test 2: Create a dummy file with invalid JSON and test it
fs.writeFileSync('bad-config.json', 'This is not valid JSON!');
loadConfiguration('bad-config.json');