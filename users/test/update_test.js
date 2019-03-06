const assert = require("assert");
const User = require("../src/user");

beforeEach(done => {
  joe = new User({name: 'Joe', postCount: 0});
  joe.save().then(() => done());
});

it("A user can have their postcount incremented by 1", () => {

})