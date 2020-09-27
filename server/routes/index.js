const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {

     console.log("reqqqqqqqqqq22")
    req.io.emit("FromAPI", "wellcome3333");
    res.send({ response: "I am alive" }).status(200);
});
module.exports = router;