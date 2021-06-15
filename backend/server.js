import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';

const app = express();
const uri = process.env.MONGODB_URL;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

mongoose.connection.on("error", function(error){
    console.log(error);
  });
  
  mongoose.connection.on("open", function() {
    console.log("Connected to MongoDB database.");
  });


app.get('/', (req, res) => {
    res.send("Server is ready");
});

app.use('/api/users', userRouter);

app.use((err, req, res, next) =>{
    res.status(500).send({message: err.message});
})

app.listen(3000, () => {
    console.log('Server at http://localhost:3000');
});