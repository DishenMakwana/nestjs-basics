import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './dto/get-user-req.dto';
import { OrderCreatedEvent } from './event/order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async handleOrderCreated(OrderCreatedEvent: OrderCreatedEvent) {
    this.authClient
      .send('get_user', new GetUserRequest(OrderCreatedEvent.userId))
      .subscribe((user) => {
        console.log(
          'Billing user with stripe ID ',
          user.stripeUserId,
          ' with a price of $',
          OrderCreatedEvent.price,
        );
      });
  }
}
