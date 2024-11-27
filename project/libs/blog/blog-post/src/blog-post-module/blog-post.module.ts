import { Module } from '@nestjs/common';

import { VideoPostModule } from '@project/video-post'

import { BlogPostController } from './blog-post.controller';
import { BlogPostService } from './blog-post.service';

/*
Вопросы:

1. Как будет правильно работать с постами разных типов?
- Предполагаю, что под каждый тип может быть отдельная library
(т.к. у разных типов постов разный набор параметров => нужны отдельные репозитории),
но также есть общий контроллер на часть маршрутов (напр. получение общего списка постов)?
- Или лучше не мельчить настолько и просто создать разные RDO и один общий тип Post с кучей опциональных полей?

2. Как лучше организовать комментирование постов - как отдельную library? Или можно и здесь?
*/
@Module({
  imports: [VideoPostModule],
  providers: [BlogPostService],
  controllers: [BlogPostController],
})
export class BlogPostModule {}
