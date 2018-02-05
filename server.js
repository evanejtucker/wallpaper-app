const express = require('express');
const app = express();
const wallpaper = require('wallpaper');
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res, next)=> {
    res.sendFile('./index.html')
});

app.get('/wallpaper', (req, res, next)=> {
    let imagePath = path.join(__dirname, 'public/images/background.jpg');
    wallpaper.set(imagePath).then(() => {
        console.log(imagePath);
        console.log('done');
        res.send(imagePath);
    });
});

app.get('/wallpaper1', (req, res, next)=> {
    let imagePath = path.join(__dirname, 'public/images/background1.jpg');
    wallpaper.set(imagePath).then(() => {
        console.log(imagePath);
        console.log('done');
        res.send(imagePath);
    });
});

app.get('/wallpaper2', (req, res, next)=> {
    let imagePath = path.join(__dirname, 'public/images/background2.jpg');
    wallpaper.set(imagePath).then(() => {
        console.log(imagePath);
        console.log('done');
        res.send(imagePath);
    });
});

app.get('/wallpaper3', (req, res, next)=> {
    let imagePath = path.join(__dirname, 'background3.jpg');
    wallpaper.set(imagePath).then(() => {
        console.log(imagePath);
        console.log('done');
        res.send(imagePath);
    });
});

app.get('/wallpaperInfo', (req, res, next)=> {
    wallpaper.get().then((imageInfo) => {
        console.log(imageInfo);
        res.send(imageInfo);
    });
});

app.listen(3000, ()=> {
    console.log('connected on port 3000');
});