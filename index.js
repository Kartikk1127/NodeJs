// // // // const http = require('http');
// // // // const data = require('./data');
// // // // http.createServer((request, response) => {
// // // //     response.writeHead(200, { 'Content-Type': 'application\json' });
// // // //     response.write(JSON.stringify(data));
// // // //     response.end();
// // // // }).listen(5000);

// // // // console.log(process.argv[3])

// // // // const fs = require('fs');
// // // // const input = process.argv;

// // // // if (input[2] == 'add') {
// // // //     fs.writeFileSync(input[3], input[4]);
// // // // }
// // // // else if (input[2] == 'remove') {
// // // //     fs.unlinkSync(input[3]);
// // // // }
// // // // else {
// // // //     console.log('invalid input');
// // // // }

// // // const fs = require('fs');
// // // const path = require('path')
// // // // console.log(path);
// // // const dirPath = path.join(__dirname, 'files');
// // // // console.log(dirPath);

// // // // for (i = 0; i < 5; i++) {
// // // //     fs.writeFileSync(dirPath + `/hello${i}.txt`, 'testing');
// // // // }

// // // fs.readdir(dirPath, (err, files) => {
// // //     // console.log(files);
// // //     files.forEach((item) => {
// // //         console.log(item);
// // //         console.log(err);
// // //     })
// // // })

// // const fs = require('fs');
// // const path = require('path');
// // const dirPath = path.join(__dirname, 'crud');
// // const filePath = `${dirPath}/apple.txt`;

// // // fs.writeFileSync(filePath, 'This is a simple text file');

// // // fs.readFile(filePath, 'utf8', (error, item) => {
// // //     console.log(item);
// // // })

// // // fs.appendFile(filePath, ' and file name is apple.txt', (error) => {
// // //     if (!error) console.log("file is updated successfully");
// // // })

// // // fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
// // //     if (!err) console.log('file name is updated successfully')
// // // })

// // fs.unlinkSync(`${dirPath}/fruit.txt`);

// // let a = 10;
// // let b = 0;


// // let waitingData = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve(30);
// //     }, 2000);
// // });

// // waitingData.then((b) => {
// //     console.log(a + b);
// // })

// console.log('starting');

// setTimeout(() => {
//     console.log('executting after 2 seconds')
// }, 2000);

// setTimeout(() => {
//     console.log('executting after 0 seconds')
// }, 0);

// console.log('finished');

const express = require('express')
const path = require('path')
const app = express();

// app.get('', (req, res) => {
//     console.log('data sent by browser ', req.query.name);
//     res.send('This is home page');
// });

// app.get('/about', (req, res) => {
//     res.send('This is about page');
// });

app.listen(5000);

const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));



































