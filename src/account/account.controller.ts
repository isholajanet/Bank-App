import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from 'src/dto/create-account-dto';
import { Account } from './interface/account.interface';

@Controller('accounts')
export class AccountController {

    constructor(private readonly accountService: AccountService){

    }

    @Post()
    create(@Body() createUserDto: CreateAccountDto): Promise<Account>{
        return this.accountService.create(createUserDto);
    }


}
