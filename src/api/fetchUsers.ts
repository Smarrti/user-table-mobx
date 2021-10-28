export const fetchUsers = async (page: number) => {
  const uri = `https://gorest.co.in/public-api/users?page=${page}`;

  const response = await fetch(uri);

  const responseJSON = response.json();

  return responseJSON;
};
