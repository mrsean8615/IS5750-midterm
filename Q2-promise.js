const fs = require("fs/promises");

const runAsyncFunctions = async () => {
  // write to file
  try {
    await fs.writeFile("working.txt", "Creating new file...");
  } catch (err) {
    console.error(err);
  }

  // append to file
  try {
    await fs.appendFile("working.txt", "\nHeyo");
  } catch (err) {
    console.error(err);
  }

  // read file
  try {
    const data = await fs.readFile("working.txt", "utf8");
    console.log(data.toString());
  } catch (err) {
    console.error(err);
  }

  // rename file
  try {
    await fs.rename("working.txt", "complete.txt");
  } catch (err) {
    console.error(err);
  }
};

runAsyncFunctions();
