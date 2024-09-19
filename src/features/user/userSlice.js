import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiLocation";

function getLocations() {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
}
export const getLocation = createAsyncThunk(
  "user/Position",
  async (_, { rejectWithValue }) => {
    try {
      const x = await getLocations();
      const data = await getAddress(x.coords.latitude, x.coords.longitude);
      console.log(data);
      return `${data.data.countryName},${data.data.city} ${data.data.countryCode}`;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.message);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
    loader: false,
    error: "",
    address: "",
  },
  extraReducers: (x) =>
    x
      .addCase(getLocation.pending, (state) => {
        state.loader = true;
      })
      .addCase(getLocation.fulfilled, (state, action) => {
        state.error = "";
        state.address = action.payload;
        state.loader = false;
      })
      .addCase(getLocation.rejected, (state, action) => {
        state.error = action.payload;
        state.loader = false;
      }),
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
