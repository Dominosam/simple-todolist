const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    userName: { type: String, required: true },
    normalizedUserName: { type: String, required: true },
    email: { type: String, required: true },
    normalizedEmail: { type: String, required: true },
    emailConfirmed: { type: Boolean, required: true },
    passwordHash: { type: String, required: true },
    securityStamp: { type: String, required: true },
    concurrencyStamp: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    phoneNumberConfirmed: { type: Boolean, required: true },
    twoFactorEnabled: { type: Boolean, required: true },
    lockoutEnd: { type: String, required: true },
    lockoutEnabled: { type: Boolean, required: true },
    accessFailedCount: { type: Number, required: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'task' }]
});

module.exports = mongoose.model('user', userSchema, 'users');
