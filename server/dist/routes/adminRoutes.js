import express from "express";
import { createProduct } from "../controllers/productController";
import upload from "../middlewares/upload";
const adminRouter = express.Router();
adminRouter.post("/addProduct", upload.single("product_image"), createProduct);
export default adminRouter;
//# sourceMappingURL=adminRoutes.js.map