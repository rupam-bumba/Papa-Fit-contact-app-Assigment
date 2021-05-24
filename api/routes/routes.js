
const express = require("express");
const router = express.Router();


// POST _sample
const _sample = require("../controller/_sample");
router.post("/sample", _sample.post_sample);




// POST create
const create = require("../controller/create");
router.post("/create", create.post_create);

// GET read
const read = require("../controller/read");
router.get("/read", read.get_read);

// PUT update
const update = require("../controller/update");
router.put("/update", update.put_update);

// DELETE remove 
const remove = require("../controller/remove");
router.delete("/remove", remove.delete_remove );


module.exports = router;