import { Field, InputType } from '@nestjs/graphql';
import { IsString, Length, IsOptional } from 'class-validator';

@InputType('UserUpdate')
export class UserUpdateDto {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @Length(1, 50)
  firstname?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @Length(1, 50)
  lastname?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @Length(1, 50)
  username?: string;
}
