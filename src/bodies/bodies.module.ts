import { Body, Module } from '@nestjs/common';
import { BodiesService } from './bodies.service';
import { BodiesController } from './bodies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BodySchema } from 'src/schemas/body.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Body.name, schema: BodySchema }])],
  controllers: [BodiesController],
  providers: [BodiesService]
})
export class BodiesModule {}
