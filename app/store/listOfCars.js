import { create } from "zustand";
import { getData } from "../../api/api";
import { apiEndpoints } from "../../api/endpoints";

const initialState = {
  liveAuctions: "",
  recentlySold: "",
  recentlyUnsold: "",
  comingSoon: "",
};

export const useCarsList = create((set) => ({
  context: initialState,
  setLiveAuctions: (data) => {
    return set((state) => ({ ...state.context, liveAuctions: data }));
  },
  setRecentlySold: (data) => {
    return set((state) => ({ ...state.context, recentlySold: data }));
  },
  setRecentlyUnsold: (data) => {
    return set((state) => ({ ...state.context, recentlyUnsold: data }));
  },
  setComingSoon: (data) => {
    return set((state) => ({ ...state.context, comingSoon: data }));
  },
  getLiveAuctionList: (callback) => {
    getList(callback, "Live");
  },
  getRecentlySoldList: (callback) => {
    getList(callback, "Live");
  },
  getRecentlyUnsoldList: (callback) => {
    getList(callback, "Live");
  },
  getComingSoonList: (callback) => {
    getList(callback, "Live");
  },
}));

const getList = (callback, auctionStatus) => {
  getData(`${apiEndpoints.auctionList}?auctionStatus=${auctionStatus}`)
    .then((response) => {
      callback(true, response);
    })
    .catch((error) => {
      callback(false, error);
    });
};
