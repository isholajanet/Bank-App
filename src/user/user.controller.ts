import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { CreateUserDto } from './../dto/create-user.dto'
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService){
        
    }
    @Get()
    findAll(): Promise <User[]>{
        return this.userService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id): Promise<User>{
        return this.userService.findOne(id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User>{
        return this.userService.create(createUserDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<void>{
       return this.userService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateUserDto: CreateUserDto){
        return this.userService.update( id, updateUserDto );
    }
}
