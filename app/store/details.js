import { create } from "zustand";
import { getData, postData } from "../../api/api";
import { apiEndpoints } from "../../api/endpoints";

const initialState = {
  details: {},
};

export const useProductDetails = create((set) => ({
  context: initialState,
  setDetails: (data) => {
    return set((state) => ({ ...state.context, details: data }));
  },
  getProductDetails: (productId, callback) => {
    getDetails(callback, productId);
  },
}));

const getDetails = (callback, productId) => {
  getData(`${apiEndpoints.auctionList}/${productId}`)
    .then((response) => {
      callback(true, response);
    })
    .catch((error) => {
      callback(false, error);
    });
};
