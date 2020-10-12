import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoModule } from './mongo.module';
import { UserModule } from './user.module';
@Module({
  imports: [
    UserModule,
    MongoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
