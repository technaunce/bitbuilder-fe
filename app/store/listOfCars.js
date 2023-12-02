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
  getLiveAuctionList: (callback, filterQuery) => {
    getList(callback, "Live", filterQuery);
  },
  getRecentlySoldList: (callback, filterQuery) => {
    getList(callback, "recentlySold", filterQuery); // TODO: Use the same name in Back End
  },
  getRecentlyUnsoldList: (callback, filterQuery) => {
    getList(callback, "recentlyUnsold", filterQuery); // TODO: Use the same name in Back End
  },
  getComingSoonList: (callback, filterQuery) => {
    getList(callback, "comingSoon", filterQuery); // TODO: Use the same name in Back End
  },
}));

const getList = (callback, auctionStatus, filterQuery) => {
  getData(
    `${apiEndpoints.auctionList}?auctionStatus=${auctionStatus}&${filterQuery}`
  )
    .then((response) => {
      callback(true, response);
    })
    .catch((error) => {
      callback(false, error);
    });
};
