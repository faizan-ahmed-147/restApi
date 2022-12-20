import express from 'express'
import productApi from '../models/ProductSchema'
const router = express.Router()

router.get("/products", async(req, res)=>{
    const {company, name, featured, sort, select} = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = company
       
    }
    if (name) {
        queryObject.name = {$regex: name, $options: "i"}
    }
    if (featured) {
        queryObject.featured = featured
    }
    let apiDATA = productApi.find(queryObject)


    if (sort) {
        let sortFix = sort.replace(","," ")
        apiDATA = apiDATA.sort(sortFix)
    }

    if (select) {
        // let selectFix = select.replace(","," ")
        let selectFix = select.split(",").join(" ")
        apiDATA = apiDATA.select(selectFix)
    }
    let page = Number(req.query.page) || 1
    let limit = (req.body.limit) || 10
    let skip = (page-1)*limit
    

    apiDATA = apiDATA.skip(skip).limit(limit)

    console.log(queryObject.company);

    const myData = await apiDATA
    console.log(req.query);
    res.status(200).json({myData})
})


router.get("/testing", async(req, res)=>{
    const myData = await productApi.find(req.query)
    console.log(req.query);
    res.status(200).json({myData})
})






export default router