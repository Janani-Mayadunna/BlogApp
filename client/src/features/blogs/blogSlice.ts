import { Blog } from "../../interfaces/Blog";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";

// an interface for everything that belongs to a blog

interface BlogState {
  blogs: Blog[] | null;
  singleBlog: Blog | null;
  loading: boolean;
  errors: any;
}

// define initial state

const initialState: BlogState = {
  blogs: [],
  singleBlog: null,
  loading: false,
  errors: null,
};

// actions - processes that gets data from BE
export const getBlogs = createAsyncThunk<Blog[]>(
  "blogs/getBlogs",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:8080/api/blogs");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createBlog = createAsyncThunk<Object, Blog>(
  "blogs/createBlog",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/blogs/blog",
        data
      );
      thunkAPI.dispatch(getBlogs());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// reducers - reduce to a specific state -> changes states
export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<Blog[]>) => {
      state.blogs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    });
    builder.addCase(getBlogs.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

export default blogSlice.reducer;
export const { setBlogs } = blogSlice.actions;
