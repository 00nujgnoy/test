//server.js 파일
const express = require('express')
const boardRouter = require('./router.js')
// require 함수의 인자값으로는 router.js 파일의 경로를 작성
const app = express();

app.use('/board', boardRouter);

app.listen(3000, () =>{
    console.log('server onload');
})