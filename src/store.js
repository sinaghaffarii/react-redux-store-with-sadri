import { createStore, combineReducers, applyMiddleware } from "redux";
// ------------------------- form show inspect
import { composeWithDevTools } from "redux-devtools-extension";

// در پروژه های بزرگ از thunk استفاده میکنیم
import thunk from "redux-thunk";

import {
  ProductListReducer,
  ProductDetailReducer,
} from "./reducer/ProductReducer";

import { CartReducer } from "./reducer/CartReducer";

// reducer هارو فراخوانی میکنیم و بعد میریزیمشون به یک تابع
const reducer = combineReducers({
  ProductList: ProductListReducer,
  ProductDetail: ProductDetailReducer,
  Cart: CartReducer,
});

// ----------------------------- اگر د رلوکال محصولی موجود بود اون رو تبدیل به پارس کن و نشون بده
const CartItemsFromLocalStorage = localStorage.getItem("CartItems")
  ? JSON.parse(localStorage.getItem("CartItems"))
  : [];

const initializeState = {
  Cart: { CartItems: CartItemsFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initializeState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
