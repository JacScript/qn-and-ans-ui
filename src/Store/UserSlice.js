import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Assuming you're using Axios (adjust for other HTTP libraries)


export const SignUpUser =  createAsyncThunk(
  "user/SignUpUser",
  async(userCredentials) => {
    const config = {
      headers: {
        "Content-type" : "application/json",
      },
    };

    const request =  await axios.post("http://localhost:3000/auth/signup",
      userCredentials, config)
    let response = await request.data.user;
    localStorage.setItem("user", JSON.stringify(response));
    console.log(response);
    return response;
 }
)

export const LoginUser = createAsyncThunk(
  "user/LoginUser",
  async(userCredentials) => {

    const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
    
    const request = await axios.post("http://localhost:3000/auth/login", // Replace with your login endpoint
      userCredentials, config)
      let response = await request.data.user;
      localStorage.setItem("user", JSON.stringify(response)); // Store token in localStorage
      // console.log(response);
      return response;
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
    .addCase(SignUpUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(SignUpUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload; // Assuming LoginUser returns user data
      state.error = null;
    })
    .addCase(SignUpUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      console.log(action.error.message);
      if(action.error.message === 'password incorrect' ||  action.error.message === "Request failed with status code 500"  ) {
        state.error = "Fail to regester"
      } else {
        state.error = action.error.message;
      }
    })
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
