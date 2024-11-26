export interface VideoPost {
  id?: string;
  video: string;
  tags?: string[];
}
export interface PhotoPost {
  id?: string;
  photo: string;
  tags?: string[];
}
export interface TextPost {
  id?: string;
  title: string;
  preview: string;
  text: string;
  tags?: string[];
}
export interface QuotePost {
  id?: string;
  text: string;
  author: string;
  tags?: string[];
}
export interface LinkPost {
  id?: string;
  url: string;
  description?: string;
  tags?: string[];
}
export type Post = VideoPost | PhotoPost | TextPost | QuotePost | LinkPost;

export enum PostType {
  Video = 'video',
  Photo = 'photo',
  Text = 'text',
  Quote = 'quote',
  Link = 'link'
}

export enum PostState {
  Published = 'Опубликована',
  Draft = 'Черновик'
}