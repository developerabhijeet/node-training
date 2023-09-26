"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const user_json_1 = __importDefault(require("../user.json"));
const getUsers = (req, res) => {
    res.status(200).json(user_json_1.default);
};
exports.getUsers = getUsers;
const getUserById = (req, res) => {
    const itemId = req.params.id;
    const item = user_json_1.default.find((i) => i.id === itemId);
    console.log("item id here", itemId, user_json_1.default);
    if (!item) {
        return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
};
exports.getUserById = getUserById;
const createUser = (req, res) => {
    const newItem = req.body;
    user_json_1.default.push(newItem);
    res.status(201).json(newItem);
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    const index = user_json_1.default.findIndex((i) => i.id === itemId);
    if (index === -1) {
        return res.status(404).json({ message: "Item not found" });
    }
    user_json_1.default[index] = Object.assign(Object.assign({}, user_json_1.default[index]), updatedItem);
    res.status(200).json(user_json_1.default[index]);
};
exports.updateUser = updateUser;
const deletUser = (req, res) => {
    const itemId = req.params.id;
    const index = user_json_1.default.findIndex((i) => i.id === itemId);
    if (index === -1) {
        return res.status(404).json({ message: "Item not found" });
    }
    const deletedUser = user_json_1.default.splice(index, 1)[0];
    res.status(200).json(deletedUser);
};
exports.deletUser = deletUser;
//# sourceMappingURL=userController.js.map