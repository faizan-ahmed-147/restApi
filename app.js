import express from "express"
import routes from "./routes/index"
import connectDB from "./db/conn";
connectDB();

const app = express();
const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000


app.use(express.json());
app.use('/api', routes)

app.listen(PORT, (req, res)=>{
    console.log(`The Server Is running At http://${hostname}:${PORT}/` );
})