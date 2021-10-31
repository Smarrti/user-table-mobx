import { publicApi } from '.'

export const fetchUsers = async (page: number) => {
  const uri = `${publicApi}users?page=${page}`

  const response = await fetch(uri)

  const responseJSON = response.json()

  return responseJSON
}
