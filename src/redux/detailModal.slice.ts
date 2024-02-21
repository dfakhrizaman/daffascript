import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import DetailItem from "../types/DetailItem.type";

interface DetailModal {
  open: boolean;
  content: DetailItem;
}

const initialState: DetailModal = {
  open: false,
  content: {
    id: "",
    title: "",
    subtitle: "",
    tags: [],
    image: "",
    markdownContent: "",
  },
};

const detailModalSlice = createSlice({
  name: "detailModal",
  initialState,
  reducers: {
    resetDetailModal: () => {
      return initialState;
    },
    setDetailModal: (_, action: PayloadAction<DetailModal>) => {
      return action.payload;
    },
  },
});

export const { resetDetailModal, setDetailModal } = detailModalSlice.actions;
export const selectDetailModal = (state: RootState) => state.detailModal;
export default detailModalSlice.reducer;
