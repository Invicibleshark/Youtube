const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());
app.use(express.json()); // To parse JSON bodies

app.post('/video', async (req, res) => {
    const { url } = req.body;
    if (!url || !ytdl.validateURL(url)) {
        return res.status(400).send('Invalid YouTube URL');
    }
    try {
        const info = await ytdl.getInfo(url);
        const format = ytdl.chooseFormat(info.formats, { quality: 'highest' , filter: 'audioandvideo'});
        res.status(200).json({
            title: info.videoDetails.title,
            thumbnail: info.videoDetails.thumbnails[0].url,
            download: format.url,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to fetch the video');
    }
});

app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});
