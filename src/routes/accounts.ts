import { CreateAccountController } from "../controllers/CreateAccount";

const express = require('express');

const router = express.Router();

console.log('account route')

router.post("/", CreateAccountController)

module.exports = router;