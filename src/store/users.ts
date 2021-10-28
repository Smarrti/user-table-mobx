import { action, makeObservable, observable } from "mobx";

type userInfo = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
  countNews: number | null;
};

export interface IUsers {
  users: userInfo[];
  getUsers: () => userInfo[];
  createUser: (user: userInfo) => void;
}

export class Users implements IUsers {
  users: userInfo[] = [];

  constructor() {
    makeObservable(this, {
      users: observable,
      createUser: action,
      getUsers: action,
    });
  }

  getUsers() {
    return this.users;
  }

  createUser(user: userInfo) {
    this.users.push(user);
  }
}
