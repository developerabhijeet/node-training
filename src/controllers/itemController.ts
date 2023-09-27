import items from "../data/item.json";

export const getItems = (req: any, res: any) => {
  res.status(200).json(items);
};

export const getItemById = (req: any, res: any) => {
  const itemId = req.params.id;
  const item = items.find((i: any) => i.id == itemId);

  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  res.status(200).json(item);
};

export const createItem = (req: any, res: any) => {
  const newItem = req.body;
  items.push(newItem);

  // In a real application, you should save the updated items array to a file or database.

  res.status(201).json(newItem);
};

export const updateItem = (req: any, res: any) => {
  const itemId = req.params.id;
  const updatedItem = req.body;

  const index = items.findIndex((i: any) => i.id == itemId);

  if (index === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }

  items[index] = { ...items[index], ...updatedItem };

  // In a real application, you should save the updated items array to a file or database.

  res.status(200).json(items[index]);
};

export const deleteItem = (req: any, res: any) => {
  const itemId = req.params.id;
  const index = items.findIndex((i: any) => i.id == itemId);

  if (index === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }

  const deletedItem = items.splice(index, 1)[0];

  // In a real application, you should save the updated items array to a file or database.

  res.status(200).json(deletedItem);
};