import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFileUploadMutation } from "../store/api/fileApi";
import Loader from "./layout/Loader";

const FileUpload = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [fileUpload, { data: result, isLoading }] = useFileUploadMutation();

  const onFileUpload = (data) => {
    fileUpload(data.file[0]);
  };

  useEffect(() => {
    if (result) navigate("/");
  }, [navigate, result]);

  if (isLoading) <Loader />;

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 '>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Upload File
          </h2>
        </div>
        <form
          className='mt-8 space-y-6'
          onSubmit={handleSubmit((data) => onFileUpload(data))}
        >
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='file' className='sr-only'>
                File
              </label>
              <input
                {...register("file", {
                  required: "This field is required",
                })}
                id='file'
                name='file'
                type='file'
                autoComplete='file'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='File'
              />
            </div>
          </div>
          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileUpload;
