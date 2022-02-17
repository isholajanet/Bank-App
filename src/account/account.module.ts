import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AccountSchema } from './schemas/account.schema';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Account', schema: AccountSchema}])],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [AccountService],
})
export class AccountModule {}