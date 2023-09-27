import userData from "../users.json"
let user: any = userData;

export const getAllUsers = (req: any, res: any) => {
  res.send(user).status(200);
}

export const getUser = (req: any, res: any) => {
  const singleUser = user.find((user: any) => user.id === req.params.id)
  console.log(req.params, 'get user', singleUser);
  const userData = singleUser !== undefined  ? singleUser : { "message": 'No data found!'}
  res.send(userData).status(200);
}

export const createUser = (req: any, res: any) => {
  const newData = req.body;
  user.push(newData);
  res.send(user).status(201);
}

export const updateUser = (req: any, res: any) =>  {
  const updateUser = user.map((sUser: any) => sUser.id == req.params.id ? req.body : sUser)
  console.log(req.params, req.body,'update', updateUser)
  const userData = updateUser.length > 0 ? updateUser : { "message": 'No user found!'}
  user=updateUser
  res.send(userData).status(200);
}

export const deleteUser = (req: any, res: any) =>  {
  const filterUsers = user.filter((user: any) => user.id !== req.params.id)
  console.log(req.params, 'delete', filterUsers)
  const userData = filterUsers.length !== user.length ? { "message": 'user deleted successfully'} : { "message": 'No user found!'}
  user =  filterUsers
  res.send(userData).status(200);
}
