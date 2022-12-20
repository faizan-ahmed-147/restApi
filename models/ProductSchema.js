import { string } from "joi";
import mongoose, { Schema } from "mongoose";


const productSchema = new Schema({

    name: {
        type: String,
        require: true

    },
    price: {
        type: String,
        require: [true, "price must be provided"]

    },
    featured: {
        type: Boolean,
        default: false

    },
    rating:{
        type: Number,
        default: 4.8
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },


    company: {
        type: "string",
        enum: {
            values: ["apple", "samsung", "dell", "mi"],
            message: `{value} is not supported`
        }
    }
})


const productApi = mongoose.model('ProductApi', productSchema)
export default productApi