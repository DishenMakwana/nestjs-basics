import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async getHello() {
    await this.cacheManager.set('cache_item', { key: 32 });

    const cacheItem = await this.cacheManager.get('cache_item');

    console.log(cacheItem);

    await this.cacheManager.del('cache_item');

    return 'Hello World!';
  }
}
