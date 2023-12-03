import { getCalibrationSum, getDigits } from "./run";

test('returns 59 on input "five10nine"', () => {
  const input = "five10nine";
  expect(getDigits(input)).toEqual(59);
});

test('returns 83 on input "eightwothree"', () => {
  const input = "eightwothree";
  expect(getDigits(input)).toEqual(83);
});

test("returns 281 for example array", () => {
  const input = [
    "two1nine",
    "eightwothree",
    "abcone2threexyz",
    "xtwone3four",
    "4nineeightseven2",
    "zoneight234",
    "7pqrstsixteen",
  ];

  expect(getCalibrationSum(input)).toEqual(281);
});
