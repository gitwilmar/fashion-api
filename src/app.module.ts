import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BodiesModule } from './bodies/bodies.module';

@Module({
  imports: [BodiesModule,MongooseModule.forRoot('mongodb://localhost/fashion')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
