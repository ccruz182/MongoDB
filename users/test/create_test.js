const assert = require("assert");
const User = require("../src/user");

const mongoose = require("mongoose");

/* Database connection */
mongoose.connect("mongodb://localhost/users_test");
mongoose.connection
  .once("open", () => {
    console.log("Good to go!");
  })
  .on("error", error => {
    console.warn("Warning:", error);
  });


/* Describe function */
describe("Creating records", () => {
  /* It functions */
  it("saves a user", () => {
    const cesar = User({name: "Cesar Cruz"});
    cesar.save();
  });
});
