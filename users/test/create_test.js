const assert = require("assert");
const User = require("../src/user");

/* Describe function */
describe("Creating records", () => {
  /* It functions */
  it("saves a user", done => {
    const cesar = User({ name: "Cesar Cruz" });
    cesar
      .save()
      .then(() => {
        assert(!cesar.isNew);
        done();
      })
      .catch(error => {
        console.log("error", error);
      });
  });
});
