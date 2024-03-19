"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use('/', express_1.default.static('build'));
app.use('/auth', routes_1.authRoutes);
app.get('/health', (rea, res) => {
    console.log('received');
    res.send('ok');
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server-started ${port}`);
});
