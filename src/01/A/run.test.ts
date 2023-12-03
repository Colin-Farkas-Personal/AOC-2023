import { getCalibrationSum } from "./run";

test('returns sum 65 on input ["1CECGF4", "50E51"]', () => {
  const input = ["1CECGF4", "50E51"];
  expect(getCalibrationSum(input)).toEqual(14 + 51);
});
test('returns sum  on input ["nine2four4941seven", "ninejcfqknhcfpcbcsmnpvn4six5j]', () => {
  const input = ["nine2four4941seven", "ninejcfqknhcfpcbcsmnpvn4six5j"];
  expect(getCalibrationSum(input)).toEqual(21 + 45);
});
