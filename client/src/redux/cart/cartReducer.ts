import { ADD_ITEM, CLEAR_ALL, REMOVE_ITEM } from "./cartActions";
import { stateType, actionType } from "./cartModels";

export const cartReducer = (
  state: stateType = { cartItems: [], totalPrice: 0 },
  action: actionType,
) => {
  switch (action.type) {
    case ADD_ITEM:
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (value) => value.id === item.id,
      );

      if (!existingItem) {
        const totalPrice =
          state.cartItems.reduce(
            (acc, val) => acc + val.itemPrice * val.quantity,
            0,
          ) + action.payload.itemPrice;
        return {
          ...state,
          cartItems: [...state.cartItems, item],
          totalPrice: totalPrice,
        };
      } else {
        existingItem.quantity += 1;
        const totalPrice = state.cartItems.reduce(
          (acc, val) => acc + val.itemPrice * val.quantity,
          0,
        );

        return { ...state, totalPrice: totalPrice };
      }

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (value) => value.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};
