export class News {
  id?: number;
  name: string;
  slug?: string;
  content: string;
  image: string;
  user_id?: number;
  category_id: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;

  constructor(
    id: number,
    name: string,
    slug: string,
    content: string,
    image: string,
    user_id: number,
    category_id: number,
    created_at: string,
    updated_at: string,
    deleted_at: string
  ) {
    (this.id = id),
      (this.name = name),
      (this.slug = slug),
      (this.content = content),
      (this.image = image),
      (this.user_id = user_id),
      (this.category_id = category_id),
      (this.created_at = created_at),
      (this.updated_at = updated_at),
      (this.deleted_at = deleted_at);
    (this.id = id),
      (this.name = name),
      (this.slug = slug),
      (this.content = content),
      (this.image = image),
      (this.user_id = user_id),
      (this.category_id = category_id),
      (this.created_at = created_at);
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}
