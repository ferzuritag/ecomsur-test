export const getProducts = async () => {
  const formData = new FormData();
  try {
    const url = `http://192.168.1.5:5000/api/products`;
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
