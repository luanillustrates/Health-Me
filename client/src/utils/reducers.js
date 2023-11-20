import {
  ADD_SERVICE,
  ADD_BOOKING_DATE,
  ADD_BOOKING_TIME,
  UPDATE_BOOKING_DATE,
  UPDATE_BOOKING_TIME,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_SERVICE:
      return {
        ...state,
        addService: true,
        cart: [...state.cart, action.services],
      };

    default:
      return state;
  }
};
