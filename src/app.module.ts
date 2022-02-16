import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { AccountController } from './account/account.controller';
import config from './config/keys';

@Module({
  imports: [UserModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, AccountController],
  providers: [AppService],
})
export class AppModule {}
