import { Request, Response } from "express";
import Product from "../modal/productModel";

export const getUser = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 5 } = req.query;

    const pageNumber = parseInt(page as string);
    const limitNumber = parseInt(limit as string);

    const totalProducts = await Product.countDocuments();
    const totalPages = Math.ceil(totalProducts / limitNumber);

    const products = await Product.find()
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber)
      .exec();

    if (products.length === 0) {
      return res.status(404).json({ message: "Products not found" });
    }
    res.status(200).json({
      products,
      currentPage: pageNumber,
      totalPages,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const productData = new Product(req.body);
    const { product_id } = productData;
    const productExist = await Product.findOne({ product_id });

    if (productExist) {
      return res.status(500).json({ message: "Product already exists" });
    }

    const savedProduct = await productData.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findOne({ _id: id });

    if (!productExist) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updateProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findOne({ _id: id });

    if (!productExist) {
      return res.status(404).json({ message: "Product not found" });
    }

    await Product.findByIdAndDelete(id);
    return res.status(201).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
