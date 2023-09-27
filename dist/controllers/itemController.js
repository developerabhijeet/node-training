"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.createItem = exports.getItemById = exports.getItems = void 0;
const item_json_1 = __importDefault(require("../data/item.json"));
const getItems = (req, res) => {
    res.status(200).json(item_json_1.default);
};
exports.getItems = getItems;
const getItemById = (req, res) => {
    const itemId = req.params.id;
    const item = item_json_1.default.find((i) => i.id == itemId);
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
};
exports.getItemById = getItemById;
const createItem = (req, res) => {
    const newItem = req.body;
    item_json_1.default.push(newItem);
    // In a real application, you should save the updated items array to a file or database.
    res.status(201).json(newItem);
};
exports.createItem = createItem;
const updateItem = (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    const index = item_json_1.default.findIndex((i) => i.id == itemId);
    if (index === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }
    item_json_1.default[index] = Object.assign(Object.assign({}, item_json_1.default[index]), updatedItem);
    // In a real application, you should save the updated items array to a file or database.
    res.status(200).json(item_json_1.default[index]);
};
exports.updateItem = updateItem;
const deleteItem = (req, res) => {
    const itemId = req.params.id;
    const index = item_json_1.default.findIndex((i) => i.id == itemId);
    if (index === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }
    const deletedItem = item_json_1.default.splice(index, 1)[0];
    // In a real application, you should save the updated items array to a file or database.
    res.status(200).json(deletedItem);
};
exports.deleteItem = deleteItem;
//# sourceMappingURL=itemController.js.map