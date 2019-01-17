const assert = require("assert");
const User = require("../src/user");

describe("Reading records", () => {
  let cesar;

  beforeEach(done => {
    cesar = new User({ name: "Cesar" });
    cesar.save().then(() => done());
  });

  it("Finding all user with the same name", done => {
    User.find({ name: "Joe" }).then(users => {
      console.log(users);
      done();
    });
  });
});
