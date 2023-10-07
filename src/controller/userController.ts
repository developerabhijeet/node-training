import getData from "../user.json";

export const getUsers = (req: any, res: any) => {
  res.status(200).json(getData);
};

export const getUserById = (req: any, res: any) => {
  const itemId = req.params.id;
  let item = getData.find((i: any) => i.id === Number(itemId));
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.status(200).json(item);
};

export const createUser = (req: any, res: any) => {
  const newItem = req.body;
  getData.push(newItem);
  res.status(201).json(newItem);
};

export const updateUser = (req: any, res: any) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  const index = getData.findIndex(
    (i: { id: number; name: string; description: string }) => i.id === itemId
  );
  if (index === -1) {
    return res.status(404).json({ message: "Item not found" });
  }
  getData[index] = { ...getData[index], ...updatedItem };
  res.status(200).json(getData[index]);
};

export const deletUser = (req: any, res: any) => {
  const itemId = req.params.id;
  const index = getData.findIndex((i: any) => i.id === itemId);

  if (index === -1) {
    return res.status(404).json({ message: "Item not found" });
  }
  const deletedUser = getData.splice(index, 1)[0];
  res.status(200).json(deletedUser);
};
