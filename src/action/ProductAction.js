import axios from "axios";


// محصولات رو به صورت کلی نشون میده --------------------------------------------------------
export const ProductListAction = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get("http://localhost:8000/api/products");

    dispatch({
      type: "PRODUCT_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// محصول رو به تنهایی و با جزییات نشون میده ------------------------------------------------
export const ProductDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAIL_REQUEST" });
    const { data } = await axios.get(
      `http://localhost:8000/api/products/${id}`
    );

    dispatch({
      type: "PRODUCT_DETAIL_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
