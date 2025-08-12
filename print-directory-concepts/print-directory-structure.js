const fs = require('fs');
const path = require('path');

function getDirectoryStructure(dirPath) {
  const structure = {};
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      structure[item] = getDirectoryStructure(fullPath); // Recursive
    } else {
      structure[item] = null; // File
    }
  }

  return structure;
}

function printDirectoryStructure(obj, prefix = '') {
  for (let key in obj) {
    const isFile = obj[key] === null;
    console.log(`${prefix}${isFile ? '📄' : '📂'} ${key}`);
    if (!isFile) {
      printDirectoryStructure(obj[key], prefix + '  ');
    }
  }
}

// 🔽 Change this path to the folder you want to explore
const rootPath = path.resolve(
  '/Users/jeevananthamr/Downloads/mapping-connection-bhc'
); // Example for Mac

const dirObj = getDirectoryStructure(rootPath);
printDirectoryStructure(dirObj);
