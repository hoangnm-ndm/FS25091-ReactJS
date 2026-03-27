const productActionTypes = {
  setProducts: (products) => ({
    type: "products/setProducts",
    payload: products,
  }),
  addProduct: (product) => ({
    type: "products/addProduct",
    payload: product,
  }),
  updateProduct: (product) => ({
    type: "products/updateProduct",
    payload: product,
  }),
  deleteProduct: (productId) => ({
    type: "products/deleteProduct",
    payload: productId,
  }),
  setLoading: () => ({
    type: "products/setLoading",
  }),
  setError: (error) => ({
    type: "products/setError",
    payload: error,
  }),
};

export default productActionTypes;
