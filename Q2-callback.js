const fs = require("fs");

// I really hate this callback hell, but here it is

const writeFile = (callback) => {
  fs.writeFile("working.txt", "Creating new file...", (err) => {
    if (err) {
      console.log("Error writing file:", err);
      return;
    }
    callback();
  });
};

const appendFile = (callback) => {
  fs.appendFile("working.txt", "\nHeyo", (err) => {
    if (err) {
      console.log("Error appending to file:", err);
      return;
    }
    callback();
  });
};

const readFile = (callback) => {
  fs.readFile("working.txt", "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }
    console.log("File contents:", data);
    callback();
  });
};

const renameFile = (callback) => {
  fs.rename("working.txt", "complete.txt", (err) => {
    if (err) {
      console.log("Error renaming file:", err);
      return;
    }
    callback();
  });
};

writeFile(() => {
  appendFile(() => {
    readFile(() => {
      renameFile(() => {
        console.log("All operations completed");
      });
    });
  });
});
