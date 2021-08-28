// --------------------------------  محصولات رو به صورت جامع نشون میده  ----------------------------------
export const ProductListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return { loading: true, products: [] };
    case "PRODUCT_LIST_SUCCESS":
      return { loading: false, products: action.payload };
    default:
      return state;
  }
};


//  ------------------------------------- محصولات رو به صورت تک صفحه ای نشون میده
export const ProductDetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "PRODUCT_DETAIL_REQUEST":
      return { loading: true, ...state };
    case "PRODUCT_DETAIL_SUCCESS":
      return { loading: false, product: action.payload };
    default:
      return state;
  }
};
