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
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.login = exports.register = void 0;
const User_1 = require("../entities/User");
const class_validator_1 = require("class-validator");
const data_source_1 = require("../data-source");
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
        const user = userRepository.create(Object.assign({}, req.body));
        const errors = yield (0, class_validator_1.validate)(user);
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }
        yield user.hashPassword();
        yield userRepository.save(user);
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        next(error);
    }
});
exports.register = register;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Implement login logic here
});
exports.login = login;
const resetPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Implement reset password logic here
});
exports.resetPassword = resetPassword;
