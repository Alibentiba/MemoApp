import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import postroutes from './routes/posts'
import postRoutes from './Routes/posts.js';
import userRoutes from './Routes/users.js';


const app = express();
// make the rout connected withe the db
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/',postRoutes)
app.use('/users',userRoutes)

const CONNECTION_URL = 'mongodb://0.0.0.0:27017';
const PORT = process.env.PORT|| 5000;
mongoose.set('strictQuery', false)
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, 
    () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));