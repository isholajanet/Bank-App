import { Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    phonenumber: String,
    email: String,
    account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' }

},
{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}
});