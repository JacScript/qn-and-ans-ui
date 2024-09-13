import { apiSlice } from './apiSlice';
const USERS_URL = 'http://localhost:3000/auth';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: 'POST',
        body: data,
        withCredentials: true // Include credentials
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
        withCredentials: true // Include credentials
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signup`,
        method: 'POST',
        body: data,
        withCredentials: true // Include credentials
      }),
    }),
    // updateUser: builder.mutation({
    //   query: (data) => ({
    //     url: `${USERS_URL}/profile`,
    //     method: 'PUT',
    //     body: data,
    //   }),
   // }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  // useUpdateUserMutation,
} = userApiSlice;