const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}.${path.extname(file.originalname)}`);
  }
});

module.exports = {
    create(request, response, next){
      const upload = multer({ storage });

      upload.single("img")(request, response, next)
    return response.json('OK')
  }
  
}