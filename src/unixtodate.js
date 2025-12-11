// UNIXTODATE converts a Unix timestamp (seconds since epoch) to an ISO 8601 date string.
import isblank from "./isblank";
import { ERRORTYPES as error } from "./error";

export default function unixtodate(timestamp) {
  if (isblank(timestamp)) {
    return error.value;
  }
  const num = Number(timestamp);
  if (isNaN(num) || !isFinite(num)) {
    return error.value;
  }
  const date = new Date(num * 1000);
  return date.toISOString();
}
