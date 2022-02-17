import { Account } from "src/account/interface/account.interface";

export interface User{
    id?: string;
    firstname: string;
    lastname: string;
    phonenumber: string;
    email: string;
    account: Account;

}