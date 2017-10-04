const mongoose = require('mongoose');

// schema
const messageSchema = mongoose.Schema({
    senderName: {
        type: String,
        trim: true,
        match: /^[a-zA-Z0-9\s]+$/
    },
    senderEmail: {
        type: String,
        required: true,
        trim: true,
        match: /^[a-zA-Z0-9@.]+$/
    },
    message: {
        type: String,
        trim: true
    },
    ts: {
        type: Date,
        default: Date.now
    }
});

// export schema
const Message = module.exports = mongoose.model('Message', messageSchema, 'messages');

// add message
module.exports.addMessage = function(newMessage, callback) {
    newMessage.save(callback);
};
