import { Account } from "src/account/interface/account.interface";

export class CreateUserDto {
    id?: string;
    firstname: string;
    lastname: string;
    phonenumber: string;
    email: string;
    password: string;
    account: Account;
}