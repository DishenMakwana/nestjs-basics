import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
// import { HttpExceptionFilter } from './filters/http-exception.filter';
import { FreezePipe } from './pipes/freeze.pipe';
// import { LoggingInterceptor } from './interceptors/logging.interceptor';
// import { AuthGuard } from './guards/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @UseGuards(AuthGuard)
  // @UseInterceptors(LoggingInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  // @UseGuards(FreezePipe)
  // @UseFilters(HttpExceptionFilter)
  examplePost(@Body(new FreezePipe()) body: any) {
    body.test = 32;
  }
}
