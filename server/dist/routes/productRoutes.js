import express from "express";
import { getAllProducts, updateProduct, deleteProduct } from "../controllers/productController";
import upload from "../middlewares/upload";
const productRouter = express.Router();
productRouter.get("/getProducts", getAllProducts);
productRouter.put("/updateProduct/:id", upload.single("product_image"), updateProduct);
productRouter.delete("/deleteProduct/:id", deleteProduct);
export default productRouter;
//# sourceMappingURL=productRoutes.js.map