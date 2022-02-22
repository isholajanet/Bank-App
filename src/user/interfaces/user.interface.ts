import { Account } from "src/account/interface/account.interface";

export interface User{
    firstname: string;
    lastname: string;
    phonenumber: string;
    email: string;
    password: string;
    account: Account;

}