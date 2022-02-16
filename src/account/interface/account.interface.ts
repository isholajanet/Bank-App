import { AccountType } from "src/enum/account-type";

export interface Account{
    name: String,
    number: String,
    type: AccountType,
    balance: number,
}

