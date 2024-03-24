import http from "node:http";
import fs from "node:fs";
import json from "./country.json";
import querystring from "querystring";
import { ExecFileException } from "node:child_process";

const server = http.createServer((req, res) => {
  const route = req.url;
  if (route == "/") {
    const html = fs.readFileSync("./index.html", "utf-8");
    res.end(html);
  } else if (route == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<h1> Hello I AM About </h1> <a href='http://localhost:8000/'>Home</a>"
    );
  } else if (route == "/contact") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(json));
  } else if (route == "/login") {
    const html = fs.readFileSync("./login.html", "utf-8");
    res.end(html);
  } else if (route == "/loginSubmit" && req.method == "POST") {
    try {
      // Code that might throw an exception
      //throw new Error("Something went wrong");
      let data: any;
      req.on("data", (chunk) => {
        data += chunk;
      });

      req.on("end", () => {
        if (req.headers["content-type"] == "application/json") {
          let empobj = JSON.parse(data);

          let { username, password } = empobj;
          res.end(`<h1>My name is ${username} and password ${password}</h1>`);
        } else if (
          req.headers["content-type"] == "application/x-www-form-urlencoded"
        ) {
          let empobj = querystring.parse(data);
          console.log("nann")
          console.log(data)
         
          let { username, password } = empobj;
        
          res.end(`<h1>My name is ${username} and ${password}</h1>`);
        }
      });
    } catch (e: any) {
      // Catch and handle the exception
      console.error("An error occurred:", e.message);
      res.end();
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page not Found</h1>");
  }
});

server.listen(8000, () => {
  console.log("running on port 8000");
});

// export class Server{

//     server:any;
//     route:any;

//     constructor(){

//         this.server = http.createServer((req,res)=>{
//         this.route= req.url;
//         console.log("running on port 8000");
//         res.end("<h1> Hello I AM About </h1>");
//             // this.server.listen(8000,()=>{
//             //     console.log("running on port 8000");
//             // })

//             // if(this.route=='/'){res.end("<h1> Hello I AM About </h1>");}
//         });
//     }

// }
