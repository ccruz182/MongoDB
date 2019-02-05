const assert = require("assert");
const User = require("../src/user");

describe("Deleting an user", () => {
  let cesar;

  beforeEach(done => {
    cesar = new User({ name: "CESAR" });
    cesar.save().then(() => done());
  });

  it("Model instance remove", done => {
    cesar
      .remove()
      .then(() => User.findOne({ name: "CESAR" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it("Class method remove", done => {
    // Remove a bunch of records with some given criteria.
    User.remove()
      .then(() => User.findOne({ name: "CESAR" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it("Class method findOneAndRemove", done => {
    User.findOneAndRemove({ name: "CESAR" })
      .then(() => User.findOne({ name: "CESAR" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it("Class method findByIdAndRemove", done => {
    User.findByIdAndRemove(cesar._id)
      .then(() => User.findOne({ name: "CESAR" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });
});
