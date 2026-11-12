const add = require("./app");

const result = add(10, 20);

if (result === 30) {
    console.log("Test Passed");
} else {
    console.log("Test Failed");
}