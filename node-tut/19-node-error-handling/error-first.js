
function square(num, callback) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  setTimeout(() => {
    if (typeof num !== "number") {
      callback(new TypeError("Expected a number"));
      return;
    }

    const result = num * num;
    callback(null, result);
  }, 100);
}

square(null, (err, result) => {
  if (err) {
    console.error(err.message);
    return;
  }

  console.log(result);
});
