import test from "tape";
import interpolate from "../src/interpolate";

test("interpolate", t => {
  t.plan(2);
  t.equal(interpolate(0, 100, 0.4), 40);
  // Use UTC dates to avoid timezone-dependent test failures
  const d1 = new Date(Date.UTC(2015, 11, 1));
  const d2 = new Date(Date.UTC(2015, 11, 31));
  t.equal(
    interpolate(d1, d2, 0.5).toISOString(),
    "2015-12-16T00:00:00.000Z"
  );
});
