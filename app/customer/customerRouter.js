const express = require("express");

const jwtVerifier = require("../auth/jwtVerifier");

const customerController = require("./customerController");

const router = express.Router();
router.use(jwtVerifier);

router.get("", customerController.getCustomers);
router.get("/:id", customerController.getCustomer);
router.post("", customerController.saveCustomer);
router.put("/:id", customerController.saveCustomer);
router.delete("/:id", customerController.deleteCustomer);

module.exports = router;
