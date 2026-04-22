const express = require('express');
const router = express.Router();

const{
    getAllproducts,
    getAllproductsByID,
    createproducts,
    replaceproducts,
    updateproducts,
    deleteproducts,
}=require('../controllers/productController');

router.get('/',getAllproducts);
router.get('/:id',getAllproductsByID);
router.post('/',createproducts);
router.put('/:id',replaceproducts);
router.patch('/:id',updateproducts);
router.delete('/:id',deleteproducts);
module.exports=router;

