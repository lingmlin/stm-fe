var OSS = require('ali-oss')
var fs = require('fs')
var path = require('path')
var co = require('co')

const argv = process.argv.splice(2)[0]
let bucket = ''
let localPath = ''
let remotePath = ''

console.log(`${process.cwd()}/dist`)
console.log(argv)

switch (argv) {
  case 'dev':
    // bucket = 'qlm-education-uat';
    // localPath = `${process.cwd()}/dist`;
    // remotePath = `/`;
    break;
  case 'prod':
    // bucket = 'qlm-education-prod';
    // localPath = `${process.cwd()}/dist`;
    // remotePath = `/`;
    break;
}

var client = new OSS({
  // region: 'oss-cn-shenzhen',
  // accessKeyId: 'LTAI1kgKTNiVqUFV',
  // accessKeySecret: ,
  // bucket: bucket
})

localPath = path.resolve(localPath)

var fileDic = new Array()

readDir(localPath)

function readDir(filePath) {
  filePath = path.resolve(filePath);
  //遍历文件目录
  var pa = fs.readdirSync(filePath);
  pa.forEach(function (filename, index) {
    var file = path.join(filePath, filename)
    var info = fs.statSync(file)
    if (info.isDirectory()) { //目录   
      readDir(file)
    } else { //添加到上传列表
      var localDir = path.join(filePath, filename)
      var remoteDir = path.join(remotePath, localDir.replace(localPath, ''));
      remoteDir = remoteDir.replace(/\\/g,'/');//Charles replace file separator
      fileDic[localDir] = remoteDir
      console.log(`add file：${localDir}`)
    }
  })
}



async function upload(){
  try{
    for (var localDir in fileDic) {
      var result = await client.put(fileDic[localDir], localDir);
      console.log("upload from '" + localDir + "' to '" + fileDic[localDir] + "'");
    }
  }catch(e){
    console.log(e);
  }
  
}

  upload();
