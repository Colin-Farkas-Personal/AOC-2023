import partB, { exampleFilePath, realfilePath } from "./01/B/run";

// Runs code
async function main() {
  const result = await partB(realfilePath);

  console.log("------------------");
  console.log("Result: ", result);
  console.log("------------------");
}

main();
