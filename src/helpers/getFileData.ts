import * as fs from "fs";

// Read the contents of the text file
function getFileDataAsync(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(`Error reading file: ${err.message}`);
      } else {
        resolve(data);
      }
    });
  });
}

export default async function getDataArrayAsync(filePath: string) {
  try {
    const data = await getFileDataAsync(filePath);

    return data.toString().split("\n");
  } catch (error) {
    console.error(error);
  }
}
