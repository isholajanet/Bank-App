import { AccountType } from "src/enum/account-type";

export class UpdateAccountDto{
    name: String;
    number: String;
    type: AccountType;
    balance: number;
}