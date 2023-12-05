import getDataArrayAsync from "../../helpers/getFileData";

export const exampleFilePath = __dirname + "/example.txt";
export const realFilePath = __dirname + "/data.txt";

export default async function getSumofGames(filePath: string) {
  const games = await getDataArrayAsync(filePath);

  let sumID = 0;
  games?.forEach((game) => {
    sumID += getGameValidID(game)!;
  });

  return sumID;
}

function getGameValidID(game: string) {
  // Find numbers assosiated with blue
  const gameName = game.split(":")[0];
  const gameID = [...gameName]
    .filter((e) => !isNaN(Number(e)) && e !== " ")
    .join("");

  const gameData = game.split(":")[1];
  const red = checkColorValid(gameData, "red");
  const green = checkColorValid(gameData, "green");
  const blue = checkColorValid(gameData, "blue");

  if (!red || !green || !blue) return 0;

  return parseInt(gameID);
}

type colorType = "red" | "green" | "blue";
const maxColorValues: Record<colorType, number> = {
  red: 12,
  green: 13,
  blue: 14,
};
function checkColorValid(gameData: string, color: colorType): boolean {
  const subsets = gameData.split(";");
  for (let i = 0; i < subsets.length; i++) {
    const set = subsets[i];

    const colorValues = set.split(",").find((e) => e.includes(color));
    if (!colorValues) continue;

    const cubeCount = parseInt(colorValues!.split(" ").join(""));

    if (cubeCount > maxColorValues[color]) return false;
  }

  return true;
}
