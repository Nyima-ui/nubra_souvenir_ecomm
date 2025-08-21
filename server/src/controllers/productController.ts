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
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Product ID is missing" });
    }
    const { product_name, product_price, category, product_image } = req.body;

    let imageUrl = product_image;

    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path);
      fs.unlinkSync(req.file.path);
      imageUrl = uploadResult.secure_url;
    }

    const updatedProduct = await prisma.product.update({
      where: {
        id: id,
      },
      data: {
        name: product_name,
        image: imageUrl,
        price: parseInt(product_price, 10),
        category: category,
      },
    });
    return res.status(200).json({ success: true, updatedProduct });
  } catch (error) {
    console.error("Error updating a product:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json("Product ID is required");
    }

    const product = await prisma.product.findUnique({ where: { id } });

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    const deletedProduct = await prisma.product.delete({
      where: {
        id: id,
      },
    });

    return res.status(200).json({ success: true, data: deletedProduct });
  } catch (error) {
    console.error("Delete Product Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
