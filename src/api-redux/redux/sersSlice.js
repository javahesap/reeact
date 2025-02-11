import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API'den kullanıcı verilerini almak için async thunk oluşturuyoruz.
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("https://dummyjson.com/users");
  return response.data.users; // 'users' dizisini döndür
});

const initialState = {
  users: [],
  status: "idle", // "loading", "succeeded", "failed"
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload; // API'den gelen 'users' dizisini state'e kaydediyoruz
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
