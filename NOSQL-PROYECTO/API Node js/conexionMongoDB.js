const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/Gamer';

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connectado a la base de datos de game zone');
    } catch (error) {
        console.error('Error al conectar a la base de datos, error: ' + error);
        process.exit(1);
    }

};

module.exports = connectDB;