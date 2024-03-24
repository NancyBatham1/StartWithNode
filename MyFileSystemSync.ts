import fs, { existsSync, readFile } from "node:fs";
import path from "node:path";

export class MyFileSystemSync {
    dirname: string = "";
    filename: string = "";
    pathname: string = "";


    constructor(dirname: string, filename: string) {
        this.dirname = dirname;
        this.filename = filename;
    }

    getDirName() {
        return this.dirname;
    }

    setDirName(dirname: string) {
        return (this.dirname = dirname);
    }

    getFileName() {
        return this.filename;
    }

    setFileName(filename: string) {
        return (this.filename = filename);
    }

    setPathName() {
        return (this.pathname = path.join(this.dirname, this.filename));
    }

    getPathName() {
        return this.pathname;
    }

    makeDirectory() {
        if (!existsSync(this.dirname)) {
            fs.mkdirSync(this.dirname)
            console.log("Directory Created Successfully")
        }
        
    }  

    makeFile(content:string){
        if(!existsSync(this.pathname)){
            fs.writeFileSync(this.pathname,content);
            console.log("File Created Successfully")
        }
    }

    appendFile(content:string){
        if(existsSync(this.pathname)){
            fs.appendFileSync(this.pathname,content);
            console.log("Data appended Successfully")
        }
    }

    readFile():any{
        if(existsSync(this.pathname)){
            const data = fs.readFileSync(this.pathname,'utf-8');
            return data;
        }
    }

    deleteFile(){
        if(existsSync(this.pathname)){
            fs.unlinkSync(this.pathname);
            console.log("File deleted Successfully")
        }
    }

    deleteDirectory(){
        if(existsSync(this.dirname)){
            fs.rmdirSync(this.dirname);
            console.log("Directory deleted Successfully")
        }
    } 


}
