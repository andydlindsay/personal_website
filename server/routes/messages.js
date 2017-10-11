const express = require('express'),
router = express.Router(),
Message = require('../models/message');

// add new message
router.post('/new', (req, res) => {
    const newMessage = new Message({
        senderName: req.body.name,
        senderEmail: req.body.email,
        message: req.body.message
    });
    Message.addMessage(newMessage, (err, doc) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to save message.', errmsg: err.message });
        } else if (doc) {
            res.json({ success: true });
        } else {
            res.json({ success: false, msg: 'Failed to save message.' });
        }
    });
});

// export router
module.exports = router;
