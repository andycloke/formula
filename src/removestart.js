import isblank from "./isblank";
import n from "./n";

export default function removestart(text, number) {
  if (isblank(text)) {
    return "";
  }
  if (!n(+number)) {
    return text;
  }
  return text.substring(number);
}
