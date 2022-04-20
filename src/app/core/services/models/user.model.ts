export interface IUser {
  _id?: string;
  name?: string;
  email: string;
  password: string;
  hero?: string;
  msg?: string
}

export interface IUserSignInResponse {
  token: string;
  expiresIn: number;
  _id: string;
}

export interface IUserSignUpResponse {
  message: string;
  result?: IUser;
}
