const Cpath = require("path");
const fs = require("fs");
const dirs = [];
const pathName = "D:\\a_liantong\\health-management\\";
function readFileList(path, filesList) {
  var files = fs.readdirSync(path);
  files.forEach(function (itm, index) {
    var stat = fs.statSync(path + itm);
    if (stat.isDirectory()) {
      //递归读取文件
      readFileList(path + itm + "/", filesList)
    } else {
      if (itm == 'Dockerfile' || itm.endsWith('.jar')) {
      // if (itm == 'authority-management-1.0-SNAPSHOT.jar'){
        // 替换成d://back
        const dirName = path.replace("D:\\a_liantong\\health-management", "D:\\back")
        const _src = Cpath.join(path, itm);
        const desc = Cpath.join(dirName, itm)
        // 是否存在
        fs.access(dirName, fs.constants.F_OK, (err) => {
            // console.log(!err ? '有了' : ("没有" + dirName))
          if (!err) {
            // 创建读取流
            const readable = fs.createReadStream(_src);
            // 创建写入流
            const writable = fs.createWriteStream(desc);
            // 通过管道来传输流
            readable.pipe(writable);
          } else {
            fs.mkdir(dirName, { recursive: true }, (err) => {
              if (err) throw err;
              // 创建读取流
              const readable = fs.createReadStream(_src);
              // 创建写入流
              const writable = fs.createWriteStream(desc);
              // 通过管道来传输流
              readable.pipe(writable);
            });
          }
        });
        
      }
     
    }

  })

}
  
readFileList(pathName, dirs)
console.log(dirs);


function getParentName(curPath, count) {
  let res = curPath
  for (var i = 0; i < count; i++) {
    res = path.resolve(res, '..')
  }
  return res
}