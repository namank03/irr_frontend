import React from "react";
import { useForm } from "react-hook-form";
import { useFileUploadMutation } from "../store/api/fileApi";

const FileUpload = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [fileUpload] = useFileUploadMutation();

  const onFileUpload = (data) => {
    fileUpload(data.file[0]);
    // let headersList = {
    //   Accept: "*/*",
    // };
    // let formdata = new FormData();
    // formdata.append("file", data.file[0]);
    // fetch("http://127.0.0.1:8000/file/", {
    //   method: "POST",
    //   body: formdata,
    //   headers: headersList,
    // })
    //   .then(function (response) {
    //     return response.text();
    //   })
    //   .then(function (data) {
    //     console.log(data);
    //   });
  };

  return (
    <form onSubmit={handleSubmit((data) => onFileUpload(data))}>
      <label htmlFor='file'>File</label>
      <input
        type='file'
        {...register("file", {
          required: "This field is required",
        })}
        id='file'
      />
      {errors.file && <p>{errors.file.message}</p>}
      <button
        type='submit'
        className='text-center text-indigo-400 font-bold rounded py-2 w-2/12 focus:outline-none bg-gray-900 border-2 border-indigo-400'
      >
        Submit
      </button>
    </form>
  );
};

export default FileUpload;
