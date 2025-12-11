import removestart from "../src/removestart";
import test from "tape";

test("removestart", function(t) {
  t.plan(4);
  t.equal(removestart("hello", 1), "ello");
  t.equal(removestart("hello", 2), "llo");
  t.equal(removestart("hello", 5), "");
  t.equal(removestart("hello", 0), "hello");
});
