import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Account } from "./interface/account.interface";

@Injectable()
export class AccountService{
    constructor(@InjectModel('Account') private readonly accountModel: Model<Account>){

    }

    async create(account: Account): Promise<Account>{
        const newAccount = new this.accountModel(account)
        return await newAccount.save();
    }

    
}
