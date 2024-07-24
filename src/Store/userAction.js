import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Assuming you're using Axios (adjust for other HTTP libraries)

const LoginUser = createAsyncThunk(
  "user/LoginUser",
  async (userCredentials, { rejectWithValue }) => {
    try {

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };


      const response = await axios.post(
        "http://localhost:3000/auth/login",
        userCredentials, // Include credentials in the request body
        config
      );

      // Handle successful login (optional, depends on API response structure)
      if (response) {
        localStorage.setItem("user", JSON.stringify(response.data)); // Store token in localStorage
      }

      return response.data; // Return the response data from the server
    } catch (error) {
      return rejectWithValue(error.response.data || error.message); // Handle errors with clear messages
    }
  }
);

export default LoginUser;

























// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { Axios } from "axios";

// const LoginUser = createAsyncThunk(
//   "user/LoginUser",
//   async (UserCrendentials) => {
//     const response = await Axios.post(
//       "http://localhost:3000/auth/login",
//       //{
//       // headers: {
//       //   Authorization: `Bearer ${token}`,
//       // },
//       //}
//       UserCrendentials
//     );
//     // const response = await request.data.data;
//     localStorage.setItem("user", JSON.stringify(response));
//     return response;
//   }
// );

// export default LoginUser;
