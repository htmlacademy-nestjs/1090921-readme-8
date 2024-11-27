import { Controller, Delete, Get, Param, } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';

@Controller('posts')
export class BlogPostController {
  constructor(private readonly postService: BlogPostService) {}

  @Get('')
  public async index() {
    // const newVideo = await this.postService.find();
    return 'To be implemented (with pagination, sorting and filtering by tags, type and name)'
  }
  @Get(':id')
  public async show(@Param('id') id: string) {
    // const existingVideo = await this.postService.findById(id);
    return 'To be implemented';
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    // const video = await this.postService.deleteById(id);
    return 'To be implemented';
  }

  // TODO: implement comments, likes, repost, feed, image uploading
}
