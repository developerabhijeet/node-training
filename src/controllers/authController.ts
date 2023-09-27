import users from '../data/user.json';
import jwt from "jsonwebtoken"

const SECRET_KEY = 'your-secret-key';
console.log("hello");

export const login = (req: any, res: any) => {
    console.log(req.body );
  const { username, password } = req.body;
  

  const user = users.find((u: any) => u.username == username && u.password == password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, SECRET_KEY);

  res.status(200).json({ token });
};