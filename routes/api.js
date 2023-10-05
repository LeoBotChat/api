const router = require("express").Router();
const { home } = require("../controllers/home");
const { key } = require("../controllers/key");
const { gbancheck } = require("../controllers/gbancheck");
const { duyetbox } = require("../controllers/duyetbox");

const { checkalluser } = require("../controllers/checkalluser");
const { isFix } = require("../controllers/isFix");
const { fcaerr } = require("../controllers/fca");
const { add_user } = require("../controllers/add");
const { duyetboxrm } = require("../controllers/duyetboxrm");
const { checkall } = require("../controllers/checkall");
const { userdangky } = require("../controllers/user-r");
const { fcacheckall } = require("../controllers/fcacheck");
router.get("/", home);
router.get("/isFix",isFix)
router.get("/fcaerr", fcaerr);
router.get("/key", key);
router.get("/gbancheck",gbancheck)
router.get("/fcacheckall", fcacheckall);
module.exports = router;