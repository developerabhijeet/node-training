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
exports.deleteItem = exports.updateItem = exports.getItems = exports.createItem = void 0;
const item_model_1 = __importDefault(require("../models/item.model"));
const createItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newItem = new item_model_1.default(req.body);
        const savedItem = yield newItem.save();
        res.status(201).json(savedItem);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.createItem = createItem;
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, limit = 10, category } = req.query;
    const skip = (parseInt(page.toString()) - 1) * parseInt(limit.toString());
    try {
        const query = {};
        if (category) {
            query.category = category;
        }
        const items = yield item_model_1.default.find(query)
            .skip(skip)
            .limit(parseInt(limit.toString()))
            .exec();
        const totalItems = yield item_model_1.default.countDocuments(query);
        res.status(200).json({
            items,
            totalPages: Math.ceil(totalItems / parseInt(limit.toString())),
            currentPage: page,
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getItems = getItems;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedItem = yield item_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(updatedItem);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.updateItem = updateItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedItem = yield item_model_1.default.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.deleteItem = deleteItem;
//# sourceMappingURL=item.controller.js.map