export interface Info {
  sub: UserInfo;
}

export interface UserInfo {
  avatar_url?: string | null;
  created_at?: string;
  email?: string;
  id?: number;
  permission?: string;
  updated_at?: string;
  username?: string;
}
