export const getProducts = async () => {
  try {
    const url = `${process.env.REACT_APP_API_URL}products`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
