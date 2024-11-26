import { Controller, Param, Post } from '@nestjs/common';

// Вопрос: ок ли делать контроллер с таким названием именно в этом модуле? Или лучше завести отдельный?
@Controller('users')
export class BlogUserController {

  @Post(':id/follow')
  public async follow(@Param('id') id: string) {
    return `To be implemented - follow user with id ${id}`;
  }
}
