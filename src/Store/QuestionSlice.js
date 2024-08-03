import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    questions: [],
    loading: false,
    error: null,
  };


export const getAllQuestions = createAsyncThunk(
  "questions/getAllQuestions",
  async () => {
    const response = await axios.get(`http://localhost:3000/questions`, {
      withCrendetials: true,
    });
    const data = response.data.question;
    return data;
  }
);



const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(getAllQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default questionsSlice.reducer;
