import React from "react";
import { useGetFilesQuery } from "../store/api/fileApi";
import File from "./File";
import Loader from "./layout/Loader";

const FileList = () => {
  const { data: files, isLoading } = useGetFilesQuery();

  if (isLoading) return <Loader />;
  if (!files) return <div>No Files Found!!</div>;

  return (
    <div className='grid grid-cols-3 gap-6'>
      {files.map((file) => (
        <File key={file.id} file={file}></File>
      ))}
    </div>
  );
};

export default FileList;
