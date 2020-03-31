const express = require('express');
const UploadController = require('./controllers/UploadController');
const routes = express.Router();


routes.post('/', UploadController.create)

// routes.post("/", upload.single("img"), (req, res) => {
//   console.log(req.body, req.file)
//   res.send("ok")
// })

module.exports = routes;