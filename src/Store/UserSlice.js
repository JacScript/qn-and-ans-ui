import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Assuming you're using Axios (adjust for other HTTP libraries)

export const LoginUser = createAsyncThunk(
  "user/LoginUser",
  async (userCredentials) => {
    const response = await axios.post(
      "http://localhost:3000/auth/login", // Replace with your login endpoint
      userCredentials
    );
    localStorage.setItem("user", JSON.stringify(response)); // Store token in localStorage
    return response.data.user; // Assuming user data is in response.data.user
  }
);


const userSlice = createSlice({
  name: "user",
  initialState : {
    user: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Assuming LoginUser returns user data
        // state.error = null;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        // state.error = error.messsage
        // Handle login errors more specifically (replace with your logic)
        state.error = handleLoginError(action.error); // Delegate error handling
      });
  },
});

// Optional function to handle login errors based on your API responses
const handleLoginError = (error) => {
  if (error.response && error.response.status === 404 && error.response.status === 401) {
    return "Access Denied! Invalid Credentials";
  } else {
    return error.message || "An error occurred during login"; // Default error message
  }
};

export default userSlice.reducer;





















































// import { createSlice } from "@reduxjs/toolkit";
// import { LoginUser } from "./userAction.js"; // Import the action

// const initialState = {
//   user: null,
//   loading: false,
//   error: null,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(LoginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(LoginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.error = null;
//       })
//       .addCase(LoginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.user = null;
//         state.error = action.error.message; // Handle error more specifically
//       });
//   },
// });

// // Optional function to handle login errors (replace with your logic)
// // const handleLoginError = (error) => {
// //   if (error.response && error.response.status === 401) {
// //     return "Access Denied! Invalid Credentials";
// //   } else {
// //     return error.message || "An error occurred during login"; // Default error message
// //   }
// // };

// export default userSlice.reducer;
