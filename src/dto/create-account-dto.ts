import { AccountType } from "src/enum/account-type";

export class CreateAccountDto{
    name: String;
    number: String;
    type: AccountType;
    balance: number;
}