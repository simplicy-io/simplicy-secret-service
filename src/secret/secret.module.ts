import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SecretSchema } from './models/secret.models';
import { SecretService } from './service/secret.service';
import { SecretController } from './controller/secret.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Secret', schema: SecretSchema }]),
  ],
  controllers: [SecretController],
  providers: [SecretService],
})
export class SecretModule {}
