const mongoose = require('mongoose');

const productschema=new mongoose.Schema(
    {
     productName: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
   items: [
  {
    product: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true }
  }
],
    status:{
        type:String,  
        enum:['pending','processing','shipped','delivered','cancelled'],
        default:'pending',
    },
    totalAmount:{
        type:Number,
        required:true,
    },

    },
   {
    timestamps:true,
   }
);
const Product = mongoose.model('Product', productschema);

module.exports = Product;