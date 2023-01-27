export const postPets = async (bodyData) => {
  const initialUrl = 'http://localhost:5000';
  const deployedUrl = 'https://pets-excel-filewriter.onrender.com';
  const response = await fetch(initialUrl, {
    body: JSON.stringify(bodyData),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data;
};
