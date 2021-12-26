import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fileApi = createApi({
  reducerPath: "fileApi",
  tagTypes: ["Files"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/files/" }),
  endpoints: (builder) => ({
    fileUpload: builder.mutation({
      query: (file) => {
        let formdata = new FormData();
        formdata.append("file", file);
        return { url: "", method: "POST", body: formdata };
      },
      invalidatesTags: ["Files"],
    }),
    getFiles: builder.query({
      query: () => "",
      providesTags: ["Files"],
    }),
  }),
});

export const { useFileUploadMutation, useGetFilesQuery } = fileApi;
