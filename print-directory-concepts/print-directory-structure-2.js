const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');

const rootPath = path.resolve('/Users/jeevananthamr/Downloads/mapping-connection-bhc'); // Example for Mac

//console.log(`📂 ${rootPath}`);

const directory = fs.readdirSync(rootPath);
const structure = {};
//console.log('📂 Directory Structure:',directory);

for(let item of directory) {
    const fullPath = path.join(rootPath, item);
   // console.log(fullPath)
    const stat = fs.statSync(fullPath);
    //console.log('📂 Stat:', stat);

    if(stat.isDirectory()) {
        structure[item] = 'Directory';
        console.log(`📂 ${structure[item]}`);
    } else {
        structure[item] = 'File';
        console.log(`📄 ${structure[item]}`);
    }
}

for(let key in structure) {
        console.log(`📂 ${key} - ${structure[key]}`);
    }