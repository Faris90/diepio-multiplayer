'use strict';
const chat = require("../../entities/chat.js");
module.exports = function(msg) {
    var msgW = [];
    for(var i=2; i<msg.length; i++){
        msgW.push(msg[i]);
    }
    chat(msg[1], "[Console]", msgW.join(" "));
};
