import { MyFileSystemSync } from './MyFileSystemSync';
import fs, { existsSync, readFile } from "node:fs";
import path from "node:path";

export class MyFileSystemAsync extends MyFileSystemSync{
    dirname: string = "";
    filename: string = "";
    pathname: string = "";
    
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

   

    makeDirectory(){
        if(!existsSync(this.dirname)){
           fs.mkdir(this.dirname,(err)=>{
             if(err){
                console.log(err);
                return;
             }
             console.log("Directory Created Successfully")
           });
        }
    }

    makeFile(content:string){
        if(!existsSync(this.pathname)){
            fs.writeFile(this.pathname,content,(err)=>{
                if(err){
                    console.log(err);
                    return;
                 }
                 console.log("File created successfully")
            });
        }
    }
    appendFile(content:string){
        if(existsSync(this.pathname)){
            fs.appendFile(this.pathname,content,(err)=>{
                if(err){
                    console.log(err);
                    return;
                 }
                 console.log("Data Appended successfully")
            });
        }
    }


   async readFile(){
        if(existsSync(this.pathname)){
            const data = await new Promise((resolve, reject) =>{
                fs.readFile(this.pathname,'utf-8',(err,data)=>{
                    if(err){
                      reject(err)
                    }else{
                     resolve(data)
                    }
                  });
            })
            return data;
        }
    }

    deleteFile(){
        if(existsSync(this.pathname)){
           fs.unlink(this.pathname,(err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("file Deleted Successfully")
           });
        }
    }

    deleteDirectory(){
        if(existsSync(this.dirname)){
            fs.rmdir(this.dirname,(err)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log("Directory Deleted Successfully")
               });
         }
    }
}