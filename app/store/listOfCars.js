import { create } from "zustand";
import { getData, postData } from "../../api/api";
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
    return set((state) => ({
      context: { ...state.context, liveAuctions: data },
    }));
  },
  setRecentlySold: (data) => {
    return set((state) => ({
      context: { ...state.context, recentlySold: data },
    }));
  },
  setRecentlyUnsold: (data) => {
    return set((state) => ({
      context: { ...state.context, recentlyUnsold: data },
    }));
  },
  setComingSoon: (data) => {
    return set((state) => ({
      context: { ...state.context, comingSoon: data },
    }));
  },
  getLiveAuctionList: (callback, filterQuery) => {
    getList(callback, "Live", filterQuery);
  },
  getRecentlySoldList: (callback, filterQuery) => {
    getList(callback, "Recently sold", filterQuery); // TODO: Use the same name in Back End
  },
  getRecentlyUnsoldList: (callback, filterQuery) => {
    getList(callback, "recentlyUnsold", filterQuery); // TODO: Use the same name in Back End
  },
  getComingSoonList: (callback, filterQuery) => {
    getList(callback, "Coming soon", filterQuery); // TODO: Use the same name in Back End
  },
  subscribeToNewsletter: (data, callback) => {
    subscribe(callback, data);
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

const subscribe = (callback, data) => {
  getData(`${apiEndpoints.newsletter}`, { data: { email: data.email } })
    .then((response) => {
      callback(true, response);
    })
    .catch((error) => {
      callback(false, error);
    });
};
