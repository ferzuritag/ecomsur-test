export const getProductByID = async (productID) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}products/${productID}`;
    console.log(process.env);
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
