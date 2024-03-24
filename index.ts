// SYNCRONOUS FILE READING
import { MyFileSystemSync } from "./MyFileSystemSync";
import { MyFileSystemAsync } from "./MyFileSystemAsync";

const dirname = "Uploads";
const filename = "one.txt";
const syncfileobj = new MyFileSystemSync(dirname, filename);

////// const uploadSync = () => {
//   //syncfileobj.setDirName('new')
//   //console.log(syncfileobj.getDirName());
//   syncfileobj.setPathName();
//   const exactpath = syncfileobj.getPathName();

//   console.log(exactpath);
//   syncfileobj.makeDirectory();
//   syncfileobj.makeFile("Hello Content");
//   syncfileobj.appendFile(" after hello world content");
//   console.log(syncfileobj.readFile());

//   syncfileobj.deleteFile();////remove comment if you want to delete file in folder
//    syncfileobj.deleteDirectory();///// remove comment if you want to delete directory
//////};

////// const uploadASync = () => {
//    const filenameA = "two.txt";
//   const asyncfileobj = new MyFileSystemAsync(dirname, filenameA);

//   asyncfileobj.setDirName('Uploads');
//   asyncfileobj.setFileName(filenameA);

// //   console.log(asyncfileobj.getDirName());
//     asyncfileobj.setPathName();
//     const exactpath =  asyncfileobj.getPathName();

//    console.log(exactpath)
//    asyncfileobj.makeDirectory();
//    asyncfileobj.makeFile('Hello Content');
//    asyncfileobj.appendFile(" after hello world content");
//    console.log(asyncfileobj.readFile().then(data => console.log(data)));

 //asyncfileobj.deleteFile();////remove comment if you want to delete file in folder
// asyncfileobj.deleteDirectory();///// remove comment if you want to delete directory
////// };
