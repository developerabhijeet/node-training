"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itemController_1 = require("../controllers/itemController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const itemRouter = (0, express_1.Router)();
itemRouter.get('/get', authMiddleware_1.authenticate, itemController_1.getItems);
itemRouter.get('/get/:id', authMiddleware_1.authenticate, itemController_1.getItemById);
itemRouter.post('/create', authMiddleware_1.authenticate, itemController_1.createItem);
itemRouter.put('/update/:id', authMiddleware_1.authenticate, itemController_1.updateItem);
itemRouter.delete('/delete/:id', authMiddleware_1.authenticate, itemController_1.deleteItem);
exports.default = itemRouter;
//# sourceMappingURL=itemRoutes.js.map