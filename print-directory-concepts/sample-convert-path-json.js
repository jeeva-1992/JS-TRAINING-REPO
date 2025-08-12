const fs = require('fs');
const path = require('path');


function showAllDirectoryAndFiles(pathString,prefix='') {
    let rootPath = path.resolve(pathString);

    let directory = fs.readdirSync(rootPath);

    for (let dir of directory) {
        let mPath = path.join(rootPath, dir);
      //  console.log(mPath);
        let pathData = fs.statSync(mPath);
        if(pathData.isDirectory()){
            console.log(prefix +'\u{1f4c1}'+dir);
            showAllDirectoryAndFiles(mPath,prefix+' ');
        }else{
            console.log(prefix+'\u{1f4c4}'+dir);
        }

    }
}


//console.log('\u{1f4c1}'+'mapping-connection-bhc')
//showAllDirectoryAndFiles('/Users/jeevananthamr/Downloads/mapping-connection-bhc',' ');


showAllDirectoryAndFiles('/Users/jeevananthamr/Downloads/mapping-connection-bhc');
