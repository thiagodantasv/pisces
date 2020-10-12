import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27010/pisces')
  ],
  controllers: [],
  providers: [],
})
export class MongoModule {}
