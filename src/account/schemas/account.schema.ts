import * as mongoose from 'mongoose'

export const AccountSchema = new mongoose.Schema({
    name: String,
    number: String,
    type: String,
    balance: Number
}, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}})