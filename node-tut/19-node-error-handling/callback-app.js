const fs = require('fs');

console.log('1. Starting file operation...');

// 1. Write a file using an error-first callback
fs.writeFile('message.txt', 'Hello from an error-first callback!', (writeErr) => {
  if (writeErr) {
    console.error('❌ Failed to write file:', writeErr.message);
    return;
  }
  
  console.log('2. File written successfully!');

  // 2. Read the file back using an error-first callback
  fs.readFile('message.txt', 'utf8', (readErr, data) => {
    if (readErr) {
      console.error('❌ Failed to read file:', readErr.message);
      return;
    }

    console.log('3. File contents read successfully:');
    console.log(data);
  });
});

console.log('4. Asynchronous operations initiated (this logs BEFORE the file operations finish).');