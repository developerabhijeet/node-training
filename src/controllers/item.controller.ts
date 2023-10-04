import { Request, Response } from 'express';
import Item, { IItem } from '../models/item.model';

export const createItem = async (req: Request, res: Response) => {
  try {
    const newItem: IItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getItems = async (req: Request, res: Response) => {
  const { page = 1, limit = 10, category } = req.query;
  const skip = (parseInt(page.toString()) - 1) * parseInt(limit.toString());

  try {
    const query: any = {};

    if (category) {
      query.category = category;
    }

    const items = await Item.find(query)
      .skip(skip)
      .limit(parseInt(limit.toString()))
      .exec();

    const totalItems = await Item.countDocuments(query);

    res.status(200).json({
      items,
      totalPages: Math.ceil(totalItems / parseInt(limit.toString())),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};