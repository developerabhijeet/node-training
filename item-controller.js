import dotenv from 'dotenv';
import Item from './item.js';

dotenv.config();

export const paginations = async (request, response) => {
  const page = parseInt(request.query.page) || 1;
  const itemsPerPage = 10;
  try {
    const items = await Item.find()
      .skip((page - 1) * itemsPerPage)
      .limit(itemsPerPage);

    const totalItems = await Item.countDocuments();
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    response.json({ data: items, page, totalPages });
  } catch (err) {
    response.status(500).json({ error: 'Server error' });
  }
}