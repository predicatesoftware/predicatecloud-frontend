export interface User {
  name: string;
  email: string;
  password: string;
}

export interface ApiUser extends User {
  _id: string;
  isAdmin: Boolean;
  isConfirmed: Boolean;
}

export const compareUsers = (user: User, other: User) =>
  JSON.stringify(user) === JSON.stringify(other);
