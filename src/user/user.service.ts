import { Injectable } from "@nestjs/common";
import { User } from './interfaces/user.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class UserService{
    constructor(@InjectModel('User') private readonly userModel: Model<User>){

    }
  
   

    async findAll(): Promise <User[]> {
        return await this.userModel.find();
    }

    async findOne(id: String): Promise<User> {
        return await this.userModel.findOne({ _id: id });
    }

    async create(user: User): Promise <User>{
        
        const newUser = new this.userModel(user);

        return await newUser.save();

    }

    async delete(id: string): Promise<void>{
        await this.userModel.findByIdAndRemove(id);
    }

    async update(id: string, user: User): Promise<User>{
        return await this.userModel.findByIdAndUpdate(id, user, {new: true})
    }
}
