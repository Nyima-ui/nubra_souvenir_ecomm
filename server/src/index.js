import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import adminRouter from "./routes/adminRoutes.js";
import productRouter from "./routes/productRoutes.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/admin", adminRouter);
app.use("/api", productRouter);
app.get("/", (req, res) => {
    res.json({ message: "Hello world from Tenzin" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));
//# sourceMappingURL=index.js.map