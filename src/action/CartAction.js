import axios from "axios";

export const addToCart = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/products/${id}`
    );
      // از backend این داده هارو میگیریم ------------------------------------
    dispatch({
      type: "CART_ADD_ITEM",
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
      },
    });
    // وقتی سایت refresh شد پاک نشه- --------------------------------------------
    localStorage.setItem(
      "CartItems",
      JSON.stringify(getState().Cart.CartItems)
    );
  } catch (error) {
    console.log(error);
  }
};

// اکشن پاک کردن محصول از cart ---------------------------------------------
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: "CART_REMOVE_ITEM",
    payload: id,
  });
  localStorage.setItem("CartItems", JSON.stringify(getState().Cart.CartItems));
};
