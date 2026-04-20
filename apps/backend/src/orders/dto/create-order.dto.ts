import { IsString, IsNumber, IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class OrderItemDto {
  @IsString() productId: string;
  @IsString() name: string;
  @IsNumber() price: number;
  @IsNumber() quantity: number;
}

export class CreateOrderDto {
  @IsString() stripeSessionId: string;
  @IsOptional() @IsString() customerEmail?: string;
  @IsOptional() @IsString() customerName?: string;
  @IsNumber() amountTotal: number;
  @IsString() currency: string;
  @IsString() paymentStatus: string;
  @IsArray() @ValidateNested({ each: true }) @Type(() => OrderItemDto) items: OrderItemDto[];
  @IsOptional() @IsString() fulfillmentStatus?: string;
}
