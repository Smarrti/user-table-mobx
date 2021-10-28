import { action, makeObservable, observable } from "mobx";
import { fetchUsers } from "../api/fetchUsers";

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
  getUsersFromApi: () => void;
  isLoading: boolean;
  searchPage: number;
}

export class Users implements IUsers {
  users: userInfo[] = [];
  isLoading: boolean = false;
  searchPage: number = 1;

  constructor() {
    makeObservable(this, {
      users: observable,
      createUser: action,
      getUsers: action,
      getUsersFromApi: action,
    });
  }

  getUsers() {
    return this.users;
  }

  createUser(user: userInfo) {
    this.users.push(user);
  }

  getUsersFromApi = async () => {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;

    const users = await fetchUsers(this.searchPage);
    users.data.forEach((user: userInfo) => this.createUser(user));
    this.searchPage += 1;

    this.isLoading = false;
  };
}
