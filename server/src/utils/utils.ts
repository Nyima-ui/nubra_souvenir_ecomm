import { Request, Response } from "express";
import upload from "../middlewares/upload";

export const handleImageUpdate = (req: Request, res: Response) => {
  const { product_image } = req.body;
  if (product_image === "string") {
    req.body.image = product_image;
  } else {
    upload.single("product_image");
  }
};
