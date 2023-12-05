import getDataArrayAsync from "../../helpers/getFileData";

export const exampleFilePath = __dirname + "/example.txt";
export const realFilePath = __dirname + "/data.txt";

export default async function getSumofPowerOfGames(filePath: string) {
  const games = await getDataArrayAsync(filePath);

  let sumID = 0;
  games?.forEach((game) => {
    sumID += getPowerOfGame(game)!;
  });

  return sumID;
}

function getPowerOfGame(game: string) {
  const gameData = game.split(":")[1];

  const fewestPossibleRed = getFewestPossible(gameData, "red");
  const fewestPossibleGreen = getFewestPossible(gameData, "green");
  const fewestPossibleBlue = getFewestPossible(gameData, "blue");

  return fewestPossibleRed * fewestPossibleGreen * fewestPossibleBlue;
}

type colorType = "red" | "green" | "blue";
function getFewestPossible(gameData: string, color: colorType): number {
  const subsets = gameData.split(";");
  let highest = 0;
  for (let i = 0; i < subsets.length; i++) {
    const set = subsets[i];

    const colorValues = set.split(",").find((e) => e.includes(color));
    if (!colorValues) continue;

    const cubeCount = parseInt(colorValues!.split(" ").join(""));

    if (cubeCount > highest) highest = cubeCount;
  }

  return highest;
}
