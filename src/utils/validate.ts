export default function validate(value: string): boolean {
  const regexBY = /^(?:\+375|375|80)\s?\(?(?:25|29|33|44)\)?\s?\d{3}\s?\-?\d{2}\s?\-?\d{2}/g;
  const result = regexBY.test(value);

  return result;
}
