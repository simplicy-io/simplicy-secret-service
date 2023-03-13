import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Secret } from './models/secret.model';
import { SecretService } from './service/secret.service';
import { SecretController } from './controller/secret.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Secret])],
  providers: [SecretService],
  controllers: [SecretController],
})
export class SecretModule {}
