"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const user_json_1 = __importDefault(require("../data/user.json"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = 'your-secret-key';
console.log("hello");
const login = (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    const user = user_json_1.default.find((u) => u.username == username && u.password == password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jsonwebtoken_1.default.sign({ username }, SECRET_KEY);
    res.status(200).json({ token });
};
exports.login = login;
//# sourceMappingURL=authController.js.map