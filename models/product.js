var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema(
    {
        image_name: { type: String, required: true, max: 100 },
        product_name: { type: String, required: true, max: 100 },
        product_price: { type: String, required: true, max: 100 },
        product_description: { type: String, required: true, max: 100 },
    }
);

// Virtual for author's URL
ProductSchema
    .virtual('image_url')
    .get(function () {
        return '/public/images/' + this._id;
    });

//Export model
module.exports = mongoose.model('Product', ProductSchema);