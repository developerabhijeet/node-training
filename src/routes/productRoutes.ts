import express from 'express';
import { Router } from 'express';
const productRouter = Router()

productRouter.get("/",(__req,__res)=>{
    __res.send("product get request")

})


productRouter.post("/",(__req,__res)=>{
    __res.send("product post request")
})

export {productRouter}