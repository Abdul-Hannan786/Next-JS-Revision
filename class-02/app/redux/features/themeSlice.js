import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: true,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },
    setTheme: (state, action) => {
      console.log(action.payload);
      state.isDark = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
