
// const fs = require("fs/promises");

// fs.readFile("missing.txt", "utf8")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("Error:", err.message);
//   });



function square(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num !== "number") {
        reject(new TypeError(
          `Expected number but got: ${typeof num}`
        ));
        return;
      }

      const result = num * num;
      resolve(result);
    }, 100);
  });
}

square(null)
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));
