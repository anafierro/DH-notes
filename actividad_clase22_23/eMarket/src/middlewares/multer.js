const path = require('path');
const multer = require('multer'); 

const storage = multer.diskStorage({
    destination: (req, file, callback) =>
    { let folder = path.join(__dirname, '../../public/images/products'); 
        callback(null, folder);
    },
    filename: (req, file, callback) => 
    { let imageName = 'img-' + Date.now() + path.extname(file.originalname);
        callback(null, imageName);
    }
})

const upload = multer ({ storage : storage });

module.exports = upload; 
