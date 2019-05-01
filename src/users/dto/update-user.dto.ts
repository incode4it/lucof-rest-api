import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @ApiModelProperty()
  @Length(1, 36)
  @IsOptional()
  readonly firstName: string;

  @ApiModelProperty()
  @IsOptional()
  readonly lastName: string;

  @ApiModelProperty()
  @IsEmail()
  @IsOptional()
  readonly email: string;

}
