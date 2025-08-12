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



function printDirectory(json){
    Object.entries(json).forEach(([key,value]) => {
    if(value && typeof value == 'object'){
        console.log('folder',key);
        printDirectory(value);
    }else{
        console.log('file',key)
    }
})
}

printDirectory(directoryJson);



