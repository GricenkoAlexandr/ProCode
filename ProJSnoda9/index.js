
const path=require('path');
const express=require('express');
const multer=require('multer');

const server=express();
const PORT = 3000;

const router=express.Router();
const upload=multer({
    dest: path.join(__dirname, '..public/uploads/')
});

router.post('/', upload.single('lalala'), (req, res) => {
    console.log(req.file);
    res.json({status: 'ok'});
});

module.exports=router;