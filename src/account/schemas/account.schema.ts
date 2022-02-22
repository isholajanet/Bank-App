import * as mongoose from 'mongoose'

export const AccountSchema = new mongoose.Schema({
    name: String,
    number: String,
    type: String,
    balance: Number,
    // user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}})