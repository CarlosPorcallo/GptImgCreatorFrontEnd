import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { img_default } from "@/app/config";

export const initialState: string = img_default

export const ImageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        // Setters
        setImg(state, action: { payload: string }) {
            return action.payload
        },
        resetImg() {
            return initialState
        }
    }
});

export const { setImg, resetImg } = ImageSlice.actions;

// Getters
export const ImageSelector = (state: RootState) => state.ImageInfo;

export default ImageSlice.reducer;