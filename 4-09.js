var express = require('express');
var ejs = require("ejs");

var app  =express();
app.engine('ejs',ejs.renderFile);
app.use(express.static('public'));//追記

//※トップページ
app.get("/",(req, res) => {
    var msg = 'This is Index Page!<br>'
        + 'これは、トップページです。';
    res.render('index.ejs',
        {
            title: 'Index',
            content: msg,
            link:{href:'other', text:'※別のページに移動'}
        });
});

//※otherページ
app.get("/other",(req,res) => {
    var msg = 'This is Other Page!<br>'
        + 'これは、用意された別のページです。';
    res.render('index.ejs',
    {
        title: 'other',
        content: msg,
        link:{href:'/',text:'※トップに戻る'}
    });
})

var server = app.listen(3000, () => {
    console.log('Server is running!');
})