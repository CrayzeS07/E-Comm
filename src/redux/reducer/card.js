// CardReducer.js
import { createSlice } from "@reduxjs/toolkit";

let idCounter = 1;

const initialState = {
  prodacts: [],
  count: 0,
};

const CardReducer = createSlice({
  name: "card",
  initialState,
  reducers: {
    add: (state, action) => {
      const product = state.prodacts.find(
        (items) => items.id === action.payload.id
      );
      if (!product) {
        const newProduct = { ...action.payload, id: idCounter++ };
        return { ...state, prodacts: [...state.prodacts, newProduct] };
      }
      return state;
    },
  },
});

export default CardReducer.reducer;
export const { add } = CardReducer.actions;
