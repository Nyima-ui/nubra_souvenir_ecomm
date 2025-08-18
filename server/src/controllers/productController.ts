import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import cloudinary from "../config/cloudinary";
import fs from "fs";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { product_name, product_price, category } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Image file is required" });
    }

    const uploadResult = await cloudinary.uploader.upload(req.file.path);

    fs.unlinkSync(req.file.path);

    const newProduct = await prisma.product.create({
      data: {
        name: product_name,
        image: uploadResult.secure_url,
        price: parseInt(product_price, 10),
        category,
      },
    });

    return res.status(201).json({ succcess: true, newProduct });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, error: "Something went wrong" });
  }
};
