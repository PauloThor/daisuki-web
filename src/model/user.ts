export interface Info {
  sub: UserInfo;
}

export interface UserInfo {
  avatarUrl?: string | null;
  createdAt?: string;
  email?: string;
  id?: number;
  permission?: string;
  updatedAt?: string;
  username?: string;
}

export interface PasswordInfo {
  password: string;
  passwordConfirm: string;
}
