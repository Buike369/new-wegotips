const express = require('express')
const router = express.Router()

const { uploadFile,getFile } = require("../controllers/upload.js")


// Upload file route
router.post('/upload', (req, res, next) => {
    req.upload.single('file')(req, res, (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        next();
    });
}, uploadFile);

// Get files route
router.get('/file', getFile);


module.exports = router;