"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const auth_1 = require("./routes/auth");
const admin_1 = require("./routes/admin");
const errorHandler_1 = require("./middlewares/errorHandler");
const config_1 = require("./config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/auth', auth_1.authRouter);
app.use('/admin', admin_1.adminRouter);
app.use(errorHandler_1.errorHandler);
(0, typeorm_1.createConnection)(config_1.config.database).then((connection) => {
    app.listen(config_1.config.port, () => {
        console.log(`Server running on port ${config_1.config.port}`);
    });
});
