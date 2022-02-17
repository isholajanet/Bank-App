import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from 'src/dto/create-account-dto';
import { Account } from './interface/account.interface';
import { UpdateAccountDto } from 'src/dto/update-account-dto';

@Controller('accounts')
export class AccountController {

    constructor(private readonly accountService: AccountService){

    }

    @Post()
    create(@Body() createAccountDto: CreateAccountDto): Promise<Account>{
        return this.accountService.create(createAccountDto);
    }

    @Get()
    findAll(): Promise<Account[]>{
        return this.accountService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Account>{
        return this.accountService.findOne(id)
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<void>{
        return this.accountService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto): Promise<Account>{
        return this.accountService.update(id,  updateAccountDto);
    }



}
