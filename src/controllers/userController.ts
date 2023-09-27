import { sign } from "crypto";
import users, { User } from "../models/user";
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'your-secret-key';
function findOneUser(email: string): User | undefined {
    return users.find((user) => user.email === email);
  }



const register = async (req:any,res:any)=>{


    
try {
   

    const { email, username, password } = req.body;
  
    const existingUser = await findOneUser(email);
  
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }
  
    const hashedPassword = await bcrypt.hashSync(password, 10);
  
 
    const newUser: User = {
      email,
      username,
      password: hashedPassword,
    };
  
   await users.push(newUser);
  
    const token = jwt.sign({ email: newUser.email }, JWT_SECRET);
  
    res.status(201).json({ user: newUser, token });
    
} catch (error) {
    console.log(error,"error")
    res.status(500).json({message:"something went wrong"});
    
}
}


const signin = async(req:any,res:any)=>{
const {email,password}=req.body

    try {
        const existingUser = await findOneUser(email);
        if(!existingUser){
            return res.status(404).json({message:"user not found"})
        }
        
        const matchPassword = await bcrypt.compare(password,existingUser.password)
        if(!matchPassword){
            return res.status(400).json({message:"Invalid credential"})
        }
        const token = jwt.sign({ email: existingUser.email }, JWT_SECRET);
        res.status(201).json({ user: existingUser, token });

    } catch (error) {

        console.log(error,"error")
    res.status(500).json({message:"something went wrong"});
        
    }

}

export {register,signin}