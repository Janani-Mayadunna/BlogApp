import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../interfaces/User";
import { toast } from "react-toastify";

interface AccountState {
  loading: boolean;
  user: User | null;
  isLoggedIn: boolean;
  errors: Error[] | any;
}

const initialState: AccountState = {
  loading: false,
  user: null,
  isLoggedIn: false,
  errors: [],
};

export const signupUser = createAsyncThunk<User | any, Object>(
  "account/signupUser",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/authsignup",
        data
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const loginUser = createAsyncThunk<User, string | Object>(
  "account/ loginUser",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        data
      );
      const { token } = response.data;
      localStorage.setItem("jwt-blogapp", JSON.stringify(token));
      toast.success("Successfully Logged In!");
      thunkAPI.dispatch(setLoggedIn(true));
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error });
    }
  }
);

export const getCurrentUser = createAsyncThunk<void>(
  "account/getCurrentUser",
  async (_, thunkAPI) => {
    try {
      //getting token from local storage
      const token = JSON.parse(localStorage.getItem("jwt-blogapp")!);
      if (!token) {
        thunkAPI.dispatch(setLoggedIn(false));
        console.log("No token found!");
        return;
      }
      const response = await axios.get(
        "http://localhost:8080/api/auth/currentuser",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.data) {
        thunkAPI.dispatch(setLoggedIn(true));
      } else {
        thunkAPI.dispatch(setLoggedIn(false));
        return;
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue({ error });
    }
  }
);

export const logOutUser = createAsyncThunk<void>(
  "account/logOutUser",
  async (_, thunkAPI) => {
    try {
      localStorage.removeItem("jwt-blogapp");
      thunkAPI.dispatch(setLoggedIn(false));
    } catch (error) {
      return thunkAPI.rejectWithValue({ error });
    }
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setLoggedIn } = accountSlice.actions;
export default accountSlice.reducer;
