export const fetchNews = async (userId: number) => {
  const uri = `https://gorest.co.in/public-api/posts?user_id=${userId}`;

  const response = await fetch(uri);

  const responseJSON = response.json();

  return responseJSON;
};
