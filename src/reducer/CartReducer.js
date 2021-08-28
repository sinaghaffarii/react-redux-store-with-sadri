
// ------------------------------ اظافه کردن محصول به سبد خرید ------------------------
export const CartReducer = (state = { CartItems: [] }, action) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const item = action.payload;

      //  -------------------------- اگر محصول در cart  موجود بود  با محصول جدید جمع کن  ---------------------------
      const existingProduct = state.CartItems.find(
        (i) => i.product === item.product
      );

      if (existingProduct) {
        return {
          ...state,
          CartItems: state.CartItems.map((i) =>
            i.product === existingProduct.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          CartItems: [...state.CartItems, item],
        };
      }

      // ------------------- حذف کردن محصول ---------------------------

    case "CART_REMOVE_ITEM":
      return {
        ...state,
        CartItems: state.CartItems.filter((i) => i.product !== action.payload),
      };
    default:
      return state;
  }
};
