import userData from "../users.json"
let user: any = userData;

export const getAllUsers = (req: any, res: any) => {
  res.send(user).status(200);
}

export const getUser = (req: any, res: any) => {
  console.log(req.params)
  const singleUser = user.filter((user: any) => user.id === req.params)
  const userData = singleUser.length > 0 ? singleUser : { "message": 'No data found!'}
  res.send(userData).status(200);
}

export const createUser = (req: any, res: any) => {
  const newData = req.body;
  user.push(newData);
  res.send(user).status(201);
}

export const updateUser = (req: any, res: any) =>  {
  console.log(req.params)
  const updateUser = user.map((user: any) => user.id == req.params ? req.body : user)
  user.push(updateUser)
  const userData = updateUser.length > 0 ? updateUser : { "message": 'No user found!'}
  res.send(userData).status(200);
}

export const deleteUser = (req: any, res: any) =>  {
  console.log(req.params)
  const filterUsers = user.filter((user: any) => user.id !== req.params)
  user.push(filterUsers)
  const userData = filterUsers.length > 0 ? { "message": 'user deleted successfully'} : { "message": 'No user found!'}
  res.send(userData).status(200);
}
