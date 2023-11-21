import { create } from "zustand";
import { apiEndpoints } from "../../api/endpoints";
import { getData } from "../../api/api";

const initialState = {
  filterOn: false,
  filterContents: {},
  filterData: [],
};

const removeFromList = (list, itemToRemove) => {
  console.log(list, itemToRemove);
  return list.filter((item) => item.label !== itemToRemove);
};

export const useFilterStore = create((set) => ({
  context: initialState,
  apply: (data) => {
    set((state) => ({
      context: { ...state.context, filterData: data, filterOn: true },
    }));
  },
  clear: () => {
    set((state) => ({ context: initialState }));
  },
  remove: (dataToRemove) => {
    console.log(dataToRemove);
    set((state) => ({
      context: {
        ...state.context,
        filterData: removeFromList(state.context.filterData, dataToRemove),
      },
    }));
  },
  getFilterContents: (callback) => {
    getData(`${apiEndpoints.dropDownFilters}`)
      .then((response) => {
        callback(true, response);
      })
      .catch((error) => {
        callback(false, error);
      });
  },
}));
