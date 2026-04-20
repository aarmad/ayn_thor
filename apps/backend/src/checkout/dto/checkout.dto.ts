import { IsArray, IsString, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CartItemDto {
  @IsString() id: string;
  @IsString() name: string;
  @IsNumber() price: number;
  @IsNumber() quantity: number;
  @IsOptional() @IsString() image?: string;
}

export class CheckoutDto {
  @IsArray() @ValidateNested({ each: true }) @Type(() => CartItemDto) items: CartItemDto[];
  @IsOptional() @IsString() origin?: string;
}
