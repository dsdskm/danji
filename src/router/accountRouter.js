"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/", (req, res) => {
    console.log(`[Post] account`);
    res.send("[Post] account");
});
router.get("/", (req, res) => {
    console.log(`[Get] account`);
    res.send("[Get] account");
});
router.put("/", (req, res) => {
    console.log(`[Put] account`);
    res.send("[Put] account");
});
router.delete("/", (req, res) => {
    console.log(`[Delete] account`);
    res.send("[Delete] account");
});
module.exports = router;
