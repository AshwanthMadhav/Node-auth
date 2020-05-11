const Mongoose = require('mongoose')

const userSchema = new Mongoose.Schema({
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    dateOfBirth: {
        type: 'string',
        required: true
    }
}, {
    collection: 'User'
})

var User = Mongoose.model("User", userSchema)
module.exports = User