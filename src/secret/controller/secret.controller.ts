import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SecretService } from '../service/secret.service';
import { Secret } from '../dto/secret.interface';

@Controller('secret')
export class SecretController {
  constructor(private readonly secretService: SecretService) {}

  @Get('/:id')
  getSecretById(@Param('id') id: string) {
    return this.secretService.findById(id);
  }

  @Get()
  getAllSecrets(): Promise<Secret[]> {
    return this.secretService.findAll();
  }

  @Post()
  addSecret(@Body() secretData: Secret): Promise<Secret> {
    return this.secretService.create(secretData);
  }

  @Post('/delete/:id')
  deleteSecret(@Param('id') id: string): Promise<Secret> {
    return this.secretService.delete(id);
  }
}
