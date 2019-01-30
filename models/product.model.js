const moongose = require ('mongoose');
const Schema = moongose.Schema;

let ProductSchema = new Schema ({
    name: {type: String, required: true, max: 100},
    price:{type: Number, required: true},
});

// export the model
module.exports = moongose.model('product', ProductSchema);