import express from 'express'; 
import { getAllProducts, updateProduct } from '../controllers/productController';

const productRouter = express.Router(); 
productRouter.get("/getProducts", getAllProducts); 
productRouter.post("/updateProduct/:id", updateProduct); 

export default productRouter