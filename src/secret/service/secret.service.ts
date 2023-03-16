import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Secret, SecretDocument } from '../schemas/secret.schema';
import { CreateSecretDto } from 'secret/dto/secret.dto';

@Injectable()
export class SecretService {
  constructor(
    @InjectModel(Secret.name) private secretModel: Model<SecretDocument>,
  ) {}

  async create(createSecretDto: CreateSecretDto): Promise<SecretDocument> {
    const createdSecret = new this.secretModel(createSecretDto);
    return createdSecret.save();
  }

  async findAll(): Promise<SecretDocument[]> {
    return this.secretModel.find().exec();
  }

  async findById(id: string): Promise<SecretDocument> {
    return this.secretModel.findById(id);
  }

  async delete(id: string): Promise<SecretDocument> {
    return this.secretModel.findByIdAndDelete(id).exec();
  }
}
