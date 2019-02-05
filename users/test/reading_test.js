const assert = require("assert");
const User = require("../src/user");

describe("Reading records", () => {
  let cesar;

  beforeEach(done => {
    cesar = new User({ name: "Cesar" });
    cesar.save().then(() => done());
  });

  it("Finding all user with the same name", done => {
    User.find({ name: "Cesar" }).then(users => {
      assert(users[0]._id.toString() === cesar.id.toString());
      done();
    });
  });

  it("Find a user with a specific id", done => {
    User.findOne({_id: cesar._id}).then(user => {
      assert(user.name === cesar.name);
      done();
    });
  });
});
