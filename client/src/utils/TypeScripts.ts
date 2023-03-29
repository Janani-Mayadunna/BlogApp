export interface IParams {
  page: string;
  slug: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface AuthAction {
  type: string;
  data?: any;
}
