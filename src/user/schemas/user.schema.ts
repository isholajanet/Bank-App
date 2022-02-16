import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    phonenumber: String,
    email: String,
    

}, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}});