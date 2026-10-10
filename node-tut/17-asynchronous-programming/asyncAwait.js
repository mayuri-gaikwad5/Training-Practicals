const prompt = require("prompt-sync")();

const userLogin = () => {
  console.log("Enter Username and Password");
  let username = prompt("Enter username: ");
  let Password = prompt("Enter password: ");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Performing User authentication...");
      if (username === "Mayuri" && Password === "Mayuri321") {
        resolve("User Authenticated");
      } else {
        reject("Authentication failed");
      }
    }, 1000);
  });
};

function goToHomepage(userAuthStatus) {
  return Promise.resolve(`Go to homepage as: ${userAuthStatus}`);
}

async function performTask() {
  try {
    const response = await userLogin();
    console.log("Validated User");
    
    // Added 'await' here so userAuthStatus evaluates to the resolved string
    const userAuthStatus = await goToHomepage(response); 
    console.log(userAuthStatus);
  } catch (error) {
    console.log(error);
  }
}

performTask();