export class User {
  id?: number;
  name: string;
  email: string;
  role_id?: number;
  description?: string;
  email_verified_at?: string;
  password: any;
  remember_token?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  group_id?: number;
  latitude?: number;
  longitude?: number;
  address?: string;
  profile_image: string;
  checkConfi?:boolean;

  constructor(
    name: string,
    email: string,
    role_id: number,
    description: string,
    email_verified_at: string,
    password: any,
    remember_token: string,
    created_at: string,
    updated_at: string,
    deleted_at: string,
    group_id: number,
    latitude: number,
    longitude: number,
    address: string,
    profile_image: string,
    checkConfi:boolean
  ) {
    (this.name = name), (this.email = email), (this.role_id = role_id);
    this.description = description;
    this.email_verified_at = email_verified_at;
    this.password = password;
    this.remember_token = remember_token;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
    this.group_id = group_id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.address = address;
    this.profile_image = profile_image;
    this.checkConfi= checkConfi
  }
}
