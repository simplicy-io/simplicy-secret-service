import { ApiProperty } from '@nestjs/swagger';

export class CreateSecretDto {
  @ApiProperty()
  secrethash: string;
}
