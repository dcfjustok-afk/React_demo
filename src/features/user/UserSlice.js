// features/user/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 假设这个异步函数会从后端获取用户信息
export const fetchUserById = createAsyncThunk(
  'user/fetchById', // action 前缀
  async (userId, thunkAPI) => {
    // 这里可以用 fetch/axios 等进行请求
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    return data; // 返回值会成为 fulfilled action 的 payload
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: { entity: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.entity = action.payload; // payload 是 createAsyncThunk 返回的 data
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default userSlice.reducer;
