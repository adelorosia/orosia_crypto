export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  bio: string;
  profile_photo: string;
  isAdmin: boolean;
  isAccountVerified: boolean;
  refresh_token: string;
}

export type TUser = Partial<IUser>;
