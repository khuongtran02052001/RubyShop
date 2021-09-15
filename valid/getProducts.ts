import axios from "axios";

export const getProducts = async limit => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export const getPaths = async limit => {
  const paths = await getProducts(limit)
  return paths.map((item) => `/products/${item.id}`);
}

export const getById = async id => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
  return response.data;
}