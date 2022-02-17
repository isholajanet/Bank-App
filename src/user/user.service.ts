import { Injectable } from "@nestjs/common";
import { User } from './interfaces/user.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateAccountDto } from "src/dto/create-account-dto";
import { Account } from "src/account/interface/account.interface";
import { AccountService } from "src/account/account.service";

@Injectable()
export class UserService{
    constructor(@InjectModel('User') private readonly userModel: Model<User>,
                private readonly accountService: AccountService){

    }
  
   

    async findAll(): Promise <User[]> {
        return await this.userModel.find();
    }

    async findOne(id: String): Promise<User> {
        return await this.userModel.findOne({ _id: id });
    }

    async create(user: User, account: Account): Promise <User>{
        account.name = this.userModel.name;
        const newAccount = this.accountService.create(account);
        user.account = await newAccount;
        const newUser = new this.userModel(user);
        return await newUser.save();

    }

    async delete(id: string): Promise<void>{
        await this.userModel.findByIdAndRemove(id);
    }

    async update(id: string, user: User): Promise<User>{
        return await this.userModel.findByIdAndUpdate(id, user, {new: true})
    }

    async addAccount(account: Account): Promise<Account>{
            account.name = this.userModel.name;
            return await this.accountService.create(account);
    }
}
