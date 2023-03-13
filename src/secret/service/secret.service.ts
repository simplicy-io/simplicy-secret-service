import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Secret } from '../models/secret.model';
import { CreateSecretDto } from '../dto/secret.dto';

@Injectable()
export class SecretService {
  constructor(
    @InjectRepository(Secret)
    private readonly secretRepository: MongoRepository<Secret>,
  ) {}

  async findOneBy(id: string): Promise<Secret> {
    return this.secretRepository.findOneBy(id);
  }

  async create(createSecretDto: CreateSecretDto): Promise<CreateSecretDto> {
    return this.secretRepository.save(createSecretDto);
  }
}
