import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, IsOptional } from 'class-validator';
export class CreateUserDto {
  @ApiModelProperty()
  readonly _id: number;

  @ApiModelProperty()
  @IsNotEmpty()
  @Length(1, 36)
  readonly firstName: string;

  @ApiModelProperty()
  @Length(1, 36)
  @IsOptional()
  readonly lastName: string;

  @ApiModelProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @Length(1, 36)
  readonly password: string;
}
