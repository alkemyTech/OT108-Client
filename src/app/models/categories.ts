export class Categories {
  id?: number;
  name: string;
  description: string;
  image: string;
  parent_category_id?: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;

  constructor(
    id: number,
    name: string,
    description: string,
    image: string,
    parent_category_id: number,
    created_at: string,
    updated_at: string,
    deleted_at: string
  ) {
    (this.id = id),
      (this.name = name),
      (this.description = description),
      (this.image = image),
      (this.parent_category_id = parent_category_id),
      (this.created_at = created_at),
      (this.updated_at = updated_at),
      (this.deleted_at = deleted_at);
  }
}
