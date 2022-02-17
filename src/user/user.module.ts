import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './schemas/user.schema'
import { AccountModule } from 'src/account/account.module';

@Module({
  imports: [AccountModule, MongooseModule.forFeature([{ name: 'User', schema: UserSchema}])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
