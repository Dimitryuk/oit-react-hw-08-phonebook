import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const register = createAsyncThunk('auth/register', async credentials => {
//     try {
//         const { data } = await axios.post('users/signup', credentials)
//         return data
//     }
//     catch (error) {
//        console.log((error)); 
//     }
// })

const register = createAsyncThunk("auth/register", async (userReg) => {
  console.log(userReg);
  try {
    const { data } = await axios.post("users/signup", userReg);
 
    return data;
  } catch (error) {
    console.log(error);
  }
});


const operations = {
  register,
//   logOut,
//   logIn,
//   fetchCurrentUser,
};
export default operations;