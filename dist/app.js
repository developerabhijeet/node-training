"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8000;
const body_parser_1 = __importDefault(require("body-parser"));
// const bodyParser = require("body-parser");
const userRoute_1 = __importDefault(require("./routes/userRoute"));
app.set("view engine", "ejs");
app.use(body_parser_1.default.json());
app.use("/api", userRoute_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map