import express from "express";
import product from './routes'
const App =express();
app.use(express.json())
// import Route
app.use("/api/v2",product)
export  default App;
