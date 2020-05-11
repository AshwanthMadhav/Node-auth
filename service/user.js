const db = require('../helper/db')
const User = db.User
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const secret = "@D%^@CTYf^%@F^&@UGb&uygf6d%@DF%YTb"
// console.log(User)

module.exports = {
    create,
    authenticate
}

async function create(params) {
    try {
        const hashedPassword = await bcrypt.hash(params.password, 10)
        console.log('Insdie create data')
        console.log(params)
        const user = await User.findOne({ email: params.email })
        var newUser = new User()
        newUser.firstName = params.firstName
        newUser.lastName = params.lastName
        newUser.email = params.email
        newUser.password = hashedPassword
        newUser.dateOfBirth = params.dob
        if (await User.findOne({ email: params.email })) {
            throw "User already exist";
        }
        return await newUser.save()
    } catch (e) {
        throw e
    }
}
async function authenticate(params) {
    try {
        console.log(params)
        let userDet = await User.findOne({ email: params.email })
        if (userDet && bcrypt.compareSync(params.password, userDet.password)) {
            const token = jwt.sign({ sub: userDet.id }, secret);
            return {
                ...userDet.toJSON(),
                token
            };
        }
        else {
            throw "User not valid"
        }
    } catch (e) {
        throw e
    }
}
