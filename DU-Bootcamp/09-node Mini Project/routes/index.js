const { Router } = require("express");

// Import our modular routers for /tips and /feedback
const tipsRouter = require("./tips");
const feedbackRouter = require("./feedback");
// TODO: import your diagnostics route
const diagnosticsRouter = require("./diagnostics");
const router = Router();

router.use("/tips", tipsRouter);
router.use("/feedback", feedbackRouter);
// TODO: Initialize diagnostics route
router.use("/diagnostics", diagnosticsRouter);

module.exports = router;
