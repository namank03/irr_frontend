import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFileUploadMutation } from "../store/api/fileApi";
import Loader from "./layout/Loader";

import { useDropzone } from "react-dropzone";

const FileUpload = () => {
  const navigate = useNavigate();

  const [fileUpload, { data: result, isLoading }] = useFileUploadMutation();

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({
    accept: ".xlsx,.xls",
  });

  const onFileUpload = (e) => {
    e.preventDefault();
    console.log(`acceptedFiles`, acceptedFiles);
    fileUpload(acceptedFiles[0]);
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
        <form className='mt-8 space-y-6' onSubmit={(e) => onFileUpload(e)}>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='file' className='sr-only'>
                File
              </label>
              <div className='text-center border-2 p-2 rounded-md'>
                {acceptedFiles?.length < 1 ? (
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    {isDragAccept && <p>All files will be accepted</p>}
                    {isDragReject && <p>Some files will be rejected</p>}
                    {!isDragActive && <p>Drop some files here ...</p>}
                  </div>
                ) : (
                  acceptedFiles[0]?.name
                )}
              </div>
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
