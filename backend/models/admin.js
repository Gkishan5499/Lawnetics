const mongoose = require('mongoose');
const {Schema} = require('mongoose');


const  adminSchema = new Schema({
    username: {
        type: 'string',
        required: true,
    },

    password: {
        type: 'string',
        required: true,
    }


});

exports.Admin = mongoose.model('Admin', adminSchema);
exports.adminSchema = adminSchema;