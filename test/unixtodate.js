import test from "tape";
import { ERRORTYPES as error } from "../src/error";
import unixtodate from "../src/unixtodate";

test("unixtodate", t => {
  t.plan(5);
  t.equal(unixtodate(946684800), "2000-01-01T00:00:00.000Z");
  t.equal(unixtodate(0), "1970-01-01T00:00:00.000Z");
  t.equal(unixtodate(1704067200), "2024-01-01T00:00:00.000Z");
  t.equal(unixtodate(), error.value);
  t.equal(unixtodate("invalid"), error.value);
});
