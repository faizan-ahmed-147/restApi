import productsJson from "./products.json"
import connectDB from "./db/conn";
import productApi from "./models/ProductSchema"
import dotenv from "dotenv"
dotenv.config({path: "./config.env"})


const start = async()=>{
    try {
        connectDB(process.env.DATABASE)
        await productApi.deleteMany()
        await productApi.create(productsJson)
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}

start()

