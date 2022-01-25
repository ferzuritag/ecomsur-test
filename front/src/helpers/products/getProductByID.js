export const getProductByID = async (productID) => {
  const formData = new FormData();
  try {
    const url = `http://192.168.1.5:5000/api/products/${productID}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    return {
      error: true,
      message: "Ocurrio un error, intente de nuevo",
      data: [],
    };
  }
};
