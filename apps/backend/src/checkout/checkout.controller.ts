import { Controller, Post, Body, Headers } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CheckoutDto } from './dto/checkout.dto';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post()
  async create(
    @Body() dto: CheckoutDto,
    @Headers('origin') originHeader: string,
  ) {
    const origin =
      dto.origin ||
      originHeader ||
      process.env.FRONTEND_URL ||
      'http://localhost:3000';

    const url = await this.checkoutService.createSession(dto.items, origin);
    return { url };
  }
}
