
export const add = (a,b) => a+b;

export const fetchData = async(url) => {
  const resp = await fetch(url);
  const parsedResponse = await resp.json();
  return parsedResponse;
}

