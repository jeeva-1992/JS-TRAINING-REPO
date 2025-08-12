const fs = require('fs');

const directoryJson = {
  "root": {
    "folder1": {
      "file1.txt": null,
      "file2.txt": null
    },
    "folder2": {
      "subfolder1": {
        "file3.txt": null
      }
    },
    "file4.txt": null
  }
};

function writeResultInToTextFile(json,prefix = '') {
     let result = '';
    for(let [key, value] of Object.entries(json)) {
        if(value && typeof value === 'object') {
            result += prefix + '\u{1f4c1}' +key +'\n'
            result += writeResultInToTextFile(value, prefix + '  ');
        } else {
            result += prefix + '\u{1f4c4}' +key + '\n';
        }
    }
    
    return result;
}

let output = writeResultInToTextFile(directoryJson);
try {
  fs.writeFileSync('wstructure.txt', output);
  console.log('✅ File created');
} catch (err) {
  console.error('❌ Error writing file:', err);
}
//console.log(output);