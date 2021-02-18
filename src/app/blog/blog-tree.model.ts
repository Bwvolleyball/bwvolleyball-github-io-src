export interface BlogJson {
  posts: BlogPost[];
}
export interface BlogPost {
  path: string;
  name: string;
  size: number;
}

export interface DecoratedBlogPost extends BlogPost {
  folder: string;
}
