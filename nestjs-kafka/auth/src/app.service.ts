import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './dto/get-user-req.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '1',
      stripeUserId: '1234',
    },
    {
      userId: '2',
      stripeUserId: '5678',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest) {
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}
