export const BACKEND_API = "/api/v1";
export const BACKEND_API_UPLOAD = `${BACKEND_API}/upload`;

export const postData = async(url, formData) => {
  const resp = await fetch(url, {
    method: 'POST',
    body: formData,
  });
  const parsedResponse = await resp.json();
  return parsedResponse;
}

export const buildFormData = files => {
  const formData = new FormData()
  files.forEach((file, i) => {
    formData.append(i, file)
  })
  return formData;
}

export const uploadFiles = async(files) => {
  const formData = buildFormData(files);
  return await postData(BACKEND_API_UPLOAD, formData);
}


