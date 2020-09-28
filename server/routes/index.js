const express = require("express");
const router = express.Router(),
    employeeController = require('../controllers/employee'),
    cameraController = require("../controllers/camera"),

    url = require("../constants")




router.get("/", (req, res) => {


    req.io.emit("FromAPI", "wellcome3333");
    res.send({ response: "I am alive" }).status(200);
});


router.post(url.urls.addEmployee, employeeController.addEmployee);

router.post("/add/camera", cameraController.addCamera);

module.exports = router;