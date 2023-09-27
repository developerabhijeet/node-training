"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.register = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your-secret-key';
function findOneUser(email) {
    return user_1.default.find((user) => user.email === email);
}
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, username, password } = req.body;
        const existingUser = yield findOneUser(email);
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }
        const hashedPassword = yield bcrypt.hashSync(password, 10);
        const newUser = {
            email,
            username,
            password: hashedPassword,
        };
        yield user_1.default.push(newUser);
        const token = jwt.sign({ email: newUser.email }, JWT_SECRET);
        res.status(201).json({ user: newUser, token });
    }
    catch (error) {
        console.log(error, "error");
        res.status(500).json({ message: "something went wrong" });
    }
});
exports.register = register;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const existingUser = yield findOneUser(email);
        if (!existingUser) {
            return res.status(404).json({ message: "user not found" });
        }
        const matchPassword = yield bcrypt.compare(password, existingUser.password);
        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid credential" });
        }
        const token = jwt.sign({ email: existingUser.email }, JWT_SECRET);
        res.status(201).json({ user: existingUser, token });
    }
    catch (error) {
        console.log(error, "error");
        res.status(500).json({ message: "something went wrong" });
    }
});
exports.signin = signin;
//# sourceMappingURL=userController.js.map