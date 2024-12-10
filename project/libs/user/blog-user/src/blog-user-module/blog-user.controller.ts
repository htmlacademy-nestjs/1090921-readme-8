import { Controller, Param, Post } from '@nestjs/common';

@Controller('users')
export class BlogUserController {

  @Post(':id/follow')
  public async follow(@Param('id') id: string) {
    return `To be implemented - follow user with id ${id}`;
  }
}
