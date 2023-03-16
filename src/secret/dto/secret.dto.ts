import { ApiProperty } from '@nestjs/swagger';

export class CreateSecretDto {
  @ApiProperty()
  readonly _id?: string;

  @ApiProperty()
  readonly secrethash: string;
}
