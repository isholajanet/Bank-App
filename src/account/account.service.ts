import { Injectable, Param } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Account } from "./interface/account.interface";

@Injectable()
export class AccountService{
    constructor(@InjectModel('Account') private readonly accountModel: Model<Account>){

    }

    async create(account: Account): Promise<Account>{
        account.number = "12" + Math.floor(100000000 + Math.random() * 900000000);
        const newAccount = new this.accountModel(account)
        return await newAccount.save();
    }

    async findOne(id: String): Promise<Account>{
        return await this.accountModel.findOne({_id: id})
    }

    async findAll(): Promise<Account[]>{
        return await this.accountModel.find();
    }

    async delete(id: String): Promise<void>{
        this.accountModel.findByIdAndRemove({_id: id})
    }

    async update(id: String, account: Account): Promise<Account>{
        return await this.accountModel.findByIdAndUpdate(id)
    }
}
