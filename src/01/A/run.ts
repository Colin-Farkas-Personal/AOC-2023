import getDataArrayAsync from "../../helpers/getFileData";

export const exampleFilePath = __dirname + "/example.txt";
export const realFilePath = __dirname + "/data.txt";

// Get document data
async function partA(filePath: string) {
  try {
    const dataArray = (await getDataArrayAsync(filePath))!;

    return getCalibrationSum(dataArray);
  } catch (error) {
    console.error(error);
  }
}

// Parse and Calculate calibration values
export function getCalibrationSum(dataArray: string[]) {
  let result = 0;
  dataArray.forEach((calibration) => {
    result += parseInt(`${firstDigit(calibration)}${secondDigit(calibration)}`);
  });
  return result;
}
function firstDigit(string: string) {
  const chars = [...string];
  return chars.find((e) => parseInt(e));
}
function secondDigit(string: string) {
  const chars = [...string];
  return chars.reverse().find((e) => parseInt(e));
}

export default partA;
