"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const item_controller_1 = require("../controllers/item.controller");
const router = (0, express_1.Router)();
router.post('/items', item_controller_1.createItem);
router.get('/items', item_controller_1.getItems);
router.put('/items/:id', item_controller_1.updateItem);
router.delete('/items/:id', item_controller_1.deleteItem);
exports.default = router;
//# sourceMappingURL=item.routes.js.map