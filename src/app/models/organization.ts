export class Organization {
   id?:number;
  name?: string;
  logo?: string;
  short_description?: string;
  long_description?: string;
  welcome_text?: string;
  address?: string;
  phone?: string;
  cellphone?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  group_id?: number;
  facebook_url?: string;
  linkedin_url?: string;
  instagram_url?: string;
  twitter_url?: string;
  data?: Organization;

constructor (
  id:number,
  name: string,
  logo: string,
  short_description: string,
  long_description: string,
  welcome_text: string,
  address: string,
  phone: string,
  cellphone: string,
  created_at: string,
  updated_at: string,
  deleted_at: string,
  group_id: number,
  facebook_url: string,
  linkedin_url: string,
  instagram_url: string,
  twitter_url: string
){
  (this.id=id),
  (this.name=name),
  (this.logo= logo),
  (this.short_description= short_description),
  (this.long_description=long_description),
  (this.welcome_text=welcome_text),
  (this.address=address),
  (this.phone =phone),
  (this.cellphone=cellphone),
  (this.created_at=created_at),
  (this.updated_at=updated_at),
  (this.deleted_at=deleted_at),
  (this.group_id=group_id),
  (this.facebook_url=facebook_url),
  (this.linkedin_url=linkedin_url),
  (this.instagram_url=instagram_url),
  (this.twitter_url=twitter_url)

}
}