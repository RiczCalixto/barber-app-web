export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData extends SignInData {
  name: string;
}

export interface AuthContextInterface {
  user: object;
  signIn(credentials: SignInData): Promise<void>;
  signOut(): void;
}

export interface AuthProviderState {
  token: string;
  user: object;
}

export enum StorageKey {
  Token = '@GoBarber:token',
  User = '@GoBarber:user',
}
