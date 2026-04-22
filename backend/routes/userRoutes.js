const express= require('express');
const router=express.Router();
const{
    getAllusers,
    getAllusersByID,
    createusers,
    replaceusers,
    updateusers,
    deleteusers,

}=require('../controllers/usersController');

router.get('/',getAllusers);
router.get('/:id',getAllusersByID);
router.post('/',createusers);
router.put('/:id',replaceusers);
router.patch('/:id',updateusers);
router.delete('/:id',deleteusers);

module.exports=router;
