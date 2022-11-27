import {
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseInterceptors(CacheInterceptor)
  @CacheKey('cache_item')
  @CacheTTL(60)
  @Get()
  async getHello() {
    return this.appService.getHello();
  }
}
