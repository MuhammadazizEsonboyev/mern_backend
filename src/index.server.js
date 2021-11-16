//requires
const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');       
const path = require('path');

app.use(cors());
app.options('*', cors());
//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');


//environment variable
env.config();
//get PORT to variable
const PORT = process.env.PORT;

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.mfgtv.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    // {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useCreateIndex: true
    // }
).then(()=>{
    console.log('Database connected...');
});

app.use(express.json());
app.use('/public', express.static( path.join(__dirname, 'uploads')));

app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);

app.listen(PORT, ()=>{
    console.log(`Server has been started on the PORT ${PORT} ...`);
});