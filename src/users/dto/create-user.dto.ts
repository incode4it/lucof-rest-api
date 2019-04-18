import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Min, Max, Length } from 'class-validator';
export class CreateUserDto {
  @ApiModelProperty()
  readonly _id: number;

  @ApiModelProperty()
  @IsNotEmpty()
  @Length(1, 36)
  readonly firstName: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @Length(1, 36)
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
