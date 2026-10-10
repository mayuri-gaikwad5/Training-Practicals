
const { EventEmitter } = require("events");

function emitCount() {
  const emitter = new EventEmitter();
  let count = 0;

  const interval = setInterval(() => {
    count++;

    if (count % 4 === 0) {
      emitter.emit(
        "error",
        new Error(`Something went wrong on count: ${count}`)
      );
    } else {
      emitter.emit("success", count);
    }

    if (count === 10) {
      clearInterval(interval);
      emitter.emit("end");
    }
  }, 1000);

  return emitter;
}

const emitter = emitCount();

emitter.on("success", (count) => {
  console.log("Success:", count);
});

emitter.on("error", (err) => {
  console.log("Error:", err.message);
});

emitter.on("end", () => {
  console.log("Process completed!");
});
