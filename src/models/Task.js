const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: [true, 'campo obrigatorio'],
        trim: true
    },
    content: {
        type: String,
        required: [true, 'campo obrigatorio'],
        trim: true
    }
});

module.exports = mongoose.model('Task', schema);