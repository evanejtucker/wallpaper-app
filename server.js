const express = require('express');
const app = express();
const wallpaper = require('wallpaper');
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.sendFile('./index.html');
});

app.get('/wallpaper', (req, res, next)=> {
    let imagePath = path.join(__dirname, 'public/images/background.jpg');
    wallpaper.set(imagePath).then(() => {
        console.log(imagePath);
        res.redirect('/');
    });
});

app.get('/wallpaper1', (req, res, next)=> {
    let imagePath = path.join(__dirname, 'public/images/background1.jpg');
    wallpaper.set(imagePath).then(() => {
        console.log(imagePath);
        res.redirect('/');
    });
});

app.get('/wallpaper2', (req, res, next)=> {
    let imagePath = path.join(__dirname, 'public/images/background2.jpg');
    wallpaper.set(imagePath).then(() => {
        console.log(imagePath);
        res.redirect('/');
    });
});

app.get('/wallpaper3', (req, res, next)=> {
    let imagePath = path.join(__dirname, 'public/images/background3.jpg');
    wallpaper.set(imagePath).then(() => {
        console.log(imagePath);
        res.redirect('/');
    });
});

app.get('/wallpaper4', (req, res, next)=> {
    let imagePath = path.join(__dirname, 'public/images/background4.jpg');
    wallpaper.set(imagePath).then(() => {
        console.log(imagePath);
        res.redirect('/');
    });
});

app.get('/wallpaperInfo', (req, res, next)=> {
    wallpaper.get().then((imageInfo) => {
        console.log(imageInfo);
        res.redirect('/');
    });
});

app.get('/test', (req, res, next)=> {
    res.send('test route is working');
});

app.listen(port, ()=> {
    console.log('connected on port ' + port);
});