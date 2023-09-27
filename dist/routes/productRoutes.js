"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const productRouter = (0, express_1.Router)();
exports.productRouter = productRouter;
productRouter.get("/", (__req, __res) => {
    __res.send("product get request");
});
productRouter.post("/", (__req, __res) => {
    __res.send("product post request");
});
//# sourceMappingURL=productRoutes.js.map