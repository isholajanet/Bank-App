import { Injectable } from "@nestjs/common";
import { User } from './interfaces/user.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateAccountDto } from "src/dto/create-account-dto";
import { Account } from "src/account/interface/account.interface";
import { AccountService } from "src/account/account.service";
import { CreateUserDto } from "../dto/create-user.dto";

@Injectable()
export class UserService{
    constructor(@InjectModel('User') private readonly userModel: Model<User>,
                private readonly accountService: AccountService){

    }

    async findAll(): Promise <User[]> {
        /// TODO: add pagination
        return this.userModel.find();
    }

    async findOne(id: String): Promise<User> {
        return this.userModel.findOne({ _id: id });
    }


    async create(user: CreateUserDto, account: Account): Promise <User>{
        account.name = this.userModel.name;
        const newAccount = this.accountService.create(account);
        user.account = await newAccount;
        // const newUser = new this.userModel(user);
        // return await newUser.save();
        return this.userModel.create(user as User);
    }

    async delete(id: string): Promise<User>{
       const deletedUser =  await this.userModel.findByIdAndRemove(id);
       if(!deletedUser) {
         throw new Error('user does not exist or is already deleted');
       }

       return deletedUser
    }

    async update(id: string, user: User): Promise<User>{
        return this.userModel.findByIdAndUpdate(id, user, {new: true})
    }


}
