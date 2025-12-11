import removeend from "../src/removeend";
import test from "tape";

test("removeend", function(t) {
  t.plan(4);
  t.equal(removeend("hello", 1), "hell");
  t.equal(removeend("hello", 2), "hel");
  t.equal(removeend("hello", 5), "");
  t.equal(removeend("hello", 0), "hello");
});
