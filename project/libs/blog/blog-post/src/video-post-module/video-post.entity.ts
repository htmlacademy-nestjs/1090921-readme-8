import { Entity, VideoPost } from '@project/core';
import { StorableEntity } from '@project/core';

export class VideoPostEntity extends Entity implements StorableEntity<VideoPost> {
  public video: string;
  public tags: string[];

  constructor(post?: VideoPost) {
    super();
    this.populate(post);
  }

  public populate(post?: VideoPost): void {
    if (!post) {
      return;
    }
    this.id = post.id ?? '';
    this.video = post.video;
    this.tags = post.tags;
  }

  public toPOJO(): VideoPost {
    return {
      id: this.id,
      video: this.video,
      tags: this.tags
    };
  }
}
