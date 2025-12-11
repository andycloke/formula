import isblank from "./isblank";
import n from "./n";

export default function removeend(text, number) {
  if (isblank(text)) {
    return "";
  }
  if (!n(+number)) {
    return text;
  }
  return text.substring(0, text.length - number);
}
