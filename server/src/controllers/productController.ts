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

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();

    if (products.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No products found." });
    }

    return res.status(200).json({ success: true, products });
  } catch (err) {
    console.error("Error fetching products:", err);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log("product ID", id);
    return res.status(200).json({ success: true, id });
  } catch (error) {
    console.error("Error updating a product:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
};
