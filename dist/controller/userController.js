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
exports.deleteItem = exports.createItem = void 0;
const item_model_1 = __importDefault(require("./../model/item.model"));
// export const createItem = async (req: Request, res: Response) => {
//   try {
//     const newItem: IItem = new Item(req.body);
//     const savedItem = await newItem.save();
//     res.status(201).json(savedItem);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
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
// export const deleteItem = async (req: Request, res: Response) => {
//   console.log("reqjest0",req.params.id)
//   try {
//     const deletedItem = await Item.findByIdAndDelete(req.params.id);
//     console.log("check deleteItem here",deletedItem);
//     if (!deletedItem) {
//       return res.status(404).json({ error: 'Item not found men ' });
//     }
// else{
//   res.status(204).send();
// }
//   } catch (error) {
//     console.log("error-------",error)
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
//# sourceMappingURL=userController.js.map