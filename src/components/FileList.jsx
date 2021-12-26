import React from "react";
import { useGetFilesQuery } from "../store/api/fileApi";
import File from "./File";
import Loader from "./layout/Loader";

const FileList = () => {
  const { data: files, isLoading } = useGetFilesQuery();

  if (isLoading) return <Loader />;
  if (!files) return <div>No Files Found!!</div>;

  return (
    <>
      <section className='container mx-auto p-6 font-mono'>
        <div className='w-full mb-8 overflow-hidden rounded-lg shadow-lg'>
          <div className='w-full overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600'>
                  <th className='px-4 py-3'>File Name</th>
                  <th className='px-4 py-3'>Created At</th>
                  <th className='px-4 py-3'></th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                {files.map((file) => (
                  <File key={file.id} file={file}></File>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div className='grid grid-cols-3 gap-6'></div>
    </>
  );
};

export default FileList;
