import express from 'express'; 
import { createProduct } from '../controllers/productController';


const adminRouter = express.Router(); 

adminRouter.post("/addProduct", createProduct)

export default adminRouter; 