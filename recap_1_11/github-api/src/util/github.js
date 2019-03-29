export const GITHUB_API = "https://api.github.com/";
export const GITHUB_API_USERS = `${GITHUB_API}users/`;

export const loadUser = async(username) => {
  console.log("fetching user: " + username);
  const url = `${GITHUB_API_USERS}${username}`;
  const resp = await fetch(url);
  const parsedResponse = await resp.json();
  return parsedResponse;
}




