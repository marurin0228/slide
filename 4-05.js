var express = require('express');
var ejs = require("ejs"); //追加

var app  =express()

app.engine('ejs',ejs.renderFile);//追加

app.get('/', (req, res)=> {
    //index.ejsをレンダリングする
    res.send('4-04.ejs',
    {title: 'Index',
        content: 'This is Express-app Top page!'});
});

app.listen(3000, () => {
    console.log('Start server port:3000');
})