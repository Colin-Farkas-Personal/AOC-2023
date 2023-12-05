import partB, { exampleFilePath, realFilePath } from "./02/B/run";

// Runs code
async function main() {
  const result = await partB(realFilePath);

  console.log("------------------");
  console.log("Result: ", result);
  console.log("------------------");
}

main();
