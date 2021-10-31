import { publicApi } from '.'

export const fetchNews = async (userId: number) => {
  const uri = `${publicApi}posts?user_id=${userId}`

  const response = await fetch(uri)

  const responseJSON = response.json()

  return responseJSON
}
