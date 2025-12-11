import test from "tape";
import substitute from "../src/substitute";

test("substitute", function (t) {
  t.plan(8);
  t.equal(substitute("Hello, <name>", "<name>", "Bob"), "Hello, Bob");
  t.equal(
    substitute("Hello, <name> <name>", "<name>", "Bob"),
    "Hello, Bob Bob"
  );
  t.equal(
    substitute("Hello, <name> <name>", "<name>", "Bob", 2),
    "Hello, <name> Bob"
  );

  t.equal(
    substitute("Hello, <name> <name> <name>", "<name>", "Bob", 2),
    "Hello, <name> Bob <name>"
  );

  // Empty string replacement (deletion)
  t.equal(
    substitute("Hello, <name>", "<name>", ""),
    "Hello, ",
    "should remove all occurrences when new_text is empty string"
  );
  t.equal(substitute("a-b-c", "-", ""), "abc", "should remove all dashes");
  t.equal(
    substitute("Hello, <name> <name>", "<name>", "", 2),
    "Hello, <name> ",
    "should remove specific occurrence when new_text is empty string"
  );

  // null new_text should return original text
  t.equal(
    substitute("Hello, <name>", "<name>", null),
    "Hello, <name>",
    "should return original text when new_text is null"
  );
});
