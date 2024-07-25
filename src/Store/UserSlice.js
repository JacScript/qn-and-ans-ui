import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Assuming you're using Axios (adjust for other HTTP libraries)

export const LoginUser = createAsyncThunk(
  "user/LoginUser",
  async(userCredentials) => {

    const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
    
    const request = await axios.post("http://localhost:3000/auth/login", // Replace with your login endpoint
      userCredentials, config  )
      const response = await request.data.data;
      localStorage.setItem("user", JSON.stringify(response)); // Store token in localStorage
      // console.log(response);
      return response;
  }
  // async (userCredentials) => {

  //   const config = {
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   };

  //   const request = await axios.post(
  //     "http://localhost:3000/auth/login", // Replace with your login endpoint
  //     userCredentials, config 
  //   );    

  //   const response = request.data.data
  //   localStorage.setItem("user", JSON.stringify(response)); // Store token in localStorage
  //   console.log(response);
  //   return response; // Assuming user data is in response.data.user
  // }
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
        state.error = null;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if(action.error.message === 'password incorrect' ||  action.error.message === "Request failed with status code 401"  ) {
          state.error = "Access Denied Invalid Credentials "
        } else {
          state.error = action.error.message;
        }
      });
  },
});


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
