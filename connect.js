const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3000;

// MongoDB bağlantısı
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.udbpvg9.mongodb.net/blog_admin`;

mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('MongoDB\'ye başarıyla bağlanıldı');
        app.listen(port, () => {
            console.log(`Server ${port} portunda çalışıyor`);
        });
    })
    .catch((err) => console.error('MongoDB bağlantı hatası:', err));

// Express uygulaması
app.get('/', (req, res) => {
    res.json({ message: 'MongoDB\'ye başarıyla bağlanıldı' });
});
