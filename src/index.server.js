//requires
const express = require('express');
const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const userRoutes = require('./routes/user');

//environment variable
env.config();
//get PORT to variable
const PORT = process.env.PORT;

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.mfgtv.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log('Database connected...');
});

app.use(bodyParser());
app.use('/api', userRoutes);

app.listen(PORT, ()=>{
    console.log(`Server has been started on the PORT ${PORT} ...`);
})