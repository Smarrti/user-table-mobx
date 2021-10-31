import { action, makeObservable, observable } from 'mobx'

import { fetchNews } from '../api/fetchNews'
import { fetchUsers } from '../api/fetchUsers'

type userInfo = {
  id: number
  name: string
  email: string
  gender: string
  status: string
  countNews: number | null
}

export interface IUsers {
  users: userInfo[]
  setUsers: (user: userInfo[]) => void
  getUsersFromApi: () => void
  isLoading: boolean
  searchPage: number
  getUserCountNewsFromApi: (userId: number) => any
}

export class Users implements IUsers {
  users: userInfo[] = []
  isLoading: boolean = false
  searchPage: number = 1

  constructor() {
    makeObservable(this, {
      users: observable,
      setUsers: action,
      getUsersFromApi: action,
      getUserCountNewsFromApi: action,
    })
  }

  setUsers(users: userInfo[]) {
    this.users = users
  }

  getUsersFromApi = async () => {
    if (this.isLoading) {
      return
    }
    this.isLoading = true

    const users = await fetchUsers(this.searchPage)
    this.setUsers([...this.users, ...users.data])
    this.searchPage += 1

    this.isLoading = false
  }

  getUserCountNewsFromApi = async (userId: number) => {
    const index = this.users.findIndex(user => user.id === userId)

    if (Number.isInteger(this.users[index].countNews)) {
      return this.users[index].countNews
    }

    const news = await fetchNews(userId)

    if (index > -1) {
      this.users[index].countNews = news.data.length
    }

    return news.data.length
  }
}
