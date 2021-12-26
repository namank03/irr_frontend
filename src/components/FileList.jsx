import React from "react";
import { useGetFilesQuery } from "../store/api/fileApi";
import File from "./File";

const FileList = () => {
  const { data: files, isLoading } = useGetFilesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (!files) return <div>Missing files!!</div>;

  return (
    <div>
      {files.map((file) => (
        <File key={file.id} file={file}></File>
      ))}
    </div>
  );
};

export default FileList;
